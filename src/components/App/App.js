import React, { Component } from 'react';

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

import "./app.scss";

const todoItem = ["дело 1", "2", "3", "4 дело","sdasad"];

export default class App extends Component{

		render() {
			return (
				<>
					<h1>ToDo</h1>
					<InputItem/>
					<ItemList todoItem ={ todoItem }/>
					<Footer count={todoItem.length}/>
				</>
			)
		}
}