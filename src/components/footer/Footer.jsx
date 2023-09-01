import Heading from '../ui/heading/Heading';
import styles from './Footer.module.scss';
import graphicFooter from '../../assets/images/graphic/footer-graphic.svg';
import footerData from '../../data/footer.data';
import Menu from '../menu/Menu';

const Footer = () => {
	return (
		<div className={styles.container} id="about">
			<Heading image={graphicFooter} />
			<div className={styles.content}>
				<Menu />
				<div className={styles.text}>
					<h3 className={styles.header}>About</h3>
					<p>{footerData}</p>
				</div>
			</div>
			<div className={styles.copyright}>
				<span>
					<a href="https://github.com/kvrdv">kvrdv</a>
				</span>
				<span>2023</span>
			</div>
		</div>
	);
};

export default Footer;
