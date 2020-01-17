import React from 'react';
import classnames from "classnames";
import style from "./InputItem.module.scss";
import PropTypes from 'prop-types';

export default class InputItem extends React.Component{
	state = {
		inputValue: "",
		error: false,
		errorText:""
	};
	onButtonClick=()=>{
		const {onClickAdd, todoItem} = this.props;
		let error = false;
		todoItem.forEach(item=>{
			if(item.value === this.state.inputValue){
				error = true
			}
		});
		if(this.state.inputValue==="" || error){
			this.setState({
				error: true,
				errorText: error ? "Это дело есть в списке": "Поле не должно быть пустым"
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
		const { error, errorText } = this.state;

		return(
			<>
			<div className={classnames({
				[style.wrap]: true,
				[style.error]: error,

			}) }>
				<div className={style.wrap_input}>
					<input
						value={this.state.inputValue}
						onChange={(e)=>this.onChangeInput(e)}
					/>
					<button  className={error ? style.error : ""} onClick={this.onButtonClick}><span>+</span></button>
				</div>
				<p className={style.text}> {errorText}</p>
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