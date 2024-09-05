import styles from './Home.module.scss';
import WelcomeWidget from '../../components/widgets/welcomeWidget/index.jsx';
import EazyProgram from '../../components/widgets/eazyProgram/index.jsx';
import HelpYou from '../../components/widgets/helpYou/index.jsx';
import Symptoms from '../../components/widgets/symptoms/index.jsx';

const HomePage = () => {
	return (
		<div className={styles.home}>
			<WelcomeWidget />
			<EazyProgram />
			<video
				className={styles.home__video}
				src={'/video.mp4'}
				controls={true}
				controlsList="nodownload"
				poster={'/logo.jpg'}
			/>
			<Symptoms />
			<HelpYou />
		</div>
	);
};

export default HomePage;