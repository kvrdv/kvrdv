import menuData from '../../data/menu.data';
import socialsData from '../../data/socials.data';
import styles from './Menu.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Menu = () => {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<h3 className={styles.header}>Menu</h3>
				</li>
				{menuData.map((m) => {
					return (
						<li key={uuidv4()}>
							<a href={m.anchor} id={m.idTag}>
								{m.title}
							</a>
						</li>
					);
				})}
			</ul>
			<ul>
				<li>
					<h3 className={styles.header}>Contacts</h3>
				</li>
				{socialsData.map((s) => {
					return (
						<li key={uuidv4()}>
							<a href={s.url}>{s.title}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
