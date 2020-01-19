import React, {Component} from 'react';

import Progres from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import Octokit from "@octokit/rest"
import style from "./About.module.scss"
import AboutHeader from "../AboutHeader/AboutHeader";
import AboutRepo from "../AboutRepo/AboutRepo";
import errImg from "../../icons/error.png"

const octokit = new Octokit();


class About extends Component {
	state = {
		isLoading: true,
		repoList:[],
		err: false,
		userData: {},
		countPage: 0,
		currentPage:1,
		count: 0,

	};

	componentDidMount() {
		const user = "serger777";
		octokit.users
			.getByUsername({
				username: user
			})
			.then(({ data }) => {
				this.setState({
					userData: data,
					isLoading: false
				});
			})
			.catch(err =>{
				this.setState({
					err: "ошибка загрузки"
				})
			});

		octokit.repos.listForUser({
			username: user
		}).then(({ data })=>{

			this.setState({
				isLoading: false,
				repoList:data,
				url: data[0].owner.avatar_url,
				name: data[0].owner.login,
				countPage: data.length/5,
			})
			if(!data){
				throw new Error("нет репозиториев")
			}
		}).catch((err)=>{
			console.log(err);
			this.setState({
				err: "Что-то пошло не так..."
			})
		})
	}
	filterRepo =(count, repoList)=>{
		if(count < 0 ){
			count = repoList.length - 5;
			this.setState({
				count: repoList.length - 5
			})
		}
		if(count > repoList.length ){
			count = 0;
			this.setState({
				count: 0
			})
		}
		const result =	repoList.filter((item,idx)=>{
			if(idx < count+5 && idx >= count){
				return item
			}
		});
		return result
	};
	changeCountUp =()=>{
		this.setState(state=>({
			count: state.count+5,
			currentPage: state.currentPage+1,
		})
		)
	};
	changeCountDown =()=>{
		this.setState(state=>({
				count: state.count-5,
				currentPage: state.currentPage-1,
			})
		)
	};

	render() {
		const {isLoading, repoList,err, userData, count,countPage,currentPage} = this.state;
		const CountPage = () =>{
			let  arr =[];
			 for(let i=1; i< countPage+1; i++){
			 	arr.push(i)
			}
				return(
					arr.map(item=>{
						return <span key={item} className={currentPage === item? style.active : ""}>{item}</span>
					})
					)

		};
		return (
			<CardContent>
				{!isLoading && <AboutHeader userData={userData}/>}
				{!err && (isLoading ? <Progres color={"secondary"} variant={"indeterminate"}/> : <h1>Мои репозитории</h1>)}
				{ !isLoading && <AboutRepo repoList={this.filterRepo(count, repoList)}/>}
				{ !isLoading && <div className={style.wrap_btn}>
					<button disabled={count < 5  } onClick={this.changeCountDown}>Назад</button>
						<CountPage />
					<button disabled={ count > repoList.length - 6 } onClick={this.changeCountUp}>Вперед</button>
				</div>}
				{err && <div className={style.error}>
					<img src={errImg} alt=""/>
					{ err }
				</div> }
			</CardContent>
		)
	}
}


export default About;