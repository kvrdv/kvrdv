import clockWork from '../assets/images/projects/clockwork.png';
import passGen from '../assets/images/projects/passgen.png';
import noemi from '../assets/images/projects/noemi.png';
import courses from '../assets/images/projects/courses.png';
import express from '../assets/images/projects/express.png';
import nest from '../assets/images/projects/nest.png';
import bncbn from '../assets/images/projects/bncbn.png';
import unqwerty1 from '../assets/images/projects/unqwerty1.png';
import unqwerty2 from '../assets/images/projects/unqwerty2.png';
import node from '../assets/images/projects/node.png';
import cv from '../assets/images/projects/cv.png';
import surface from '../assets/images/projects/surface.png';
import kbact from '../assets/images/projects/kbact.png';
import memegen from '../assets/images/projects/memegen.png';
import keksby from '../assets/images/projects/keksby.png';
import avifly from '../assets/images/projects/avifly.png';
import todo from '../assets/images/projects/todo.png';

const projectsData = [
	{
		title: 'portfolio page',
		type: 'static',
		url: 'https://github.com/kvrdv/cv',
		cover: cv,
		tags: [
			{
				tagName: 'HTML',
				tagUrl: 'https://html.spec.whatwg.org/',
			},
			{
				tagName: 'CSS',
				tagUrl: 'https://www.w3.org/TR/CSS/#css',
			},
			{
				tagName: 'Flex',
				tagUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex',
			},
			{
				tagName: 'JavaScript',
				tagUrl: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
			},
		],
	},
	{
		title: 'surface',
		type: 'static',
		url: 'https://github.com/kvrdv/surface',
		cover: surface,
		tags: [
			{
				tagName: 'HTML',
				tagUrl: 'https://html.spec.whatwg.org/',
			},
			{
				tagName: 'CSS',
				tagUrl: 'https://www.w3.org/TR/CSS/#css',
			},
			{
				tagName: 'JavaScript',
				tagUrl: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
			},
		],
	},
	{
		title: 'noemi',
		type: 'static',
		url: 'https://github.com/kvrdv/noemi',
		cover: noemi,
		tags: [
			{
				tagName: 'HTML',
				tagUrl: 'https://html.spec.whatwg.org/',
			},
			{
				tagName: 'CSS',
				tagUrl: 'https://www.w3.org/TR/CSS/#css',
			},
		],
	},
	{
		title: 'web agency',
		type: 'static',
		url: 'https://github.com/kvrdv/bncbn',
		cover: bncbn,
		tags: [
			{
				tagName: 'HTML',
				tagUrl: 'https://html.spec.whatwg.org/',
			},
			{
				tagName: 'Responsive',
				tagUrl: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
			},
			{
				tagName: 'BEM',
				tagUrl: 'https://getbem.com/',
			},
			{
				tagName: 'JavaScript',
				tagUrl: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
			},
		],
	},
	{
		title: 'keksby',
		type: 'static',
		url: 'https://github.com/kvrdv/keksby',
		cover: keksby,
		tags: [
			{
				tagName: 'HTML',
				tagUrl: 'https://html.spec.whatwg.org/',
			},
			{
				tagName: 'CSS',
				tagUrl: 'https://www.w3.org/TR/CSS/#css',
			},
			{
				tagName: 'Flex',
				tagUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex',
			},
			{
				tagName: 'Grid',
				tagUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid',
			},
		],
	},
	{
		title: 'clock work',
		type: 'frontend',
		url: 'https://github.com/kvrdv/clock-work',
		cover: clockWork,
		tags: [
			{
				tagName: 'React',
				tagUrl: 'https://react.dev/',
			},
			{
				tagName: 'Webpack',
				tagUrl: 'https://webpack.js.org/',
			},
			{
				tagName: 'Npm',
				tagUrl: 'https://www.npmjs.com/',
			},
		],
	},
	{
		title: 'todo app',
		type: 'frontend',
		url: 'https://github.com/kvrdv/todo-test',
		cover: todo,
		tags: [
			{
				tagName: 'React',
				tagUrl: 'https://react.dev/',
			},
			{
				tagName: 'Webpack',
				tagUrl: 'https://webpack.js.org/',
			},
			{
				tagName: 'Npm',
				tagUrl: 'https://www.npmjs.com/',
			},
			{
				tagName: 'TypeScript',
				tagUrl: 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		title: 'avia tickets',
		type: 'frontend',
		url: 'https://github.com/kvrdv/avifly-test',
		cover: avifly,
		tags: [
			{
				tagName: 'React',
				tagUrl: 'https://react.dev/',
			},
			{
				tagName: 'Webpack',
				tagUrl: 'https://webpack.js.org/',
			},
			{
				tagName: 'Npm',
				tagUrl: 'https://www.npmjs.com/',
			},
		],
	},
	{
		title: 'password generator',
		type: 'frontend',
		url: 'https://github.com/kvrdv/unqwertier',
		cover: passGen,
		tags: [
			{
				tagName: 'JavaScript',
				tagUrl: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
			},
			{
				tagName: 'Babel',
				tagUrl: 'https://babeljs.io/',
			},
			{
				tagName: 'ESLint',
				tagUrl: 'https://eslint.org/',
			},
		],
	},
	{
		title: 'meme generator',
		type: 'frontend',
		url: 'https://github.com/kvrdv/memegen',
		cover: memegen,
		tags: [
			{
				tagName: 'React',
				tagUrl: 'https://react.dev/',
			},
			{
				tagName: 'Webpack',
				tagUrl: 'https://webpack.js.org/',
			},
			{
				tagName: 'SCSS',
				tagUrl: 'https://sass-lang.com/',
			},
		],
	},
	{
		title: 'kbact',
		type: 'frontend',
		url: 'https://github.com/kvrdv/kbact',
		cover: kbact,
		tags: [
			{
				tagName: 'React',
				tagUrl: 'https://react.dev/',
			},
			{
				tagName: 'Webpack',
				tagUrl: 'https://webpack.js.org/',
			},
			{
				tagName: 'SCSS',
				tagUrl: 'https://sass-lang.com/',
			},
		],
	},
	{
		title: 'pass manager on react',
		type: 'frontend',
		url: 'https://github.com/kvrdv/unqwerty-front-react',
		cover: unqwerty1,
		tags: [
			{
				tagName: 'Vite',
				tagUrl: 'https://vitejs.dev/',
			},
			{
				tagName: 'React Router',
				tagUrl: 'https://reactrouter.com/en/main',
			},
			{
				tagName: 'TanStack Query',
				tagUrl: 'https://tanstack.com/query/latest',
			},
		],
	},
	{
		title: 'pass manager on next',
		type: 'frontend',
		url: 'https://github.com/kvrdv/unqwerty-front-next',
		cover: unqwerty2,
		tags: [
			{
				tagName: 'Next',
				tagUrl: 'https://nextjs.org/',
			},
			{
				tagName: 'Tailwind',
				tagUrl: 'https://tailwindcss.com/',
			},
			{
				tagName: 'Redux',
				tagUrl: 'https://redux.js.org/',
			},
		],
	},
	{
		title: 'courses app',
		type: 'backend',
		url: 'https://github.com/kvrdv/nodejs-test',
		cover: courses,
		tags: [
			{
				tagName: 'Handlebars',
				tagUrl: 'https://handlebarsjs.com/',
			},
			{
				tagName: 'Node',
				tagUrl: 'https://nodejs.org/en',
			},
			{
				tagName: 'Mongoose',
				tagUrl: 'https://mongoosejs.com/',
			},
		],
	},
	{
		title: 'pass manager on express',
		type: 'backend',
		url: 'https://github.com/kvrdv/unqwerty-back-express',
		cover: express,
		tags: [
			{
				tagName: 'Express',
				tagUrl: 'https://expressjs.com/',
			},
			{
				tagName: 'PostgreSQL',
				tagUrl: 'https://www.postgresql.org/',
			},
			{
				tagName: 'Prisma',
				tagUrl: 'https://www.prisma.io/',
			},
		],
	},
	{
		title: 'pass manager on nest',
		type: 'backend',
		url: 'https://github.com/kvrdv/unqwerty-back-nest',
		cover: nest,
		tags: [
			{
				tagName: 'Nest',
				tagUrl: 'https://nestjs.com/',
			},
			{
				tagName: 'MongoDB',
				tagUrl: 'https://www.mongodb.com/',
			},
			{
				tagName: 'TypeScript',
				tagUrl: 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		title: 'JSON compare',
		type: 'backend',
		url: 'https://github.com/kvrdv/test-gpb',
		cover: node,
		tags: [
			{
				tagName: 'Node',
				tagUrl: 'https://nodejs.org/en',
			},
			{
				tagName: 'JavaScript',
				tagUrl: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
			},
		],
	},
];

export default projectsData;
