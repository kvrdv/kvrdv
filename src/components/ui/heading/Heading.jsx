import styles from './Heading.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Heading = ({ headers, image }) => {
	return (
		<h1 className={styles.container}>
			{image ? (
				<img src={image} alt="graphic" draggable={false} />
			) : (
				headers.map((h) => {
					return (
						<span key={uuidv4()}>
							{h}
						</span>
					);
				})
			)}
		</h1>
	);
};

export default Heading;
