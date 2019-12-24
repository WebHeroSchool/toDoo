import React, {Component} from 'react';

import style from "./App.module.scss"

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";


const todoItem = [
	{
		value: "дело 1",
		isDone: true
	},
	{
		value: "дело 2",
		isDone: true
	},
	{
		value: "дело 3",
		isDone: false

	}
]

export default class App extends Component {

	render() {
		return (
			<div  className={style.wrap}>
				<h1>ToDo</h1>
				<InputItem/>
				<ItemList  todoItem={todoItem}/>
				<Footer count={todoItem.length}/>
			</div>
		)
	}
}