const { ccclass, property } = cc._decorator;

let _vec3 = cc.v3();
let _domCount = 0;
const LEFT_PADDING = -5;
const BOTTOM_PADDING = -20;
interface MISTAKE_STROKEDATA {
	strokeNum: number; // 这是汉字中的第几笔
	mistakesOnStroke: number; // 这一笔画错了多少次
	totalMistakes: number; // 前面几笔一共画错了多少次
	strokesRemaining: number; // 此字符中剩余的笔划数
	drawnPath: object; // 包含pathString用户绘制的对象以及points用于评分的对象
}
interface COMPLETE_STROKEDATA {
	character: string; // 画对的字符是什么
	totalMistakes: number; // 一共画错了多少笔
}
@ccclass
export default class Writer extends cc.Component {
	public writer = null;
	private _label: string = '';

	@property()
	_showOutline: boolean = false;

	@property({
		tooltip: '初始的颜色,即轮廓的颜色'
	})
	outlineColor: cc.Color = cc.color(221, 221, 221);

	@property({
		tooltip: '填充的颜色'
	})
	strokeColor: cc.Color = cc.color(239, 42, 42);

	@property({
		tooltip: '提示下一笔时，高亮的颜色'
	})
	highlightColor: cc.Color = cc.color(22, 143, 22);
	@property({
		tooltip: '画图时笔迹的颜色'
	})
	drawingColor: cc.Color = cc.color(32, 215, 102);
	@property({
		tooltip: '显示部首时，高亮的颜色'
	})
	radicalColor: cc.Color = cc.color(32, 215, 197);

	@property({
		tooltip: '在自动填充时，增大此数字可以更快地绘制笔划，减小此速度可以更慢地绘制笔划'
	})
	strokeAnimationSpeed = 1;
	@property({
		tooltip: '在自动填充时，增大此数字可以更快地突出显示，降低该速度可以突出显示较慢'
	})
	strokeHighlightSpeed = 2;

	@property({
		tooltip: '设置动画时每个笔画之间的时间（以毫秒为单位）'
	})
	delayBetweenStrokes = 1000;

	@property({
		tooltip: '每个动画循环之间的时间（以毫秒为单位）'
	})
	delayBetweenLoops = 2000;

	@property({
		tooltip: '错误几次自动提示下一笔'
	})
	showHintAfterMisses = 1;

	@property({
		tooltip: '画图时笔迹的粗细'
	})
	drawingWidth = 20;

	@property({
		tooltip: '控制当用户完成绘制整个汉字时测验是否短暂高亮显示汉字'
	})
	highlightOnComplete = true;

	@property({
		type: cc.Component.EventHandler,
		displayName: 'onComplete',
		tooltip: '完成一个字时触发'
	})
	onComplete = new cc.Component.EventHandler();

	@property({
		type: cc.Component.EventHandler,
		displayName: 'onCorrectStroke',
		tooltip: '画对一笔时触发'
	})
	onCorrectStroke = new cc.Component.EventHandler();

	@property({
		type: cc.Component.EventHandler,
		displayName: 'onMistake',
		tooltip: '当画错时触发'
	})
	onMistake = new cc.Component.EventHandler();

	public set writerActive(newVal) {
		if (this._writerActive == newVal) return;
		this._writerActive = newVal;
		this._updateActive();
	}

	public get writerActive() {
		return this._writerActive;
	}
	private _writerActive = false;
	private _padding = 20; // 绘画区域的外扩面积
	private _worldMat: cc.Mat4 = null;
	private _m00 = 0;
	private _m01 = 0;
	private _m04 = 0;
	private _m05 = 0;
	private _m12 = 0;
	private _m13 = 0;
	private _w = 0;
	private _h = 0;
	private _scaleX = 1;
	private _scaleY = 0;
	private _labelWidth = 0;
	private _labelHeight = 0;
	private _cacheViewportRect: cc.Rect = null;
	private _elem: HTMLElement = null;
	private _domId = '';
	private _hasInit = false;
	private _eventListeners: any = {};

