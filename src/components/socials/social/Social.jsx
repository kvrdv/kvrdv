import styles from './Social.module.scss';

const Social = ({ classNames, url, title, qr, counter }) => {
	return (
		<a className={`${styles.container} ${classNames}`} draggable={false} href={url}>
			<h4>{title}</h4>
			<img src={qr} alt="qr code" draggable={false} />
			<span>{counter}</span>
		</a>
	);
};

export default Social;
