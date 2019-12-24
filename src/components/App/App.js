import React, {Component} from 'react';

import style from "./App.module.scss"

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";




export default class App extends Component {
	state={
		todoItem: [
			{
				value: "start project",
				isDone: true
			},
			{
				value: "write book",
				isDone: true
			},
			{
				value: "sleep nigth",
				isDone: false

			}
		]
	};
	render() {
		return (
			<div  className={style.wrap}>
				<h1>Todo List</h1>
				<InputItem/>
				<ItemList   todoItem={this.state.todoItem}/>
				<Footer count={this.state.todoItem.length}/>
			</div>
		)
	}
}