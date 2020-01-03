import React, {Component} from 'react';
import Item from "../item/Item";
import style from "./ItemList.module.scss"


export default class ItemList extends Component {
	render() {
		const {todoItem , onClickDone, onClickDelete} = this.props;
		const items = todoItem.map((item) => {
			return (<Item
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
				item={ item }
				key={ item.id } />)
		});
		return (
			<div className={style.list}>
				{ items }
			</div>

		)

	}
}

ItemList.defaultProps = {
	todoItem: [
		{
			value: "сдесь может быть ваше дело",
			isDone: false,
			id:1
		}
	]
};