	_init() {
		this._label = this.node.getComponent(cc.Label).string;
		this._labelWidth = this.node.width;
		this._labelHeight = this.node.height;
		this._domId = `WriteBox${++_domCount}`;
		this._elem = null;
		this._worldMat = new cc.Mat4();
		this._cameraMat = new cc.Mat4();
		this._m00 = 0;
		this._m01 = 0;
		this._m04 = 0;
		this._m05 = 0;
		this._m12 = 0;
		this._m13 = 0;
		this._w = 0;
		this._h = 0;
		this._cacheViewportRect = cc.rect(0, 0, 0, 0);
		this.initHanzi();
		this.node.getComponent(cc.Label).enabled = false;
		this._hasInit = true;
	}
	private _createDom() {
		this._elem = document.createElement('div');
	}
	private _initStyleSheet() {
		let elem = this._elem;
		// elem.style.display = 'none';
		elem.style.border = '0';
		elem.style.background = 'transparent';
		elem.style.width = '100%';
		elem.style.height = '100%';
		elem.style.padding = '0';
		elem.style.position = 'absolute';
		elem.style.bottom = BOTTOM_PADDING + 'px';
		elem.style.left = LEFT_PADDING + 'px';
		elem.id = this._domId;
	}
	private _addDomToGameContainer() {
		cc.game.container.appendChild(this._elem);
	}

	private _cameraMat: cc.Mat4 = null;
	private _updateMatrix() {
        let node = this.node;
        cc.log(this._worldMat)
		node.getWorldMatrix(this._worldMat);
		let worldMat = this._worldMat;
		let worldMatm = worldMat.m;
		let localView = cc.view;
		// 检测是否需要挪动位置
		if (
			this._m00 === worldMatm[0] &&
			this._m01 === worldMatm[1] &&
			this._m04 === worldMatm[4] &&
			this._m05 === worldMatm[5] &&
			this._m12 === worldMatm[12] &&
			this._m13 === worldMatm[13] &&
			this._w === node.getContentSize().width &&
			this._h === node.getContentSize().height &&
			this._cacheViewportRect.equals(localView.getViewportRect())
		) {
			return;
		}

		// 更新矩阵缓存
		this._m00 = worldMatm[0];
		this._m01 = worldMatm[1];
		this._m04 = worldMatm[4];
		this._m05 = worldMatm[5];
		this._m12 = worldMatm[12];
		this._m13 = worldMatm[13];
		this._w = node.getContentSize().width;
		this._h = node.getContentSize().height;

		// 更新视图缓存 需要判断缩放和锚点
		this._cacheViewportRect.set(localView.getViewportRect());
		// @ts-ignore
		let scaleX = localView._scaleX;
		// @ts-ignore
		let scaleY = localView._scaleY;
		// @ts-ignore
		let viewport = localView._viewportRect;
		// @ts-ignore
		let dpr = localView._devicePixelRatio;
		// @ts-ignore
		_vec3.x = -node._anchorPoint.x * this._w;
		// @ts-ignore
		_vec3.y = -node._anchorPoint.y * this._h;

		cc.Mat4.transform(worldMat, worldMat, _vec3);

		let cameraMat;

		let camera = cc.Camera.findCamera(node);
		camera.getWorldToScreenMatrix2D(this._cameraMat);
		cameraMat = this._cameraMat;
		// @ts-ignore
		cc.Mat4.mul(cameraMat, cameraMat, worldMat);

		scaleX /= dpr;
		scaleY /= dpr;

		let container = cc.game.container;
		let cameraMatm = cameraMat.m;
		let a = cameraMatm[0] * scaleX,
			b = cameraMatm[1],
			c = cameraMatm[4],
			d = cameraMatm[5] * scaleY;
		this._scaleX = a;
		this._scaleY = d;
		let offsetX =
			container && container.style.paddingLeft && parseInt(container.style.paddingLeft);
		offsetX += viewport.x / dpr;
		let offsetY =
			container && container.style.paddingBottom && parseInt(container.style.paddingBottom);
		offsetY += viewport.y / dpr;
		let tx = cameraMatm[12] * scaleX + offsetX,
			ty = cameraMatm[13] * scaleY + offsetY;

		let elem = this._elem;
		let matrix = 'matrix(' + 1 + ',' + -b + ',' + -c + ',' + 1 + ',' + tx + ',' + -ty + ')';
		elem.style['transform'] = matrix;
		elem.style['-webkit-transform'] = matrix;
		elem.style['transform-origin'] = '0px 100% 0px';
		elem.style['-webkit-transform-origin'] = '0px 100% 0px';
	}

	private _updateHanzi() {
		this._labelWidth = this.node.width;
		this._labelHeight = this.node.height;
		this.destroySelf();
		this.initHanzi();
	}
	private _updateActive() {
		if (this._writerActive) {
			if (!this._hasInit) {
				this._init();
			} else {
				this._showDom();
			}
		} else {
			this._hideDom();
		}
	}

