import React from "react";


function logProps(Component){
	return class logProps extends React.Component{
		componentWillReceiveProps(nextProps) {
			console.log(this.props);
			console.log(nextProps);
		}
		render(){
			return <Component {...this.props}/>
		}
	}
}

export default logProps;