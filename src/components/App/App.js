import React, {Component} from 'react';

import style from "./App.module.scss"

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";


const todoItem = [
	{
		value: "дело 1"
	},
	{
		value: "дело 2"
	},
	{
		value: "дело 3"
	}
]

export default class App extends Component {

	render() {
		return (
			<div  class={style.wrap}>
				<h1>ToDo</h1>
				<InputItem/>
				<ItemList  todoItem={todoItem}/>
				<Footer count={todoItem.length}/>
			</div>
		)
	}
}