/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png" alt="Logo" className="logo" />
			</div>
			<nav className="header__nav nav">
				<ul className="nav__list">
					<li className="nav__item">
						<a href="#" className="nav__link">
							Пасажирам
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Послуги IEV
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							VIP
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Партнерам
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Прес-центр
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link nav__link_bold">
							UA
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
