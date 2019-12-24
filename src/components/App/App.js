import React, {Component} from 'react';

import style from "./App.module.scss"

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";


export default class App extends Component {
	state = {
		todoItem: [
			{
				value: "start project",
				isDone: true,
				id:1
			},
			{
				value: "write book",
				isDone: true,
				id:2
			},
			{
				value: "sleep nigth",
				isDone: false,
				id:3

			}
		]
	};
	onClickDone = (id) => {
		const newItems = this.state.todoItem.map(item=>{
			const newItem = {...item};
			if(newItem.id === id){
				newItem.isDone = !newItem.isDone;
			}
			return newItem
		});
		this.setState({todoItem: newItems})
	};

	render() {
		return (
			<div className={style.wrap}>
				<h1>Todo List</h1>
				<InputItem/>
				<ItemList onClickDone={this.onClickDone} todoItem={this.state.todoItem}/>
				<Footer count={this.state.todoItem.length}/>
			</div>
		)
	}
}