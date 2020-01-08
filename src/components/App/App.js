import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from "../Todo/TodoItem";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import styles from "./App.module.scss"
import style from "../Todo/TodoItem.module.scss";


export default class App extends Component {

		render() {
			return (
				<Router>
					<nav className={styles.nav}>
						<Link to='/' exact >Обо мне</Link>
						<Link to='/todo'>Дела</Link>
						<Link to='/contacts'>Контакты</Link>
					</nav>
					<div className={style.wrap}>
						<Route path='/' exact component={About} />
						<Route path='/todo' component={Todo} />
						<Route path='/contacts' component={Contacts} />
					</div>

				</Router>
			)
		}
}
