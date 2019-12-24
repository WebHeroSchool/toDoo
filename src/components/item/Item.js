import React, { Component } from 'react';
import classnames from "classnames";

import style from "./Item.module.scss"


export default class Item extends Component{

	render(){
		const { value, isDone } = this.props.item;
		return (
			<>
				<li className={classnames({
					[style.item]: true,
					[style.done]: isDone,

				})}>
					<label className={style.label}>
						<input  type="checkbox" checked={isDone} onChange={()=>this.props.onClickDone(isDone, value)}/>
						{ value }
						</label>
					<button className={style.btn}>X</button>
				</li>
			</>
		)
	}

}