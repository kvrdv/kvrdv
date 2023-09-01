import clsx from 'clsx';
import styles from './BurgerMenu.module.scss';
import Menu from '../../menu/Menu';
import Logo from '../../header/logo/Logo';
import BurgerButton from '../burger-button/BurgerButton';

const BurgerMenu = ({ isActive, clickHandler }) => {
	return (
		<div
			id="burger-menu"
			className={clsx({
				[styles.container]: true,
				[styles.active]: isActive,
			})}
			onClick={clickHandler}
		>
			<div className={styles.header}>
				<Logo type={true} />
				<BurgerButton type={true} clickHandler={clickHandler} />
			</div>

			<div className={styles.menu}>
				<Menu />
			</div>
		</div>
	);
};

export default BurgerMenu;
