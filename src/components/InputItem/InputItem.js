import React from 'react';
import classnames from "classnames";
import style from "./InputItem.module.scss";
import PropTypes from 'prop-types';

export default class InputItem extends React.Component{
	state = {
		inputValue: "",
		error: false
	};
	onButtonClick=()=>{
		const {onClickAdd} = this.props;
		this.setState({
			inputValue: ""
		});
		if(this.state.inputValue===""){
			this.setState({
				error: true
			});
		}else{
			this.setState({
				error: false
			});
			onClickAdd(this.state.inputValue)
		}
	};
	onChangeInput=(e)=>{

		this.setState({
			inputValue: e.target.value.toUpperCase(),
			error: false
		})
	};
	render(){
		const { error } = this.state;

		return(
			<>
			<div className={classnames({
				[style.wrap]: true,
				[style.error]: error
			}) }>
				<input
				            value={this.state.inputValue}
				            onChange={(e)=>this.onChangeInput(e)}
				/>
				<button  className={error ? style.error : ""} onClick={this.onButtonClick}>Add</button>
				<p className={style.text}> заполните поле</p>
			</div>

			</>
		)
	}
}
InputItem.propTypes = {
	inputValue:PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.number.isRequired
	]),
	onClickAdd: PropTypes.func.isRequired,
}