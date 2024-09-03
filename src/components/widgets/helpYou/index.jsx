import styles from './HelpYou.module.scss';
import MainButton from '../../ui/mainButton/index.jsx';

const HelpYou = () => {
	return (
		<div className={styles.help}>
			<p className={styles.help__info}>Benötigst du Hilfe?</p>
			<h3 className={styles.help__title}>Wir sind hier um dir zur helfen.</h3>
			<p className={styles.help__description}>Vereinbare einen Kostenlosen Termin.</p>
			<MainButton className={styles.help__button}>
				<svg
					className={styles.help__button_icon}
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
						fill="#ffffff"
					/>
				</svg>
				<span>Jetzt Termin vereinbaren!</span>
			</MainButton>
		</div>
	);
};

export default HelpYou;