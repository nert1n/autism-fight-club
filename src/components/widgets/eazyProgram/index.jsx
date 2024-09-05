import styles from './EazyProgram.module.scss';
import MainButton from '../../ui/mainButton/index.jsx';
import { Link } from 'react-router-dom';

const EazyProgram = () => {
	return (
		<div className={styles.program}>
			<img className={styles.program__image} src={'/brain-2.png'} alt="Image" />
			<div className={styles.program__holder}>
				<h1 className={styles.program__title}>In unserem speziellen Kampfsportangebot sind folgende Methoden integriert:</h1>
				<div className={styles.program__lists}>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Neuropsychologische Übungen</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Sensorische Integrationstherapie</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Rhythmisches Bewegungstraining nach Dr. Blomberg</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Übungen aus der psychomotorischen Ganzheitstherapie nach Dr. Kannegießer-Leitner</p>
					</div>
				</div>
				<Link to='/imprint'>
					<MainButton className={styles.program__button} type={'border'}>
						Jetzt anmelden
					</MainButton>
				</Link></div>
		</div>
	);
};

export default EazyProgram;