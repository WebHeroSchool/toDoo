import React from 'react';
import style from "./Footer.module.scss"
import PropTypes from 'prop-types';

const filterButtons = [
	{ name: 'active', label: 'Не завершенные' },
	{ name: 'done', label: 'Завершенные' },
	{ name: 'all', label: 'Все' },
];

const Footer =({ count, filter, onFilterChange, todo })=>{
	const buttons = filterButtons.map(({name, label}) => {
		const isActive = name === filter;
		const classNames = `${style.btn} ` + (isActive ? `${style.active}` : ``);

		return (
			<>
			<button key={name}
			        type="button"
			        onClick={() => onFilterChange(name)}
			        className={classNames}>{label} </button>
					{ name === "active" ? <span className={style.text}>{todo}</span>: ""  }
					{ name === "done" ? <span className={style.text}>{count - todo}</span>: ""  }
			</>
		);
	});

	return(
		<div className={style.wrap}>
			<p className={style.title}>Список моих дел</p>
			<div className="wrap_btn">
				{ buttons }
			</div>
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