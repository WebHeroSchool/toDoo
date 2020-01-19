import React, {Component} from 'react';


import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import style from "../About/About.module.scss";
import errImg from "../../icons/error.png";



export default class App extends Component {
	state = {
		todoItem: JSON.parse(localStorage.getItem('todoItem')) || [],
		filter:"all",
		count:  JSON.parse(localStorage.getItem('count')) || 0,
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
		let res = todoItem.filter(item=>!item.isDone);
		return res.length
	}
	render() {
		const {filter, todoItem,count} = this.state;

		const addItemToLocalStorage=(item,count)=>{
			let sItem = JSON.stringify(item);
			 console.log(sItem);
			localStorage.setItem("todoItem",sItem);
			localStorage.setItem("count",JSON.stringify(count));
		};
		addItemToLocalStorage(todoItem,count);

		console.log(todoItem);
		const visibleItems = this.filterItems(todoItem, filter);
		let activeItem = this.searchItem(todoItem);
		return (
				<>
				<Footer todo={activeItem} onFilterChange={this.onFilterChange}  filter={filter} count={this.state.count}/>
					{!todoItem.length && <div className={style.error}>
						<img src={errImg} alt=""/>
						Вы ещё не добавили ни одной задачи
					</div>}
				 <ItemList onClickDelete={this.onClickDelete} onClickDone={this.onClickDone} todoItem={visibleItems}/>
				<InputItem todoItem={this.state.todoItem} onClickAdd ={this.onClickAdd}/>
				</>
		)
	}
}
