import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={`${styles.footer__info} ${styles['footer__info-hide']}`}>
					<img className={styles.footer__logo} src="/logo2.png" alt="Company logo" />
					<p>Copyright © 2024</p>
				</div>
				<div className={styles.footer__container}>
					<div className={styles.footer__column}>
						<p className={styles.footer__title}>Schnelle Links</p>
						<div className={styles.footer__holder}>
							<Link className={styles.footer__link} to={'/'}>Heim</Link>
							<Link className={styles.footer__link} to={'/about'}>Über uns</Link>
							<Link className={styles.footer__link} to={'/imprint'}>Impressum</Link>
						</div>
					</div>
					<div className={styles.footer__column}>
						<p className={styles.footer__title}>Trainingsort</p>
						<div className={styles.footer__holder}>
							<p>Sporthalle</p>
							<p>Georg-Simon-Ohm-Berufskolleg</p>
							<p>Westerwaldstraße 92</p> 
							<p>51105 Köln</p>
						</div>
					</div>
					<div id='contact' className={styles.footer__column}>
						<p className={styles.footer__title}>Kontakt</p>
						<div className={styles.footer__holder}>
							<p>Trainingszeit:</p>
							<p>Montag von 18:00 bis 20:00 Uhr</p>
							<p>&nbsp;</p>
							<p>Tel: 0221-20473506</p>
							<p>Mob: 0176-31519086</p>
							<p>Mob: 0175-6670985</p>
						</div>
					</div>
				</div>
				<div className={styles.footer__info}>
					<img className={styles.footer__logo} src="/logo2.png" alt="Company logo" />
					<p>Copyright © 2024</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;