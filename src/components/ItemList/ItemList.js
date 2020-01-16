import React, {Component} from 'react';
import Item from "../item/Item";
import style from "./ItemList.module.scss"
import PropTypes from "prop-types";



export default class ItemList extends Component {
	render() {
		const {todoItem , onClickDone, onClickDelete} = this.props;
		const items = todoItem.map((item) => {
			return (
				<Item
				{...item}
				onClickDone={onClickDone}
				onClickDelete={onClickDelete}
				key={ item.id }
				/>
				)
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
ItemList.propTypes = {
	todoItem: PropTypes.array.isRequired,
}