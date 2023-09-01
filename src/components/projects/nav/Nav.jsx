import clsx from 'clsx';
import styles from './Nav.module.scss';
import projectsNavData from '../../../data/projects-nav.data';
import { v4 as uuidv4 } from 'uuid';

const Nav = ({ activeMenu, clickHandler }) => {
	return (
		<nav className={styles.container}>
			{projectsNavData.map((n) => {
				return (
					<span
						className={clsx({
							[styles.item]: true,
							[styles.active]: activeMenu === n,
						})}
						key={uuidv4()}
						onClick={clickHandler}
					>
						{n}
					</span>
				);
			})}
		</nav>
	);
};

export default Nav;
