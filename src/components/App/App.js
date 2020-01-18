import React, {Component} from 'react';
import { BrowserRouter as Router, Route,NavLink  } from 'react-router-dom';
import Todo from "../Todo/TodoItem";
import About from "../About/About";
import styles from "./App.module.scss"


export default class App extends Component {

		render() {
			return (
				<Router>
					<nav className={styles.nav}>
						<NavLink activeClassName={styles.active} to='/reactTodo/' exact >Обо мне</NavLink>
						<NavLink activeClassName={styles.active} to='/reactTodo/todo'>Дела</NavLink>
					</nav>
					<div className={styles.wrap}>
						<Route path='/reactTodo/' exact component={About} />
						<Route path='/reactTodo/todo' component={Todo} />
						<div className={styles.powered}>Сделано в WHS</div>
					</div>
				</Router>
			)
		}
}
