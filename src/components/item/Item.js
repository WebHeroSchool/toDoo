import React, { Component } from 'react';
import style from "./Item.module.scss"
export default class Item extends Component{

	render(){
		const { item } = this.props;
		return (
			<>
				<li className={style.item}>{ item }</li>
			</>
		)
	}

}