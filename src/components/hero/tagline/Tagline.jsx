import clsx from 'clsx';
import styles from './Tagline.module.scss';
import taglineData from '../../../data/tagline.data';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Tagline = () => {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		const interval1 = setInterval(() => {
			setIsActive(false);
		}, 16500);
		return () => clearInterval(interval1);
	}, []);

	useEffect(() => {
		const interval2 = setInterval(() => {
			setIsActive(true);
		}, 17000);
		return () => clearInterval(interval2);
	}, []);

	return (
		<div className={styles.container}>
			{taglineData.map((t) => {
				return (
					<span
						className={clsx({
							[styles.item]: true,
							[styles.active]: isActive,
						})}
						key={uuidv4()}
					>
						{t}
					</span>
				);
			})}
		</div>
	);
};

export default Tagline;
