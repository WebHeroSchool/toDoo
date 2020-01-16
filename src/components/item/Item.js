import React, {Component} from 'react';
import classnames from "classnames";

import style from "./Item.module.scss"
import PropTypes from "prop-types";


export default class Item extends Component {
	componentDidMount() {
		// this.intreval = setInterval(()=>console.log("interval"), 1000)
	}

	componentWillUnmount() {
		// clearInterval(this.intreval)
	}

	render() {
		const {value, isDone, id} = this.props;
		return (
			<div className={style.wrap}>
				<li className={classnames({
					[style.item]: true,
					[style.done]: isDone,

				})}>
					<label className={style.label}>
						<input type="checkbox"
						       checked={isDone}
						       onChange={() => this.props.onClickDone(isDone, id)}
						/>
						<span>{value}</span>
					</label>
					<button onClick={() => {
						this.props.onClickDelete(id)
					}} className={style.btn}>&#10006;
					</button>
				</li>

			</div>
		)
	}

}
Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
};