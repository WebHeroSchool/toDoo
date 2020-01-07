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

			},

		],
		count: 3
	};
	onClickDone = (isDone,id) => {
		const newItems = this.state.todoItem.map(item=>{
			const newItem = {...item};
			if(newItem.id === id){
				newItem.isDone = !newItem.isDone;
			}
			return newItem
		});
		this.setState({todoItem: newItems})
	};

	onClickDelete=(id)=>{
		const newItems = this.state.todoItem.filter(item=> item.id !== id);
		this.setState({
			todoItem: newItems,
			count:this.state.count - 1
		})
	};
	onClickAdd=(value)=>this.setState(state=>({
		todoItem: [
			...state.todoItem,
			{
				value,
				isDone: false,
				id:state.count+1
			}

		],
		count: state.count+1
	}));

	render() {
		return (
			<div className={style.wrap}>
				<h1>Todo List</h1>
				<InputItem onClickAdd ={this.onClickAdd}/>
				<ItemList onClickDelete={this.onClickDelete} onClickDone={this.onClickDone} todoItem={this.state.todoItem}/>
				<Footer count={this.state.count}/>
			</div>
		)
	}
}
