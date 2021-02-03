"use strict";
cc._RF.push(module, '2609dFBnkVIi5jozWtHkI9O', 'writer');
// game_writer/writer/writer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var _vec3 = cc.v3();
var _domCount = 0;
var LEFT_PADDING = -5;
var BOTTOM_PADDING = -20;
var Writer = /** @class */ (function (_super) {
    __extends(Writer, _super);
    function Writer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.writer = null;
        _this._label = '';
        _this._showOutline = false;
        _this.outlineColor = cc.color(221, 221, 221);
        _this.strokeColor = cc.color(239, 42, 42);
        _this.highlightColor = cc.color(22, 143, 22);
        _this.drawingColor = cc.color(32, 215, 102);
        _this.radicalColor = cc.color(32, 215, 197);
        _this.strokeAnimationSpeed = 1;
        _this.strokeHighlightSpeed = 2;
        _this.delayBetweenStrokes = 1000;
        _this.delayBetweenLoops = 2000;
        _this.showHintAfterMisses = 1;
        _this.drawingWidth = 20;
        _this.highlightOnComplete = true;
        _this.onComplete = new cc.Component.EventHandler();
        _this.onCorrectStroke = new cc.Component.EventHandler();
        _this.onMistake = new cc.Component.EventHandler();
        _this._writerActive = false;
        _this._padding = 20; // 绘画区域的外扩面积
        _this._worldMat = null;
        _this._m00 = 0;
        _this._m01 = 0;
        _this._m04 = 0;
        _this._m05 = 0;
        _this._m12 = 0;
        _this._m13 = 0;
        _this._w = 0;
        _this._h = 0;
        _this._scaleX = 1;
        _this._scaleY = 0;
        _this._labelWidth = 0;
        _this._labelHeight = 0;
        _this._cacheViewportRect = null;
        _this._elem = null;
        _this._domId = '';
        _this._hasInit = false;
        _this._eventListeners = {};
        _this._cameraMat = null;
        return _this;
    }
    Object.defineProperty(Writer.prototype, "writerActive", {
        get: function () {
            return this._writerActive;
        },
        set: function (newVal) {
            if (this._writerActive == newVal)
                return;
            this._writerActive = newVal;
            this._updateActive();
        },
        enumerable: true,
        configurable: true
    });
    Writer.prototype._init = function () {
        this._label = this.node.getComponent(cc.Label).string;
        this._labelWidth = this.node.width;
        this._labelHeight = this.node.height;
        this._domId = "WriteBox" + ++_domCount;
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
    };
    Writer.prototype._createDom = function () {
        this._elem = document.createElement('div');
    };
    Writer.prototype._initStyleSheet = function () {
        var elem = this._elem;
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
    };
    Writer.prototype._addDomToGameContainer = function () {
        cc.game.container.appendChild(this._elem);
    };
    Writer.prototype._updateMatrix = function () {
        var node = this.node;
        cc.log(this._worldMat);
        node.getWorldMatrix(this._worldMat);
        var worldMat = this._worldMat;
        var worldMatm = worldMat.m;
        var localView = cc.view;
        // 检测是否需要挪动位置
        if (this._m00 === worldMatm[0] &&
            this._m01 === worldMatm[1] &&
            this._m04 === worldMatm[4] &&
            this._m05 === worldMatm[5] &&
            this._m12 === worldMatm[12] &&
            this._m13 === worldMatm[13] &&
            this._w === node.getContentSize().width &&
            this._h === node.getContentSize().height &&
            this._cacheViewportRect.equals(localView.getViewportRect())) {
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
        var scaleX = localView._scaleX;
        // @ts-ignore
        var scaleY = localView._scaleY;
        // @ts-ignore
        var viewport = localView._viewportRect;
        // @ts-ignore
        var dpr = localView._devicePixelRatio;
        // @ts-ignore
        _vec3.x = -node._anchorPoint.x * this._w;
        // @ts-ignore
        _vec3.y = -node._anchorPoint.y * this._h;
        cc.Mat4.transform(worldMat, worldMat, _vec3);
        var cameraMat;
        var camera = cc.Camera.findCamera(node);
        camera.getWorldToScreenMatrix2D(this._cameraMat);
        cameraMat = this._cameraMat;
        // @ts-ignore
        cc.Mat4.mul(cameraMat, cameraMat, worldMat);
        scaleX /= dpr;
        scaleY /= dpr;
        var container = cc.game.container;
        var cameraMatm = cameraMat.m;
        var a = cameraMatm[0] * scaleX, b = cameraMatm[1], c = cameraMatm[4], d = cameraMatm[5] * scaleY;
        this._scaleX = a;
        this._scaleY = d;
        var offsetX = container && container.style.paddingLeft && parseInt(container.style.paddingLeft);
        offsetX += viewport.x / dpr;
        var offsetY = container && container.style.paddingBottom && parseInt(container.style.paddingBottom);
        offsetY += viewport.y / dpr;
        var tx = cameraMatm[12] * scaleX + offsetX, ty = cameraMatm[13] * scaleY + offsetY;
        var elem = this._elem;
        var matrix = 'matrix(' + 1 + ',' + -b + ',' + -c + ',' + 1 + ',' + tx + ',' + -ty + ')';
        elem.style['transform'] = matrix;
        elem.style['-webkit-transform'] = matrix;
        elem.style['transform-origin'] = '0px 100% 0px';
        elem.style['-webkit-transform-origin'] = '0px 100% 0px';
    };
    Writer.prototype._updateHanzi = function () {
        this._labelWidth = this.node.width;
        this._labelHeight = this.node.height;
        this.destroySelf();
        this.initHanzi();
    };
    Writer.prototype._updateActive = function () {
        if (this._writerActive) {
            if (!this._hasInit) {
                this._init();
            }
            else {
                this._showDom();
            }
        }
        else {
            this._hideDom();
        }
    };
    Writer.prototype._showDom = function () {
        this._updateMatrix();
        this._elem.style.display = '';
    };
    Writer.prototype._hideDom = function () {
        this._elem.style.display = 'none';
    };
    Writer.prototype._clear = function () {
        if (document.getElementById(this._domId)) {
            document.getElementById(this._domId).remove();
        }
    };
    Writer.prototype._registerEventListeners = function () {
        var impl = this;
        var cbs = this._eventListeners;
        cbs.onResize = function () {
            impl._updateMatrix();
        };
        cbs.POSITION_CHANGED = function () {
            impl._updateMatrix();
        };
        cbs.SIZE_CHANGED = function () {
            impl._updateHanzi();
        };
        cbs.ANCHOR_CHANGED = function () {
            impl._updateMatrix();
        };
        window.addEventListener('resize', cbs.onResize);
        window.addEventListener('orientationchange', cbs.onResize);
        this.node.on(cc.Node.EventType.POSITION_CHANGED, cbs.POSITION_CHANGED, this);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, cbs.SIZE_CHANGED, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, cbs.ANCHOR_CHANGED, this);
    };
    Writer.prototype._removeEventListeners = function () {
        var cbs = this._eventListeners;
        window.removeEventListener('resize', cbs.onResize);
        window.removeEventListener('orientationchange', cbs.onResize);
        this.node.off(cc.Node.EventType.POSITION_CHANGED, cbs.POSITION_CHANGED, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, cbs.SIZE_CHANGED, this);
        this.node.off(cc.Node.EventType.ANCHOR_CHANGED, cbs.ANCHOR_CHANGED, this);
    };
    Writer.prototype.initHanzi = function () {
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
        var component = this;
        this.writer.quiz({
            onComplete: function (summaryData) {
                cc.log('complete');
                cc.Component.EventHandler.emitEvents([component.onComplete], summaryData, component);
            },
            onCorrectStroke: function (strokeData) {
                cc.log('当前的笔画编号:' + strokeData.strokeNum);
                cc.Component.EventHandler.emitEvents([component.onCorrectStroke], strokeData, component);
            },
            onMistake: function (strokeData) {
                cc.log('error');
                cc.Component.EventHandler.emitEvents([component.onMistake], strokeData, component);
            }
        });
    };
    Writer.prototype.show = function () {
        this._showDom();
    };
    Writer.prototype.hide = function () {
        this._hideDom();
    };
    Writer.prototype.destroySelf = function () {
        this._elem = null;
        this._removeEventListeners();
        this._clear();
    };
    // 改变cocos内的label之后调用这个方法
    Writer.prototype.changeLabel = function () {
        this._clear();
        this._init();
    };
    Writer.prototype.animateCharacter = function () {
        this.writer.animateCharacter();
    };
    Writer.prototype.setSize = function () {
        var elem = this._elem;
        elem.style.width = (this._labelWidth + this._padding * 2) * this._scaleX + 'px';
        elem.style.height = (this._labelHeight + this._padding * 2) * this._scaleY + 'px';
    };
    Writer.prototype.onEnable = function () {
        this._init();
    };
    Writer.prototype.onDisable = function () {
        this.destroySelf();
    };
    __decorate([
        property()
    ], Writer.prototype, "_showOutline", void 0);
    __decorate([
        property({
            tooltip: '初始的颜色,即轮廓的颜色'
        })
    ], Writer.prototype, "outlineColor", void 0);
    __decorate([
        property({
            tooltip: '填充的颜色'
        })
    ], Writer.prototype, "strokeColor", void 0);
    __decorate([
        property({
            tooltip: '提示下一笔时，高亮的颜色'
        })
    ], Writer.prototype, "highlightColor", void 0);
    __decorate([
        property({
            tooltip: '画图时笔迹的颜色'
        })
    ], Writer.prototype, "drawingColor", void 0);
    __decorate([
        property({
            tooltip: '显示部首时，高亮的颜色'
        })
    ], Writer.prototype, "radicalColor", void 0);
    __decorate([
        property({
            tooltip: '在自动填充时，增大此数字可以更快地绘制笔划，减小此速度可以更慢地绘制笔划'
        })
    ], Writer.prototype, "strokeAnimationSpeed", void 0);
    __decorate([
        property({
            tooltip: '在自动填充时，增大此数字可以更快地突出显示，降低该速度可以突出显示较慢'
        })
    ], Writer.prototype, "strokeHighlightSpeed", void 0);
    __decorate([
        property({
            tooltip: '设置动画时每个笔画之间的时间（以毫秒为单位）'
        })
    ], Writer.prototype, "delayBetweenStrokes", void 0);
    __decorate([
        property({
            tooltip: '每个动画循环之间的时间（以毫秒为单位）'
        })
    ], Writer.prototype, "delayBetweenLoops", void 0);
    __decorate([
        property({
            tooltip: '错误几次自动提示下一笔'
        })
    ], Writer.prototype, "showHintAfterMisses", void 0);
    __decorate([
        property({
            tooltip: '画图时笔迹的粗细'
        })
    ], Writer.prototype, "drawingWidth", void 0);
    __decorate([
        property({
            tooltip: '控制当用户完成绘制整个汉字时测验是否短暂高亮显示汉字'
        })
    ], Writer.prototype, "highlightOnComplete", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            displayName: 'onComplete',
            tooltip: '完成一个字时触发'
        })
    ], Writer.prototype, "onComplete", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            displayName: 'onCorrectStroke',
            tooltip: '画对一笔时触发'
        })
    ], Writer.prototype, "onCorrectStroke", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            displayName: 'onMistake',
            tooltip: '当画错时触发'
        })
    ], Writer.prototype, "onMistake", void 0);
    Writer = __decorate([
        ccclass
    ], Writer);
    return Writer;
}(cc.Component));
exports.default = Writer;

cc._RF.pop();