import styles from './NotFound.module.scss';
import MainButton from '../../components/ui/mainButton/index.jsx';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className={styles.notfound}>
			<h1 className={styles.notfound__title}>Error 404</h1>
			<p className={styles.notfound__text}>Seite nicht gefunden!</p>
			<Link to={'/'}>
				<MainButton className={styles.notfound__button}>
					Zurück
				</MainButton>
			</Link>
		</div>
	);
};

export default NotFoundPage;