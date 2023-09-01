import styles from './BurgerButton.module.scss';

const BurgerButton = ({ type, clickHandler }) => {
	return (
		<button className={styles.button} onClick={clickHandler}>
			{!type && (
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 16H60V-16H0V16ZM60 44H0V76H60V44Z"
						fill="white"
						mask="url(#path-1-inside-1_8_7)"
					/>
				</svg>
			)}
			{type && (
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_213_35)">
						<rect
							y="11"
							width="16"
							height="69"
							transform="rotate(-45 0 11)"
							fill="#282828"
						/>
						<rect
							x="49"
							width="16"
							height="69"
							transform="rotate(45 49 0)"
							fill="#282828"
						/>
					</g>
					<defs>
						<clipPath id="clip0_213_35">
							<rect
								width="60"
								height="60"
								fill="white"
								transform="matrix(0 -1 1 0 0 60)"
							/>
						</clipPath>
					</defs>
				</svg>
			)}
		</button>
	);
};

export default BurgerButton;
