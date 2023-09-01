import styles from './Header.module.scss';
import Logo from './logo/Logo';
import BurgerButton from './burger-button/BurgerButton';
import { useEffect, useState } from 'react';
import BurgerMenu from './burger-menu/BurgerMenu';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const activate = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsActive(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div
			className={styles.container}
			id="home"
		>
			<Logo type={false} />
			<BurgerButton type={false} clickHandler={activate} />
			<BurgerMenu isActive={isActive} clickHandler={activate} />
		</div>
	);
};

export default Header;
