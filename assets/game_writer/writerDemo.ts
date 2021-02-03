import Writer from './writer/writer';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Demo extends cc.Component {
	private writerNode: cc.Node = null;
	start() {
		this.writerNode = this.node.getChildByName('writer');
	}
	onChangeShowStatusClick(el) {
		if (el.currentTarget.children[0].getComponentInChildren(cc.Label).string == '隐藏') {
            this.writerNode.active = false;
			el.currentTarget.children[0].getComponentInChildren(cc.Label).string = '显示';
		} else if (el.currentTarget.children[0].getComponentInChildren(cc.Label).string == '显示') {
            this.writerNode.active = true;
			el.currentTarget.children[0].getComponentInChildren(cc.Label).string = '隐藏';
		}
	}

	onChangeLabelClick() {
		this.writerNode.active = true;
		const str = '秦时明月汉时关万里长征人未还但使龙城飞将在不教胡马渡阴山';
		const labelText = str[Math.floor(Math.random() * str.length)];
		this.writerNode.getComponent(cc.Label).string = labelText;
		this.writerNode.getComponent(Writer).changeLabel();
	}

	onAnimateClick() {
		this.writerNode.getComponent(Writer).animateCharacter();
	}
}
