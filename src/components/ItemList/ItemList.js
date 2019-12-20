import React, {Component} from 'react';
import Item from "../item/Item";


export default class ItemList extends Component {
	render() {
		const {todoItem} = this.props;
		const item = todoItem.map((item, idx) => {
			return (<Item item={item}/>)
		});
		return item

	}
}