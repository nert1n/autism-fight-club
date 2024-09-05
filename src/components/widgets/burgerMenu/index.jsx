import styles from './BurgerMenu.module.scss';

const BurgerButton = ({ changeOpen, isOpen }) => {
	const changingOpen = () => {
    changeOpen(!isOpen);
	}

	return (
		<div onClick={() => changingOpen()} className={styles.burger__holder}>
			<button
				className={`${styles.burger} ${isOpen && styles.active}`}>
				<span></span>
			</button>
		</div>
	)
		;
};

export default BurgerButton;