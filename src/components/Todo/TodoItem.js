import React, {Component} from 'react';


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
		filter:"all",
		count: 3,
		todo:""
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
	filterItems =(items, filter) =>{
		if (filter === 'all') {
			return items;
		} else if (filter === 'active') {
			return items.filter((item) => (!item.isDone));
		} else if (filter === 'done') {
			return items.filter((item) => item.isDone);
		}
	};
	onFilterChange = (filter) => {
		this.setState({ filter });
	};
	searchItem=(todoItem)=>{
		let res = todoItem.filter(item=>!item.isDone)
		return res.length
	}
	render() {
		const {filter, todoItem} = this.state;
		const visibleItems = this.filterItems(todoItem, filter);
		let activeItem = this.searchItem(todoItem);
		return (
				<>
				<h1>Todo List</h1>
				<InputItem todoItem={this.state.todoItem} onClickAdd ={this.onClickAdd}/>
				<ItemList onClickDelete={this.onClickDelete} onClickDone={this.onClickDone} todoItem={visibleItems}/>
				<Footer todo={activeItem} onFilterChange={this.onFilterChange}  filter={filter} count={this.state.count}/>
				</>
		)
	}
}
