import styles from './Graphic.module.scss';
import graphicData from '../../../data/graphic.data';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Graphic = () => {
	useEffect(() => {
		const graphicLeft1 = document.getElementById('graphic1');
		const graphicLeft2 = document.getElementById('graphic2');
		const graphicLeft3 = document.getElementById('graphic3');
		const graphicLeft4 = document.getElementById('graphic4');
		const graphicLeft5 = document.getElementById('graphic5');

		const graphicRight1 = document.getElementById('graphic6');
		const graphicRight2 = document.getElementById('graphic7');
		const graphicRight3 = document.getElementById('graphic8');

		const handleScroll = (event) => {
			let x = window.pageYOffset;

			graphicLeft1.style.transform = 'translate(-' + x * 0.1 + 'px)';
			graphicLeft2.style.transform = 'translate(-' + x * 0.2 + 'px)';
			graphicLeft3.style.transform = 'translate(-' + x * 0.3 + 'px)';
			graphicLeft4.style.transform = 'translate(-' + x * 0.4 + 'px)';
			graphicLeft5.style.transform = 'translate(-' + x * 0.5 + 'px)';

			graphicRight1.style.transform = 'translate(+' + x * 0.1 + 'px)';
			graphicRight2.style.transform = 'translate(+' + x * 0.2 + 'px)';
			graphicRight3.style.transform = 'translate(+' + x * 0.3 + 'px)';
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div className={styles.container}>
			{graphicData.map((g) => {
				return (
					<img
						src={g.image}
						key={uuidv4()}
						alt="graphic"
						draggable={false}
						id={g.idTag}
					/>
				);
			})}
		</div>
	);
};

export default Graphic;
