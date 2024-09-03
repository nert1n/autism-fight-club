import { Outlet } from 'react-router';
import Header from '../components/widgets/header/index.jsx';
import Footer from '../components/widgets/footer/index.jsx';
import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;