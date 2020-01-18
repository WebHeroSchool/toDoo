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
						<NavLink activeClassName={styles.active} to='./' exact >Обо мне</NavLink>
						<NavLink activeClassName={styles.active} to='./todo'>Дела</NavLink>
					</nav>
					<div className={styles.wrap}>
						<Route path='./' exact component={About} />
						<Route path='./todo' component={Todo} />
						<div className={styles.powered}>Сделано в WHS</div>
					</div>
				</Router>
			)
		}
}
