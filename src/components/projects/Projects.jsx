import Heading from '../ui/heading/Heading';
import styles from './Projects.module.scss';
import Nav from './nav/Nav';
import Project from './project/Project';
import projectsData from '../../data/projects.data';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
	const [activeMenu, setActiveMenu] = useState('frontend');

	const changeActiveMenu = (e) => {
		setActiveMenu(e.target.innerHTML);
	};

	return (
		<div className={styles.container} id="projects">
			<Heading headers={['All', 'Projects']} />
			<Nav clickHandler={changeActiveMenu} activeMenu={activeMenu} />
			<div className={styles.items}>
				{projectsData
					.filter((p) => p.type === activeMenu)
					.map((p) => {
						return (
							<Project
								key={uuidv4()}
								title={p.title}
								type={p.type}
								url={p.url}
								cover={p.cover}
								tags={p.tags}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Projects;
