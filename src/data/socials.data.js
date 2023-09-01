import qrEmail from '../assets/images/qr/qr-email.svg';
import qrLinkedIn from '../assets/images/qr/qr-linkedin.svg';
import qrGitHub from '../assets/images/qr/qr-github.svg';
import qrTelegram from '../assets/images/qr/qr-telegram.svg';
import qrHeadHunter from '../assets/images/qr/qr-headhunter.svg';
import qrHabrCareer from '../assets/images/qr/qr-habrcareer.svg';

const socialsData = [
	{
		title: 'Email',
		url: 'mailto: s.kovardaev@gmail.com',
		qr: qrEmail,
		counter: 47,
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/kvrdv',
		qr: qrLinkedIn,
		counter: 78,
	},
	{
		title: 'GitHub',
		url: 'https://github.com/kvrdv',
		qr: qrGitHub,
		counter: 94,
	},
	{
		title: 'Telegram',
		url: 'https://t.me/kvrdv',
		qr: qrTelegram,
		counter: 89,
	},
	{
		title: 'HeadHunter',
		url: 'https://hh.ru/resume/25efc2c1ff08f9bd630039ed1f4a7a62554573',
		qr: qrHeadHunter,
		counter: 23,
	},
	{
		title: 'HabrCareer',
		url: 'https://career.habr.com/kvrdv',
		qr: qrHabrCareer,
		counter: 30,
	},
];

export default socialsData;
