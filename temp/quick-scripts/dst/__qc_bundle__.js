
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/game_writer/writer/writer');
require('./assets/game_writer/writerDemo');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_writer/writerDemo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e4a5ivpPJGqbfnAqdVazQx', 'writerDemo');
// game_writer/writerDemo.ts

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
var writer_1 = require("./writer/writer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.writerNode = null;
        return _this;
    }
    Demo.prototype.start = function () {
        this.writerNode = this.node.getChildByName('writer');
    };
    Demo.prototype.onChangeShowStatusClick = function (el) {
        if (el.currentTarget.children[0].getComponentInChildren(cc.Label).string == '隐藏') {
            this.writerNode.active = false;
            el.currentTarget.children[0].getComponentInChildren(cc.Label).string = '显示';
        }
        else if (el.currentTarget.children[0].getComponentInChildren(cc.Label).string == '显示') {
            this.writerNode.active = true;
            el.currentTarget.children[0].getComponentInChildren(cc.Label).string = '隐藏';
        }
    };
    Demo.prototype.onChangeLabelClick = function () {
        this.writerNode.active = true;
        var str = '秦时明月汉时关万里长征人未还但使龙城飞将在不教胡马渡阴山';
        var labelText = str[Math.floor(Math.random() * str.length)];
        this.writerNode.getComponent(cc.Label).string = labelText;
        this.writerNode.getComponent(writer_1.default).changeLabel();
    };
    Demo.prototype.onAnimateClick = function () {
        this.writerNode.getComponent(writer_1.default).animateCharacter();
    };
    Demo = __decorate([
        ccclass
    ], Demo);
    return Demo;
}(cc.Component));
exports.default = Demo;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lX3dyaXRlci93cml0ZXJEZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUUvQixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBMkJDO1FBekJRLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQXlCcEMsQ0FBQztJQXhCQSxvQkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsc0NBQXVCLEdBQXZCLFVBQXdCLEVBQUU7UUFDekIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUU7YUFBTSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM1RTtJQUNGLENBQUM7SUFFRCxpQ0FBa0IsR0FBbEI7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBTSxHQUFHLEdBQUcsOEJBQThCLENBQUM7UUFDM0MsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUF6Qm1CLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwQnhCO0lBQUQsV0FBQztDQTFCRCxBQTBCQyxDQTFCaUMsRUFBRSxDQUFDLFNBQVMsR0EwQjdDO2tCQTFCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcml0ZXIgZnJvbSAnLi93cml0ZXIvd3JpdGVyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRwcml2YXRlIHdyaXRlck5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXHRzdGFydCgpIHtcblx0XHR0aGlzLndyaXRlck5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dyaXRlcicpO1xuXHR9XG5cdG9uQ2hhbmdlU2hvd1N0YXR1c0NsaWNrKGVsKSB7XG5cdFx0aWYgKGVsLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID09ICfpmpDol48nKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlck5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRlbC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9ICfmmL7npLonO1xuXHRcdH0gZWxzZSBpZiAoZWwuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPT0gJ+aYvuekuicpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVyTm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0ZWwuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSAn6ZqQ6JePJztcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUxhYmVsQ2xpY2soKSB7XG5cdFx0dGhpcy53cml0ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0Y29uc3Qgc3RyID0gJ+enpuaXtuaYjuaciOaxieaXtuWFs+S4h+mHjOmVv+W+geS6uuacqui/mOS9huS9v+m+meWfjumjnuWwhuWcqOS4jeaVmeiDoemprOa4oemYtOWxsSc7XG5cdFx0Y29uc3QgbGFiZWxUZXh0ID0gc3RyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0ci5sZW5ndGgpXTtcblx0XHR0aGlzLndyaXRlck5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsYWJlbFRleHQ7XG5cdFx0dGhpcy53cml0ZXJOb2RlLmdldENvbXBvbmVudChXcml0ZXIpLmNoYW5nZUxhYmVsKCk7XG5cdH1cblxuXHRvbkFuaW1hdGVDbGljaygpIHtcblx0XHR0aGlzLndyaXRlck5vZGUuZ2V0Q29tcG9uZW50KFdyaXRlcikuYW5pbWF0ZUNoYXJhY3RlcigpO1xuXHR9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_writer/writer/writer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lX3dyaXRlci93cml0ZXIvd3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQWEzQjtJQUFvQywwQkFBWTtJQURoRDtRQUFBLHFFQW1ZQztRQWpZTyxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUc1QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUs5QixrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUtqRCxpQkFBVyxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUs5QyxvQkFBYyxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUlqRCxrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUloRCxrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUtoRCwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFJekIsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBS3pCLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUszQix1QkFBaUIsR0FBRyxJQUFJLENB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QztZQUNULElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLFdBQVc7WUFDeEIsT0FBTyxFQUFFLFFBQVE7U0FDakIsQ0FBQzs2Q0FDMEM7SUFuRnhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrWTFCO0lBQUQsYUFBQztDQWxZRCxBQWtZQyxDQWxZbUMsRUFBRSxDQUFDLFNBQVMsR0FrWS9DO2tCQWxZb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmxldCBfdmVjMyA9IGNjLnYzKCk7XG5sZXQgX2RvbUNvdW50ID0gMDtcbmNvbnN0IExFRlRfUEFERElORyA9IC01O1xuY29uc3QgQk9UVE9NX1BBRERJTkcgPSAtMjA7XG5pbnRlcmZhY2UgTUlTVEFLRV9TVFJPS0VEQVRBIHtcblx0c3Ryb2tlTnVtOiBudW1iZXI7IC8vIOi/meaYr+axieWtl+S4reeahOesrOWHoOeslFxuXHRtaXN0YWtlc09uU3Ryb2tlOiBudW1iZXI7IC8vIOi/meS4gOeslOeUu+mUmeS6huWkmuWwkeasoVxuXHR0b3RhbE1pc3Rha2VzOiBudW1iZXI7IC8vIOWJjemdouWHoOeslOS4gOWFseeUu+mUmeS6huWkmuWwkeasoVxuXHRzdHJva2VzUmVtYWluaW5nOiBudW1iZXI7IC8vIOatpOWtl+espuS4reWJqeS9meeahOeslOWIkuaVsFxuXHRkcmF3blBhdGg6IG9iamVjdDsgLy8g5YyF5ZCrcGF0aFN0cmluZ+eUqOaIt+e7mOWItueahOWvueixoeS7peWPinBvaW50c+eUqOS6juivhOWIhueahOWvueixoVxufVxuaW50ZXJmYWNlIENPTVBMRVRFX1NUUk9LRURBVEEge1xuXHRjaGFyYWN0ZXI6IHN0cmluZzsgLy8g55S75a+555qE5a2X56ym5piv5LuA5LmIXG5cdHRvdGFsTWlzdGFrZXM6IG51bWJlcjsgLy8g5LiA5YWx55S76ZSZ5LqG5aSa5bCR56yUXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0cHVibGljIHdyaXRlciA9IG51bGw7XG5cdHByaXZhdGUgX2xhYmVsOiBzdHJpbmcgPSAnJztcblxuXHRAcHJvcGVydHkoKVxuXHRfc2hvd091dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAcHJvcGVydHkoe1xuXHRcdHRvb2x0aXA6ICfliJ3lp4vnmoTpopzoibIs5Y2z6L2u5buT55qE6aKc6ImyJ1xuXHR9KVxuXHRvdXRsaW5lQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjIxLCAyMjEsIDIyMSk7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0b29sdGlwOiAn5aGr5YWF55qE6aKc6ImyJ1xuXHR9KVxuXHRzdHJva2VDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigyMzksIDQyLCA0Mik7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0b29sdGlwOiAn5o+Q56S65LiL5LiA56yU5pe277yM6auY5Lqu55qE6aKc6ImyJ1xuXHR9KVxuXHRoaWdobGlnaHRDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigyMiwgMTQzLCAyMik7XG5cdEBwcm9wZXJ0eSh7XG5cdFx0dG9vbHRpcDogJ+eUu+WbvuaXtueslOi/ueeahOminOiJsidcblx0fSlcblx0ZHJhd2luZ0NvbG9yOiBjYy5Db2xvciA9IGNjLmNvbG9yKDMyLCAyMTUsIDEwMik7XG5cdEBwcm9wZXJ0eSh7XG5cdFx0dG9vbHRpcDogJ+aYvuekuumDqOmmluaXtu+8jOmrmOS6rueahOminOiJsidcblx0fSlcblx0cmFkaWNhbENvbG9yOiBjYy5Db2xvciA9IGNjLmNvbG9yKDMyLCAyMTUsIDE5Nyk7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0b29sdGlwOiAn5Zyo6Ieq5Yqo5aGr5YWF5pe277yM5aKe5aSn5q2k5pWw5a2X5Y+v5Lul5pu05b+r5Zyw57uY5Yi256yU5YiS77yM5YeP5bCP5q2k6YCf5bqm5Y+v5Lul5pu05oWi5Zyw57uY5Yi256yU5YiSJ1xuXHR9KVxuXHRzdHJva2VBbmltYXRpb25TcGVlZCA9IDE7XG5cdEBwcm9wZXJ0eSh7XG5cdFx0dG9vbHRpcDogJ+WcqOiHquWKqOWhq+WFheaXtu+8jOWinuWkp+atpOaVsOWtl+WPr+S7peabtOW/q+WcsOeqgeWHuuaYvuekuu+8jOmZjeS9juivpemAn+W6puWPr+S7peeqgeWHuuaYvuekuui+g+aFoidcblx0fSlcblx0c3Ryb2tlSGlnaGxpZ2h0U3BlZWQgPSAyO1xuXG5cdEBwcm9wZXJ0eSh7XG5cdFx0dG9vbHRpcDogJ+iuvue9ruWKqOeUu+aXtuavj+S4queslOeUu+S5i+mXtOeahOaXtumXtO+8iOS7peavq+enkuS4uuWNleS9je+8iSdcblx0fSlcblx0ZGVsYXlCZXR3ZWVuU3Ryb2tlcyA9IDEwMDA7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0b29sdGlwOiAn5q+P5Liq5Yqo55S75b6q546v5LmL6Ze055qE5pe26Ze077yI5Lul5q+r56eS5Li65Y2V5L2N77yJJ1xuXHR9KVxuXHRkZWxheUJldHdlZW5Mb29wcyA9IDIwMDA7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0b29sdGlwOiAn6ZSZ6K+v5Yeg5qyh6Ieq5Yqo5o+Q56S65LiL5LiA56yUJ1xuXHR9KVxuXHRzaG93SGludEFmdGVyTWlzc2VzID0gMTtcblxuXHRAcHJvcGVydHkoe1xuXHRcdHRvb2x0aXA6ICfnlLvlm77ml7bnrJTov7nnmoTnspfnu4YnXG5cdH0pXG5cdGRyYXdpbmdXaWR0aCA9IDIwO1xuXG5cdEBwcm9wZXJ0eSh7XG5cdFx0dG9vbHRpcDogJ+aOp+WItuW9k+eUqOaIt+WujOaIkOe7mOWItuaVtOS4quaxieWtl+aXtua1i+mqjOaYr+WQpuefreaagumrmOS6ruaYvuekuuaxieWtlydcblx0fSlcblx0aGlnaGxpZ2h0T25Db21wbGV0ZSA9IHRydWU7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuXHRcdGRpc3BsYXlOYW1lOiAnb25Db21wbGV0ZScsXG5cdFx0dG9vbHRpcDogJ+WujOaIkOS4gOS4quWtl+aXtuinpuWPkSdcblx0fSlcblx0b25Db21wbGV0ZSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG5cblx0QHByb3BlcnR5KHtcblx0XHR0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuXHRcdGRpc3BsYXlOYW1lOiAnb25Db3JyZWN0U3Ryb2tlJyxcblx0XHR0b29sdGlwOiAn55S75a+55LiA56yU5pe26Kem5Y+RJ1xuXHR9KVxuXHRvbkNvcnJlY3RTdHJva2UgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuXG5cdEBwcm9wZXJ0eSh7XG5cdFx0dHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcblx0XHRkaXNwbGF5TmFtZTogJ29uTWlzdGFrZScsXG5cdFx0dG9vbHRpcDogJ+W9k+eUu+mUmeaXtuinpuWPkSdcblx0fSlcblx0b25NaXN0YWtlID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcblxuXHRwdWJsaWMgc2V0IHdyaXRlckFjdGl2ZShuZXdWYWwpIHtcblx0XHRpZiAodGhpcy5fd3JpdGVyQWN0aXZlID09IG5ld1ZhbCkgcmV0dXJuO1xuXHRcdHRoaXMuX3dyaXRlckFjdGl2ZSA9IG5ld1ZhbDtcblx0XHR0aGlzLl91cGRhdGVBY3RpdmUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgd3JpdGVyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl93cml0ZXJBY3RpdmU7XG5cdH1cblx0cHJpdmF0ZSBfd3JpdGVyQWN0aXZlID0gZmFsc2U7XG5cdHByaXZhdGUgX3BhZGRpbmcgPSAyMDsgLy8g57uY55S75Yy65Z+f55qE5aSW5omp6Z2i56evXG5cdHByaXZhdGUgX3dvcmxkTWF0OiBjYy5NYXQ0ID0gbnVsbDtcblx0cHJpdmF0ZSBfbTAwID0gMDtcblx0cHJpdmF0ZSBfbTAxID0gMDtcblx0cHJpdmF0ZSBfbTA0ID0gMDtcblx0cHJpdmF0ZSBfbTA1ID0gMDtcblx0cHJpdmF0ZSBfbTEyID0gMDtcblx0cHJpdmF0ZSBfbTEzID0gMDtcblx0cHJpdmF0ZSBfdyA9IDA7XG5cdHByaXZhdGUgX2ggPSAwO1xuXHRwcml2YXRlIF9zY2FsZVggPSAxO1xuXHRwcml2YXRlIF9zY2FsZVkgPSAwO1xuXHRwcml2YXRlIF9sYWJlbFdpZHRoID0gMDtcblx0cHJpdmF0ZSBfbGFiZWxIZWlnaHQgPSAwO1xuXHRwcml2YXRlIF9jYWNoZVZpZXdwb3J0UmVjdDogY2MuUmVjdCA9IG51bGw7XG5cdHByaXZhdGUgX2VsZW06IEhUTUxFbGVtZW50ID0gbnVsbDtcblx0cHJpdmF0ZSBfZG9tSWQgPSAnJztcblx0cHJpdmF0ZSBfaGFzSW5pdCA9IGZhbHNlO1xuXHRwcml2YXRlIF9ldmVudExpc3RlbmVyczogYW55ID0ge307XG5cblx0X2luaXQoKSB7XG5cdFx0dGhpcy5fbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XG5cdFx0dGhpcy5fbGFiZWxXaWR0aCA9IHRoaXMubm9kZS53aWR0aDtcblx0XHR0aGlzLl9sYWJlbEhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XG5cdFx0dGhpcy5fZG9tSWQgPSBgV3JpdGVCb3gkeysrX2RvbUNvdW50fWA7XG5cdFx0dGhpcy5fZWxlbSA9IG51bGw7XG5cdFx0dGhpcy5fd29ybGRNYXQgPSBuZXcgY2MuTWF0NCgpO1xuXHRcdHRoaXMuX2NhbWVyYU1hdCA9IG5ldyBjYy5NYXQ0KCk7XG5cdFx0dGhpcy5fbTAwID0gMDtcblx0XHR0aGlzLl9tMDEgPSAwO1xuXHRcdHRoaXMuX20wNCA9IDA7XG5cdFx0dGhpcy5fbTA1ID0gMDtcblx0XHR0aGlzLl9tMTIgPSAwO1xuXHRcdHRoaXMuX20xMyA9IDA7XG5cdFx0dGhpcy5fdyA9IDA7XG5cdFx0dGhpcy5faCA9IDA7XG5cdFx0dGhpcy5fY2FjaGVWaWV3cG9ydFJlY3QgPSBjYy5yZWN0KDAsIDAsIDAsIDApO1xuXHRcdHRoaXMuaW5pdEhhbnppKCk7XG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2hhc0luaXQgPSB0cnVlO1xuXHR9XG5cdHByaXZhdGUgX2NyZWF0ZURvbSgpIHtcblx0XHR0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdH1cblx0cHJpdmF0ZSBfaW5pdFN0eWxlU2hlZXQoKSB7XG5cdFx0bGV0IGVsZW0gPSB0aGlzLl9lbGVtO1xuXHRcdC8vIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRlbGVtLnN0eWxlLmJvcmRlciA9ICcwJztcblx0XHRlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuXHRcdGVsZW0uc3R5bGUud2lkdGggPSAnMTAwJSc7XG5cdFx0ZWxlbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cdFx0ZWxlbS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdGVsZW0uc3R5bGUuYm90dG9tID0gQk9UVE9NX1BBRERJTkcgKyAncHgnO1xuXHRcdGVsZW0uc3R5bGUubGVmdCA9IExFRlRfUEFERElORyArICdweCc7XG5cdFx0ZWxlbS5pZCA9IHRoaXMuX2RvbUlkO1xuXHR9XG5cdHByaXZhdGUgX2FkZERvbVRvR2FtZUNvbnRhaW5lcigpIHtcblx0XHRjYy5nYW1lLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtKTtcblx0fVxuXG5cdHByaXZhdGUgX2NhbWVyYU1hdDogY2MuTWF0NCA9IG51bGw7XG5cdHByaXZhdGUgX3VwZGF0ZU1hdHJpeCgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNjLmxvZyh0aGlzLl93b3JsZE1hdClcblx0XHRub2RlLmdldFdvcmxkTWF0cml4KHRoaXMuX3dvcmxkTWF0KTtcblx0XHRsZXQgd29ybGRNYXQgPSB0aGlzLl93b3JsZE1hdDtcblx0XHRsZXQgd29ybGRNYXRtID0gd29ybGRNYXQubTtcblx0XHRsZXQgbG9jYWxWaWV3ID0gY2Mudmlldztcblx0XHQvLyDmo4DmtYvmmK/lkKbpnIDopoHmjKrliqjkvY3nva5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLl9tMDAgPT09IHdvcmxkTWF0bVswXSAmJlxuXHRcdFx0dGhpcy5fbTAxID09PSB3b3JsZE1hdG1bMV0gJiZcblx0XHRcdHRoaXMuX20wNCA9PT0gd29ybGRNYXRtWzRdICYmXG5cdFx0XHR0aGlzLl9tMDUgPT09IHdvcmxkTWF0bVs1XSAmJlxuXHRcdFx0dGhpcy5fbTEyID09PSB3b3JsZE1hdG1bMTJdICYmXG5cdFx0XHR0aGlzLl9tMTMgPT09IHdvcmxkTWF0bVsxM10gJiZcblx0XHRcdHRoaXMuX3cgPT09IG5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCAmJlxuXHRcdFx0dGhpcy5faCA9PT0gbm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAmJlxuXHRcdFx0dGhpcy5fY2FjaGVWaWV3cG9ydFJlY3QuZXF1YWxzKGxvY2FsVmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyDmm7TmlrDnn6npmLXnvJPlrZhcblx0XHR0aGlzLl9tMDAgPSB3b3JsZE1hdG1bMF07XG5cdFx0dGhpcy5fbTAxID0gd29ybGRNYXRtWzFdO1xuXHRcdHRoaXMuX20wNCA9IHdvcmxkTWF0bVs0XTtcblx0XHR0aGlzLl9tMDUgPSB3b3JsZE1hdG1bNV07XG5cdFx0dGhpcy5fbTEyID0gd29ybGRNYXRtWzEyXTtcblx0XHR0aGlzLl9tMTMgPSB3b3JsZE1hdG1bMTNdO1xuXHRcdHRoaXMuX3cgPSBub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG5cdFx0dGhpcy5faCA9IG5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XG5cblx0XHQvLyDmm7TmlrDop4blm77nvJPlrZgg6ZyA6KaB5Yik5pat57yp5pS+5ZKM6ZSa54K5XG5cdFx0dGhpcy5fY2FjaGVWaWV3cG9ydFJlY3Quc2V0KGxvY2FsVmlldy5nZXRWaWV3cG9ydFJlY3QoKSk7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGxldCBzY2FsZVggPSBsb2NhbFZpZXcuX3NjYWxlWDtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0bGV0IHNjYWxlWSA9IGxvY2FsVmlldy5fc2NhbGVZO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRsZXQgdmlld3BvcnQgPSBsb2NhbFZpZXcuX3ZpZXdwb3J0UmVjdDtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0bGV0IGRwciA9IGxvY2FsVmlldy5fZGV2aWNlUGl4ZWxSYXRpbztcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0X3ZlYzMueCA9IC1ub2RlLl9hbmNob3JQb2ludC54ICogdGhpcy5fdztcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0X3ZlYzMueSA9IC1ub2RlLl9hbmNob3JQb2ludC55ICogdGhpcy5faDtcblxuXHRcdGNjLk1hdDQudHJhbnNmb3JtKHdvcmxkTWF0LCB3b3JsZE1hdCwgX3ZlYzMpO1xuXG5cdFx0bGV0IGNhbWVyYU1hdDtcblxuXHRcdGxldCBjYW1lcmEgPSBjYy5DYW1lcmEuZmluZENhbWVyYShub2RlKTtcblx0XHRjYW1lcmEuZ2V0V29ybGRUb1NjcmVlbk1hdHJpeDJEKHRoaXMuX2NhbWVyYU1hdCk7XG5cdFx0Y2FtZXJhTWF0ID0gdGhpcy5fY2FtZXJhTWF0O1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjYy5NYXQ0Lm11bChjYW1lcmFNYXQsIGNhbWVyYU1hdCwgd29ybGRNYXQpO1xuXG5cdFx0c2NhbGVYIC89IGRwcjtcblx0XHRzY2FsZVkgLz0gZHByO1xuXG5cdFx0bGV0IGNvbnRhaW5lciA9IGNjLmdhbWUuY29udGFpbmVyO1xuXHRcdGxldCBjYW1lcmFNYXRtID0gY2FtZXJhTWF0Lm07XG5cdFx0bGV0IGEgPSBjYW1lcmFNYXRtWzBdICogc2NhbGVYLFxuXHRcdFx0YiA9IGNhbWVyYU1hdG1bMV0sXG5cdFx0XHRjID0gY2FtZXJhTWF0bVs0XSxcblx0XHRcdGQgPSBjYW1lcmFNYXRtWzVdICogc2NhbGVZO1xuXHRcdHRoaXMuX3NjYWxlWCA9IGE7XG5cdFx0dGhpcy5fc2NhbGVZID0gZDtcblx0XHRsZXQgb2Zmc2V0WCA9XG5cdFx0XHRjb250YWluZXIgJiYgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ICYmIHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nTGVmdCk7XG5cdFx0b2Zmc2V0WCArPSB2aWV3cG9ydC54IC8gZHByO1xuXHRcdGxldCBvZmZzZXRZID1cblx0XHRcdGNvbnRhaW5lciAmJiBjb250YWluZXIuc3R5bGUucGFkZGluZ0JvdHRvbSAmJiBwYXJzZUludChjb250YWluZXIuc3R5bGUucGFkZGluZ0JvdHRvbSk7XG5cdFx0b2Zmc2V0WSArPSB2aWV3cG9ydC55IC8gZHByO1xuXHRcdGxldCB0eCA9IGNhbWVyYU1hdG1bMTJdICogc2NhbGVYICsgb2Zmc2V0WCxcblx0XHRcdHR5ID0gY2FtZXJhTWF0bVsxM10gKiBzY2FsZVkgKyBvZmZzZXRZO1xuXG5cdFx0bGV0IGVsZW0gPSB0aGlzLl9lbGVtO1xuXHRcdGxldCBtYXRyaXggPSAnbWF0cml4KCcgKyAxICsgJywnICsgLWIgKyAnLCcgKyAtYyArICcsJyArIDEgKyAnLCcgKyB0eCArICcsJyArIC10eSArICcpJztcblx0XHRlbGVtLnN0eWxlWyd0cmFuc2Zvcm0nXSA9IG1hdHJpeDtcblx0XHRlbGVtLnN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gbWF0cml4O1xuXHRcdGVsZW0uc3R5bGVbJ3RyYW5zZm9ybS1vcmlnaW4nXSA9ICcwcHggMTAwJSAwcHgnO1xuXHRcdGVsZW0uc3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbiddID0gJzBweCAxMDAlIDBweCc7XG5cdH1cblxuXHRwcml2YXRlIF91cGRhdGVIYW56aSgpIHtcblx0XHR0aGlzLl9sYWJlbFdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuXHRcdHRoaXMuX2xhYmVsSGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcblx0XHR0aGlzLmRlc3Ryb3lTZWxmKCk7XG5cdFx0dGhpcy5pbml0SGFuemkoKTtcblx0fVxuXHRwcml2YXRlIF91cGRhdGVBY3RpdmUoKSB7XG5cdFx0aWYgKHRoaXMuX3dyaXRlckFjdGl2ZSkge1xuXHRcdFx0aWYgKCF0aGlzLl9oYXNJbml0KSB7XG5cdFx0XHRcdHRoaXMuX2luaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3Nob3dEb20oKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGlkZURvbSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX3Nob3dEb20oKSB7XG5cdFx0dGhpcy5fdXBkYXRlTWF0cml4KCk7XG5cdFx0dGhpcy5fZWxlbS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdH1cblxuXHRwcml2YXRlIF9oaWRlRG9tKCkge1xuXHRcdHRoaXMuX2VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXHRwcml2YXRlIF9jbGVhcigpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fZG9tSWQpKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9kb21JZCkucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cdHByaXZhdGUgX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0bGV0IGltcGwgPSB0aGlzO1xuXHRcdGxldCBjYnMgPSB0aGlzLl9ldmVudExpc3RlbmVycztcblxuXHRcdGNicy5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aW1wbC5fdXBkYXRlTWF0cml4KCk7XG5cdFx0fTtcblx0XHRjYnMuUE9TSVRJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aW1wbC5fdXBkYXRlTWF0cml4KCk7XG5cdFx0fTtcblx0XHRjYnMuU0laRV9DSEFOR0VEID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpbXBsLl91cGRhdGVIYW56aSgpO1xuXHRcdH07XG5cdFx0Y2JzLkFOQ0hPUl9DSEFOR0VEID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpbXBsLl91cGRhdGVNYXRyaXgoKTtcblx0XHR9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYnMub25SZXNpemUpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGNicy5vblJlc2l6ZSk7XG5cblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgY2JzLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMpO1xuXHRcdHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIGNicy5TSVpFX0NIQU5HRUQsIHRoaXMpO1xuXHRcdHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5BTkNIT1JfQ0hBTkdFRCwgY2JzLkFOQ0hPUl9DSEFOR0VELCB0aGlzKTtcblx0fVxuXHRwcml2YXRlIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcblx0XHRsZXQgY2JzID0gdGhpcy5fZXZlbnRMaXN0ZW5lcnM7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNicy5vblJlc2l6ZSk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgY2JzLm9uUmVzaXplKTtcblx0XHR0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIGNicy5QT1NJVElPTl9DSEFOR0VELCB0aGlzKTtcblx0XHR0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgY2JzLlNJWkVfQ0hBTkdFRCwgdGhpcyk7XG5cdFx0dGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5BTkNIT1JfQ0hBTkdFRCwgY2JzLkFOQ0hPUl9DSEFOR0VELCB0aGlzKTtcblx0fVxuXG5cdHB1YmxpYyBpbml0SGFuemkoKSB7XG5cdFx0dGhpcy5fY3JlYXRlRG9tKCk7XG5cdFx0dGhpcy5faW5pdFN0eWxlU2hlZXQoKTtcblx0XHR0aGlzLl91cGRhdGVNYXRyaXgoKTtcblx0XHR0aGlzLnNldFNpemUoKTtcblx0XHR0aGlzLl9hZGREb21Ub0dhbWVDb250YWluZXIoKTtcblx0XHR0aGlzLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHRoaXMud3JpdGVyID0gSGFuemlXcml0ZXIuY3JlYXRlKHRoaXMuX2RvbUlkLCB0aGlzLl9sYWJlbCwge1xuXHRcdFx0d2lkdGg6ICh0aGlzLl9sYWJlbFdpZHRoICsgdGhpcy5fcGFkZGluZyAqIDIpICogdGhpcy5fc2NhbGVYLFxuXHRcdFx0aGVpZ2h0OiAodGhpcy5fbGFiZWxIZWlnaHQgKyB0aGlzLl9wYWRkaW5nICogMikgKiB0aGlzLl9zY2FsZVksXG5cdFx0XHRwYWRkaW5nOiB0aGlzLl9wYWRkaW5nICogdGhpcy5fc2NhbGVYLFxuXHRcdFx0c2hvd0hpbnRBZnRlck1pc3NlczogdGhpcy5zaG93SGludEFmdGVyTWlzc2VzLFxuXHRcdFx0c3Ryb2tlQ29sb3I6ICcjJyArIHRoaXMuc3Ryb2tlQ29sb3IudG9IRVgoJyNycmdnYmInKSxcblx0XHRcdGhpZ2hsaWdodENvbG9yOiAnIycgKyB0aGlzLmhpZ2hsaWdodENvbG9yLnRvSEVYKCcjcnJnZ2JiJyksXG5cdFx0XHRyYWRpY2FsQ29sb3I6ICcjJyArIHRoaXMucmFkaWNhbENvbG9yLnRvSEVYKCcjcnJnZ2JiJyksXG5cdFx0XHRvdXRsaW5lQ29sb3I6ICcjJyArIHRoaXMub3V0bGluZUNvbG9yLnRvSEVYKCcjcnJnZ2JiJyksXG5cdFx0XHRkcmF3aW5nQ29sb3I6ICcjJyArIHRoaXMuZHJhd2luZ0NvbG9yLnRvSEVYKCcjcnJnZ2JiJyksXG5cdFx0XHRkcmF3aW5nV2lkdGg6IHRoaXMuZHJhd2luZ1dpZHRoLFxuXHRcdFx0c3Ryb2tlQW5pbWF0aW9uU3BlZWQ6IHRoaXMuc3Ryb2tlQW5pbWF0aW9uU3BlZWQsXG5cdFx0XHRkZWxheUJldHdlZW5TdHJva2VzOiB0aGlzLmRlbGF5QmV0d2VlblN0cm9rZXMsXG5cdFx0XHRoaWdobGlnaHRPbkNvbXBsZXRlOiB0aGlzLmhpZ2hsaWdodE9uQ29tcGxldGUsXG5cdFx0XHRzdHJva2VIaWdobGlnaHRTcGVlZDogdGhpcy5zdHJva2VIaWdobGlnaHRTcGVlZCxcblx0XHRcdGRlbGF5QmV0d2Vlbkxvb3BzOiB0aGlzLmRlbGF5QmV0d2Vlbkxvb3BzXG5cdFx0fSk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcztcblx0XHR0aGlzLndyaXRlci5xdWl6KHtcblx0XHRcdG9uQ29tcGxldGUoc3VtbWFyeURhdGE6IENPTVBMRVRFX1NUUk9LRURBVEEpIHtcblx0XHRcdFx0Y2MubG9nKCdjb21wbGV0ZScpO1xuXHRcdFx0XHRjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoXG5cdFx0XHRcdFx0W2NvbXBvbmVudC5vbkNvbXBsZXRlXSxcblx0XHRcdFx0XHRzdW1tYXJ5RGF0YSxcblx0XHRcdFx0XHRjb21wb25lbnRcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkNvcnJlY3RTdHJva2Uoc3Ryb2tlRGF0YTogTUlTVEFLRV9TVFJPS0VEQVRBKSB7XG5cdFx0XHRcdGNjLmxvZygn5b2T5YmN55qE56yU55S757yW5Y+3OicgKyBzdHJva2VEYXRhLnN0cm9rZU51bSk7XG5cdFx0XHRcdGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhcblx0XHRcdFx0XHRbY29tcG9uZW50Lm9uQ29ycmVjdFN0cm9rZV0sXG5cdFx0XHRcdFx0c3Ryb2tlRGF0YSxcblx0XHRcdFx0XHRjb21wb25lbnRcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRvbk1pc3Rha2Uoc3Ryb2tlRGF0YTogTUlTVEFLRV9TVFJPS0VEQVRBKSB7XG5cdFx0XHRcdGNjLmxvZygnZXJyb3InKTtcblx0XHRcdFx0Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFtjb21wb25lbnQub25NaXN0YWtlXSwgc3Ryb2tlRGF0YSwgY29tcG9uZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRwdWJsaWMgc2hvdygpIHtcblx0XHR0aGlzLl9zaG93RG9tKCk7XG5cdH1cblx0cHVibGljIGhpZGUoKSB7XG5cdFx0dGhpcy5faGlkZURvbSgpO1xuXHR9XG5cdHB1YmxpYyBkZXN0cm95U2VsZigpIHtcblx0XHR0aGlzLl9lbGVtID0gbnVsbDtcblx0XHR0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXHRcdHRoaXMuX2NsZWFyKCk7XG5cdH1cblx0Ly8g5pS55Y+YY29jb3PlhoXnmoRsYWJlbOS5i+WQjuiwg+eUqOi/meS4quaWueazlVxuXHRwdWJsaWMgY2hhbmdlTGFiZWwoKSB7XG5cdFx0dGhpcy5fY2xlYXIoKTtcblx0XHR0aGlzLl9pbml0KCk7XG5cdH1cblx0cHVibGljIGFuaW1hdGVDaGFyYWN0ZXIoKSB7XG5cdFx0dGhpcy53cml0ZXIuYW5pbWF0ZUNoYXJhY3RlcigpO1xuXHR9XG5cdHB1YmxpYyBzZXRTaXplKCkge1xuXHRcdGxldCBlbGVtID0gdGhpcy5fZWxlbTtcblx0XHRlbGVtLnN0eWxlLndpZHRoID0gKHRoaXMuX2xhYmVsV2lkdGggKyB0aGlzLl9wYWRkaW5nICogMikgKiB0aGlzLl9zY2FsZVggKyAncHgnO1xuXHRcdGVsZW0uc3R5bGUuaGVpZ2h0ID0gKHRoaXMuX2xhYmVsSGVpZ2h0ICsgdGhpcy5fcGFkZGluZyAqIDIpICogdGhpcy5fc2NhbGVZICsgJ3B4Jztcblx0fVxuXG5cdG9uRW5hYmxlKCkge1xuXHRcdHRoaXMuX2luaXQoKTtcblx0fVxuXG5cdG9uRGlzYWJsZSgpIHtcblx0XHR0aGlzLmRlc3Ryb3lTZWxmKCk7XG5cdH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
