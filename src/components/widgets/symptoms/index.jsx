import styles from './Symptoms.module.scss';

const Symptoms = () => {
	return (
		<div className={styles.symptoms}>
			<p className={styles.symptoms__info}>Symptome der Entwöhnung</p>
			<h3 className={styles.symptoms__title}>Symptome der Entwöhnung</h3>
			<p className={styles.symptoms__description}>
				Die körperliche Sucht von Betäubungsmitteln verschwindet in der Regel nach zwei Wochen der Abstinenz vollständig. Die körperliche Tabaksucht verschwindet ebenfalls in zwei Wochen. Viele Menschen ertragen diese Zeit problemlos, brechen dann aber aufgrund der sich abzeichnenden Symptome der Entwöhnung zusammen.
			</p>
			<p className={styles.symptoms__description}>
				Symptome der Entwöhnung können Stimmungsschwankungen, plötzliche und unerklärliche Angstzustände, Apathie, übermäßige Müdigkeit, Reizbarkeit, etc. sein. Es ist sehr wichtig, dass eine Person diese Dinge als Symptome der Entwöhnung erkennt, anstatt ihren Zustand auf die Umwelt zu projizieren. Symptome der Entwöhnung schwächen im Laufe der Zeit immer mehr ab und verschwinden nach einem Jahr vollständig.
			</p>
			<a className={styles.symptoms__link} href='#contact'>weiterlesen</a>
		</div>
	);
};

export default Symptoms;