import styles from './Hero.module.scss';
import Graphic from './graphic/Graphic';
import Tagline from './tagline/Tagline';

const Hero = () => {
	return (
		<div className={styles.container}>
			<Graphic />
			<Tagline />
		</div>
	);
};

export default Hero;
