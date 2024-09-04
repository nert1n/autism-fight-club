import styles from './ConceptProgram.module.scss';
import MainButton from '../../ui/mainButton/index.jsx';

const ConceptProgram = () => {
	return (
		<div className={styles.program}>
			<img className={styles.program__image} src={'/brain-3.png'} alt="Image" />
			<div className={styles.program__holder}>
				<h1 className={styles.program__title}>Unser speziell entwickeltes Trainingskonzept richtet sich in erster Linie an Kinder im Autismus-Spektrum, eignet sich jedoch auch für:</h1>
				<div className={styles.program__lists}>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>ADS oder ADHS</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Lese-Rechtschreib-Schwäche (LRS)</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Rechenschwäche</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Sprachentwicklungsstörungen</p>
					</div>
					<div className={styles.program__list}>
						<img className={styles.program__list_icon} src="/check-mark.svg" alt="Icon" />
						<p className={styles.program__list_text}>Auditiven Verarbeitungs- und Wahrnehmungsstörungen (AVWS) und weiteren Herausforderungen</p>
					</div>
				</div>
				<MainButton className={styles.program__button} type={'border'}>Jetzt anmelden</MainButton>
			</div>
		</div>
	);
};

export default ConceptProgram;