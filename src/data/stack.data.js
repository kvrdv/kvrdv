let stackDataTemp = [
	'HTML',
	'CSS',
	'JavaScript',
	'Flex',
	'Grid',
	'Animation',
	'Position',
	'Adaptive',
	'SASS',
	'ES6',
	'ES2020',
	'DOM',
	'NPM',
	'YARN',
	'SCSS',
	'Bootstrap',
	'Tailwind',
	'Vue',
	'React',
	'Angular',
	'Redux',
	'Mobx',
	'Hooks',
	'Axios',
	'Typescript',
	'Webpack',
	'Next',
	'Git',
	'GraphQL',
	'Apollo',
];

const stackData = [];

const shuffle = (array) => {
	return array.sort(() => Math.random() - 0.5);
};

for (let i = 1; i <= 4; i++) {
	stackData.push(shuffle(stackDataTemp.slice()));
	stackDataTemp = shuffle(stackDataTemp);
}

export default stackData;
