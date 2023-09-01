import styles from './Layout.module.scss';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Projects from '../projects/Projects';
import Stack from '../stack/Stack';
import Socials from '../socials/Socials';
import Footer from '../footer/Footer';

const Layout: FC = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Hero />
			<Projects />
			<Stack />
			<Socials />
			<Footer />
		</div>
	);
};

export default Layout;
