
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