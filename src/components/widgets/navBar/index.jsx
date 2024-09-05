import styles from './NavBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import MainButton from '../../ui/mainButton/index.jsx';

const NavBar = ({ changeOpen }) => {
	const location = useLocation()


	const changingOpen = () => {
		changeOpen(false);
	}

	return (
		<nav onClick={() => changingOpen()} className={styles.nav}>
			<Link className={`${styles.nav__link} ${location.pathname === '/' && styles.active}`} to={'/'}>
				Heim
			</Link>
			<Link className={`${styles.nav__link} ${location.pathname === '/about' && styles.active}`} to={'/about'}>
				Über uns
			</Link>
			<Link className={`${styles.nav__link} ${location.pathname === '/imprint' && styles.active}`} to={'/imprint'}>
				Impressum
			</Link>
			<div  className={styles.nav__link}>
				<Link to='/imprint'>
					<MainButton type="border">Jetzt informieren</MainButton>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;