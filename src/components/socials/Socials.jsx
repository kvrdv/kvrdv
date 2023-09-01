import Heading from '../ui/heading/Heading';
import styles from './Socials.module.scss';
import Social from './social/Social';
import socialsData from '../../data/socials.data';
import { v4 as uuidv4 } from 'uuid';

const Socials = () => {	
	return (
		<div className={styles.container} id="socials">
			<Heading anchor="socials" headers={['Social', 'Links']} />
			<div className={styles.items} id="items">
				{socialsData.map((s) => {
					return (
						<Social
							key={uuidv4()}
							url={s.url}
							title={s.title}
							qr={s.qr}
							counter={s.counter}
							classNames={styles.item}
						/>
					);
				})}
			</div>
			{/* <nav>
				<button >
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 3L21.3923 18.6522H0.607696L11 3Z"
							fill="#F8DC4C"
						/>
					</svg>
				</button>
				<button>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 3L21.3923 18.6522H0.607696L11 3Z"
							fill="#F8DC4C"
						/>
					</svg>
				</button>
			</nav> */}
		</div>
	);
};

export default Socials;
