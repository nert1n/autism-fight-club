import styles from './MainButton.module.scss';

const MainButton = ({ children, type, className = '' }) => {
	return (
		<button className={`${styles.button} ${type && styles.button__border} ${className}`}>
			{children}
		</button>
	);
};

export default MainButton;