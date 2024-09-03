import styles from './BurgerMenu.module.scss';
import { useState } from 'react';

const BurgerButton = ({ changeOpen }) => {
	const [isOpen, setIsOpen] = useState(false)

	const changingOpen = () => {
		setIsOpen(!isOpen);
    changeOpen(!isOpen);
	}

	return (
		<button
			className={`${styles.burger} ${isOpen && styles.active}`}
			onClick={() => changingOpen()}>
			<span></span>
		</button>
)
	;
};

export default BurgerButton;