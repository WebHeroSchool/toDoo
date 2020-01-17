import React, {Component} from 'react';

import style from "./AboutHeader.module.scss"
import iconPhone from "../../icons/phone.svg"
import iconMail from "../../icons/mail.svg"
import iconLinkid from "../../icons/linkid.svg"
import iconGithub from "../../icons/github.svg"
import iconVk from "../../icons/vk.svg"

export default class AboutHeader extends Component{


	render(){
		const { userData } = this.props;
		return(
			<div  className={style.header}  >
				<img className={style.img} src={userData.avatar_url} alt=""/>
				<div className={style.wrap}>
					<a className={style.link} href={userData.html_url}>{userData.name}</a>
					<p className={style.text}>{userData.bio}</p>
					<p className={style.text}><img src={iconMail} alt=""/> <span>serger777@gmail.com</span></p>
					<p className={style.text}><img src={iconPhone} alt=""/> <span>8910-660-45-46</span></p>
				</div>
				<div className={style.bottom}>
					<a href="https://www.linkedin.com/in/sergey-gerasimov-803438185/"><img src={iconLinkid} alt=""/></a>
					<a href="https://github.com/serger777"><img src={iconGithub} alt=""/></a>
					<a href="https://vk.com/gerasimovs"><img src={iconVk} alt=""/></a>
				</div>
			</div>
		)
	}
}