import React from 'react';
import style from "./Footer.module.scss"
import PropTypes from 'prop-types';
const Footer =({ count })=>{
	return(
		<div className={style.wrap}>
			<div className={style.task}>Task: { count }</div>
			<button className={style.btn}>All</button>
			<button className={style.btn}>Active</button>
			<button className={style.btn}>Done</button>
			<button className={style.btn}>Clear</button>
		</div>
	)
}
Footer.defaultProps = {
	count: 0
};
Footer.propTypes = {
	count: PropTypes.number.isRequired
};
export default Footer;