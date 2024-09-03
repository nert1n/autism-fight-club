import styles from './WelcomeWidget.module.scss';
import MainButton from '../../ui/mainButton/index.jsx';

const WelcomeWidget = () => {
	return (
		<div className={styles.welcome}>
			<div className={styles.welcome__info}>
				<h1 className={styles.welcome__title}>Simple Anti Smoke Programm Gemeinsam gehen wir die Sucht an</h1>
				<p className={styles.welcome__description}>Durch unsere intensive Arbeit in der  Suchtbranche und ständiges Suchen nach einfachen, universellen aber gleichzeitig auch wirksamen Methoden, haben wir unser einzigartiges Programm, bzw. „Simple Anti Smoke“ Training entwickelt.</p>
				<div className={styles.welcome__holder}>
					<MainButton className={styles.welcome__button}>Jetzt informieren</MainButton>
					<p className={styles.welcome__number}>+49 221 2984 75 45</p>
				</div>
			</div>
			<img className={styles.welcome__img} src={'/brain.png'} alt="Brain" />
		</div>
	);
};

export default WelcomeWidget;