import React, { Component } from 'react';
import classnames from "classnames";

import style from "./Item.module.scss"


export default class Item extends Component{

	render(){
		const { value, isDone } = this.props.item;
		console.log(this.props);
		console.log(value);
		return (
			<>
				<li className={classnames({
					[style.item]: true,
					[style.done]: isDone,

				})}>
					<span>{ value }</span><button className={style.btn}>X</button>
				</li>
			</>
		)
	}

}