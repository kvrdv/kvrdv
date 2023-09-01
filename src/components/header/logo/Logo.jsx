import styles from './Logo.module.scss';

const Logo = ({ type }) => {
	return (
		<a
			className={styles.image}
			href="https://github.com/kvrdv"
			draggable={false}
		>
			{!type && (
				<svg className={styles.open}
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_8_6)">
						<path
							d="M49.953 60L49.953 0.0599992L34.644 0.0599992V27.033H34.482L17.553 0.0599992L1.51499 0.0599992L21.36 29.949L0.218997 60H18.12L34.482 34.08H34.644L34.644 60H49.953Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_8_6">
							<rect
								width="60"
								height="60"
								fill="white"
								transform="matrix(1 0 0 -1 0 60)"
							/>
						</clipPath>
					</defs>
				</svg>
			)}
			{type && (
				<svg className={styles.close}
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_213_5)">
						<path
							d="M6.047 60L6.047 0.0599992H21.356V27.033H21.518L38.447 0.0599992H54.485L34.64 29.949L55.781 60H37.88L21.518 34.08H21.356V60H6.047Z"
							fill="#282828"
						/>
					</g>
					<defs>
						<clipPath id="clip0_213_5">
							<rect width="60" height="60" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)}
		</a>
	);
};
export default Logo;
