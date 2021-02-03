"use strict";
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