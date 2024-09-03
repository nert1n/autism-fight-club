import styles from './SpecialistCard.module.scss';

const SpecialistCard = ({ src, title, info, description }) => {
	return (
		<div className={styles.card}>
			<img className={styles.card__img} src={src} alt="Specialist" />
			<div className={styles.card__holder}>
				<h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__info}>{info}</p>
        <p className={styles.card__description}>{description}</p>
			</div>
		</div>
	);
};

export default SpecialistCard;