import React from 'react';
import style from "./Footer.module.scss"
import PropTypes from 'prop-types';

const filterButtons = [
	{ name: 'all', label: 'All' },
	{ name: 'active', label: 'Active' },
	{ name: 'done', label: 'Done' }
];

const Footer =({ count, filter, onFilterChange, todo })=>{
	const buttons = filterButtons.map(({name, label}) => {
		const isActive = name === filter;
		const classNames = `${style.btn} ` + (isActive ? `${style.active}` : ``);

		return (
			<button key={name}
			        type="button"
			        onClick={() => onFilterChange(name)}
			        className={classNames}>{label} </button>
		);
	});

	return(
		<div className={style.wrap}>
			<div className={style.task}>Task: { count }</div>
			<div className={style.task}>Active: { todo }</div>
			{ buttons }
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