import styles from './Header.module.scss';
import NavBar from '../navBar/index.jsx';
import BurgerButton from '../burgerMenu/index.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isOpen, setIsOpen] = useState();

	const changeOpen = (open) => {
		setIsOpen(open);
	}

	return (
		<header className={styles.header}>
			<Link to={'/'}><img className={styles.header__icon} src="/logo.jpg" alt="Company logo" /></Link>
			<div className={styles.header__nav}>
				<div className={`${styles.header__navbar} ${isOpen && styles.active}`}>
					<NavBar changeOpen={changeOpen}/>
				</div>
				<div className={styles.header__burger}>
					<BurgerButton changeOpen={changeOpen} isOpen={isOpen}/>
				</div>
			</div>
		</header>
	);
};

export default Header;