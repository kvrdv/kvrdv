import styles from './Project.module.scss';
import arrow from '../../../assets/images/arrow.svg';
import { v4 as uuidv4 } from 'uuid';

const Project = ({ title, type, url, cover, tags }) => {
	return (
		<div className={styles.item}>
			<a draggable={false} href={url}>
				<div className={styles.box}>
					<img src={cover} alt="project cover" draggable={false} />
					<h2>{title}</h2>
					<img src={arrow} alt="project cover" draggable={false} />
				</div>
			</a>

			<div className={styles.tags}>
				{tags.map((t) => {
					return (
						<a href={t.tagUrl} key={uuidv4()} draggable={false}>
							{t.tagName}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
