import React, {Component} from 'react';
import classnames from "classnames";

import style from "./Item.module.scss"
import PropTypes from "prop-types";


export default class Item extends Component {
	componentDidMount() {
		console.log("mounting");
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("componentDidUpdate");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		const {value, isDone, id} = this.props;
		return (
			<>
				<li className={classnames({
					[style.item]: true,
					[style.done]: isDone,

				})}>
					<label className={style.label}>
						<input type="checkbox"
						       checked={isDone}
						       onChange={() => this.props.onClickDone(isDone, id)}
						/>
						{value}
					</label>
					<button onClick={() => {
						this.props.onClickDelete(id)
					}} className={style.btn}>X
					</button>
				</li>
			</>
		)
	}

}
Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
};