	private _showDom() {
		this._updateMatrix();
		this._elem.style.display = '';
	}

	private _hideDom() {
		this._elem.style.display = 'none';
	}
	private _clear() {
		if (document.getElementById(this._domId)) {
			document.getElementById(this._domId).remove();
		}
	}
	private _registerEventListeners() {
		let impl = this;
		let cbs = this._eventListeners;

		cbs.onResize = function() {
			impl._updateMatrix();
		};
		cbs.POSITION_CHANGED = function() {
			impl._updateMatrix();
		};
		cbs.SIZE_CHANGED = function() {
			impl._updateHanzi();
		};
		cbs.ANCHOR_CHANGED = function() {
			impl._updateMatrix();
		};
		window.addEventListener('resize', cbs.onResize);
		window.addEventListener('orientationchange', cbs.onResize);

		this.node.on(cc.Node.EventType.POSITION_CHANGED, cbs.POSITION_CHANGED, this);
		this.node.on(cc.Node.EventType.SIZE_CHANGED, cbs.SIZE_CHANGED, this);
		this.node.on(cc.Node.EventType.ANCHOR_CHANGED, cbs.ANCHOR_CHANGED, this);
	}
	private _removeEventListeners() {
		let cbs = this._eventListeners;
		window.removeEventListener('resize', cbs.onResize);
		window.removeEventListener('orientationchange', cbs.onResize);
		this.node.off(cc.Node.EventType.POSITION_CHANGED, cbs.POSITION_CHANGED, this);
		this.node.off(cc.Node.EventType.SIZE_CHANGED, cbs.SIZE_CHANGED, this);
		this.node.off(cc.Node.EventType.ANCHOR_CHANGED, cbs.ANCHOR_CHANGED, this);
	}

	public initHanzi() {
		this._createDom();
		this._initStyleSheet();
		this._updateMatrix();
		this.setSize();
		this._addDomToGameContainer();
		this._registerEventListeners();
		// @ts-ignore
		this.writer = HanziWriter.create(this._domId, this._label, {
			width: (this._labelWidth + this._padding * 2) * this._scaleX,
			height: (this._labelHeight + this._padding * 2) * this._scaleY,
			padding: this._padding * this._scaleX,
			showHintAfterMisses: this.showHintAfterMisses,
			strokeColor: '#' + this.strokeColor.toHEX('#rrggbb'),
			highlightColor: '#' + this.highlightColor.toHEX('#rrggbb'),
			radicalColor: '#' + this.radicalColor.toHEX('#rrggbb'),
			outlineColor: '#' + this.outlineColor.toHEX('#rrggbb'),
			drawingColor: '#' + this.drawingColor.toHEX('#rrggbb'),
			drawingWidth: this.drawingWidth,
			strokeAnimationSpeed: this.strokeAnimationSpeed,
			delayBetweenStrokes: this.delayBetweenStrokes,
			highlightOnComplete: this.highlightOnComplete,
			strokeHighlightSpeed: this.strokeHighlightSpeed,
			delayBetweenLoops: this.delayBetweenLoops
		});
		const component = this;
		this.writer.quiz({
			onComplete(summaryData: COMPLETE_STROKEDATA) {
				cc.log('complete');
				cc.Component.EventHandler.emitEvents(
					[component.onComplete],
					summaryData,
					component
				);
			},
			onCorrectStroke(strokeData: MISTAKE_STROKEDATA) {
				cc.log('当前的笔画编号:' + strokeData.strokeNum);
				cc.Component.EventHandler.emitEvents(
					[component.onCorrectStroke],
					strokeData,
					component
				);
			},
			onMistake(strokeData: MISTAKE_STROKEDATA) {
				cc.log('error');
				cc.Component.EventHandler.emitEvents([component.onMistake], strokeData, component);
			}
		});
	}
	public show() {
		this._showDom();
	}
	public hide() {
		this._hideDom();
	}
	public destroySelf() {
		this._elem = null;
		this._removeEventListeners();
		this._clear();
	}
	// 改变cocos内的label之后调用这个方法
	public changeLabel() {
		this._clear();
		this._init();
	}
	public animateCharacter() {
		this.writer.animateCharacter();
	}
	public setSize() {
		let elem = this._elem;
		elem.style.width = (this._labelWidth + this._padding * 2) * this._scaleX + 'px';
		elem.style.height = (this._labelHeight + this._padding * 2) * this._scaleY + 'px';
	}

	onEnable() {
		this._init();
	}

	onDisable() {
		this.destroySelf();
	}
}
