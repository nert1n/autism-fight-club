import styles from './WelcomeWidget.module.scss';
import MainButton from '../../ui/mainButton/index.jsx';
import { Link } from 'react-router-dom';

const WelcomeWidget = () => {
	return (
		<div className={styles.welcome}>
			<div className={styles.welcome__info}>
				<h1 className={styles.welcome__title}>Unser speziell entwickeltes Trainingskonzept richtet sich in erster Linie an Kinder im Autismus-Spektrum, eignet sich jedoch auch für</h1>
				<p className={styles.welcome__description}>Kinder mit:</p>
				<div className={styles.welcome__lists}>
					<div className={styles.welcome__list}>
						<img className={styles.welcome__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.welcome__list_text}>ADS oder ADHS</p>
					</div>
					<div className={styles.welcome__list}>
						<img className={styles.welcome__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.welcome__list_text}>Lese-Rechtschreib-Schwäche (LRS)</p>
					</div>
					<div className={styles.welcome__list}>
						<img className={styles.welcome__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.welcome__list_text}>Rechenschwäche</p>
					</div>
					<div className={styles.welcome__list}>
						<img className={styles.welcome__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.welcome__list_text}>Sprachentwicklungsstörungen</p>
					</div>
					<div className={styles.welcome__list}>
						<img className={styles.welcome__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.welcome__list_text}>Auditiven Verarbeitungs- und Wahrnehmungsstörungen (AVWS) und
							weiteren Herausforderungen</p>
					</div>
				</div>
				<div className={styles.welcome__holder}>
					<Link to='/imprint'>
						<MainButton className={styles.welcome__button}>Jetzt informieren</MainButton>
					</Link>
					<p className={styles.welcome__number}>0221-20473506</p>
				</div>
			</div>
			<img className={styles.welcome__img} src={'/brain.png'} alt="Brain" />
		</div>
	);
};

export default WelcomeWidget;