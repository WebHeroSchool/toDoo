import React, {Component} from 'react';

import style from "./AboutRepo.module.scss"

import iconFork from "../../icons/fork.svg"
import iconStar from "../../icons/star.svg"


export default class AboutRepo extends Component{


	render(){
		const { repoList } = this.props;
		return(
			<div  className={style.wrap}>
					{repoList.map(item => (
						<a href={item.html_url} className={style.item} key={item.id}>
							<h3>{item.name}</h3>
							<div className={style.bottom}>
								<p className={style.lang}><span className={item.language ? style.round : ""}>{item.language}</span></p>
								<p className={style.description}><img src={iconStar} alt=""/>{item.stargazers_count}</p>
								<p className={style.description}><img src={iconFork} alt=""/>{item.forks_count}</p>
								<p className={style.description}>update: { new Date(`${item.updated_at}`).toLocaleString("ru-RU")}</p>
							</div>
						</a>
					))
					}
			</div>
		)
	}
}