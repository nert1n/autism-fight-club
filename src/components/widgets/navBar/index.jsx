import styles from './NavBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import MainButton from '../../ui/mainButton/index.jsx';

const NavBar = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav}>
			<Link className={`${styles.nav__link} ${location.pathname === '/' && styles.active}`} to={''}>Heim</Link>
			<Link className={`${styles.nav__link} ${location.pathname === '/about' && styles.active}`} to={'about'}>Über uns</Link>
			<div  className={styles.nav__link}>
				<Link to={'about'}>
					<MainButton type="border">Jetzt informieren</MainButton>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;