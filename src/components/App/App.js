import React, { Component } from 'react';

import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

import "./app.scss";


export default class App extends Component{

		render() {
			return (
				<>
					<h1>ToDo</h1>
					<InputItem/>
					<ItemList/>
					<Footer/>
				</>
			)
		}
}