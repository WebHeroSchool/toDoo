import React, {Component} from 'react';
import Item from "../item/Item";


export default class ItemList extends Component {
	render() {
		const {todoItem} = this.props;
		const items = todoItem.map((item, idx) => {
			return (<Item  item={ item.value } key={ item.value } />)
		});
		return items

	}
}