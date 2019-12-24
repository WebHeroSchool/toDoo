import React, {Component} from 'react';
import Item from "../item/Item";
import style from "./ItemList.module.scss"

export default class ItemList extends Component {
	render() {
		const {todoItem} = this.props;
		const items = todoItem.map((item, idx) => {
			return (<Item  item={ item } key={ item.value } />)
		});
		return (
			<div className={style.list}>
				{ items }
			</div>

		)

	}
}