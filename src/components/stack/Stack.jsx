import Heading from '../ui/heading/Heading';
import styles from './Stack.module.scss';
import stackData from '../../data/stack.data';
import { v4 as uuidv4 } from 'uuid';

const Stack = () => {
	return (
		<div className={styles.container} id="stack">
			<Heading anchor="stack" headers={['Tech', 'Stack']} />

			<div className={styles.ticker}>
				<div className={styles.mask}></div>

				{stackData.map((stackDataItem) => {
					return (
						<ul className={styles.row} key={uuidv4()}>
							{stackDataItem.map((s) => {
								return (
									<li className={styles.cell} key={uuidv4()}>
										{s}
									</li>
								);
							})}
						</ul>
					);
				})}
				
				<div className={styles.mask}></div>
			</div>
		</div>
	);
};

export default Stack;
