import clsx from 'clsx';
import styles from './BurgerButton.module.scss';

const BurgerButton = ({ type, clickHandler }) => {
	return (
		<button
			className={clsx({
				[styles.button]: true,
				[styles.burger]: type,
			})}
			onClick={clickHandler}
		></button>
	);
};

export default BurgerButton;
