import React, {Component} from 'react';

import Progres from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import Octokit from "@octokit/rest"
const octokit = new Octokit();

class About extends Component {
	state = {
		isLoading: true,
		repoList:[],
		err: "",
		url:"",
		name:""
	};

	componentDidMount() {
		octokit.repos.listForUser({
			username: "serger777"
		}).then(({ data })=>{
			this.setState({
				isLoading: false,
				repoList:data,
				url: data[0].owner.avatar_url,
				name: data[0].owner.login
			})
		}).catch((err)=>{
			console.log(err);
			this.setState({
				err: "ошибка загрузки"
			})
		})
	}

	render() {
		const {isLoading, repoList,err, name, url} = this.state;
		return (
			<CardContent>
				{!isLoading && <><p>USER:</p><a href={url}>{name}</a></>}
				<h1>{isLoading ? <Progres/> : "Репозитории"}</h1>

				{ !isLoading && <ol>
					{repoList.map(item => (
						<li key={item.id}>
							<a href={item.html_url}>{item.name}</a>
						</li>
					))
					}</ol>}
				<div>{ err }</div>
			</CardContent>
		)
	}
}


export default About;