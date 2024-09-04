import styles from './Symptoms.module.scss';

const Symptoms = () => {
	return (
		<div className={styles.symptoms}>
			<p className={styles.symptoms__info}>Schwierigkeiten und Herausforderungen</p>
			<h3 className={styles.symptoms__title}>Unser Ziel ist es, diesen Kindern zu helfen.</h3>
			<p className={styles.symptoms__description}>
				Kinder im Autismus-Spektrum haben oft sensorische Schwierigkeiten und Herausforderungen, die ihre Entwicklung beeinträchtigen. Unser Ziel ist es, diesen Kindern zu helfen. Mit einem speziellen Sportangebot möchten wir ihre Kommunikation fördern, sensorische Besonderheiten integrieren, die Feinmotorik verbessern und das Selbstbewusstsein stärken. Dadurch streben wir auch eine positive geistige und intellektuelle Entwicklung an. Da viele Aspekte bei autistischen Kindern miteinander verbunden sind, kann die Arbeit an der Feinmotorik und den sensorischen Besonderheiten auch einen positiven Einfluss auf die intellektuelle Entwicklung und die Kommunikation haben.
				Unser einzigartiges Sportangebot umfasst verschiedene integrative therapeutische Übungen, ersetzt jedoch keinesfalls eine systematische und notwendige Autismus-Therapie. Warum Kampfsport? Weil Kampfsport auf besondere Weise das Selbstbewusstsein stärkt. Ein gestärktes Selbstbewusstsein wirkt sich auf alle Lebensbereiche aus, in denen Kommunikation erforderlich ist. Diese wiederum beeinflusst die intellektuelle Entwicklung.
			</p>
			<a className={styles.symptoms__link} href='#contact'>Kontakt</a>
		</div>
	);
};

export default Symptoms;