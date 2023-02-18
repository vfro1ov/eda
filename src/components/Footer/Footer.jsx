import React from 'react';
import './Footer.scss';

const list = [
	{ id: 1, name: 'Eda | Пицца' },
	{ id: 2, name: 'Eda | О нас' },
	{ id: 3, name: 'Eda | Книга' },
	{ id: 4, name: 'Eda | Блог' },
	{ id: 5, name: 'Eda | Адреса' },
];

const social = [
	{
		id: 1,
		name: 'vk',
		logo: 'https://img.icons8.com/color/1x/vk-com.png',
		class: '"fa-brands fa-vk"',
	},
	{
		id: 1,
		name: 'instagram',
		logo: 'https://img.icons8.com/color/1x/instagram-new.png',
		class: '"fa fa-instagram"',
	},
	{
		id: 1,
		name: 'telegram',
		logo: 'https://img.icons8.com/color/1x/telegram-app.png',
		class: '"fa-brands fa-telegram"',
	},
];

const application = [
	{ id: 1, name: 'Google Play', logo: 'https://img.icons8.com/fluency/1x/google-play.png' },
	{ id: 1, name: 'AppleStore', logo: 'https://img.icons8.com/fluency/1x/apple-app-store.png' },
];

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-items">
				<div className="footer-items-list">
					<h4>Eda Dostavka</h4>
					{list.map((list, index) => {
						return <li key={index}>{list.name}</li>;
					})}
				</div>
				<div className="footer-items-social">
					<h4>Напиши нам в социальные сети:</h4>
					{social.map((social, index) => {
						return (
							<li key={index}>
								<img src={social.logo} alt="" />
							</li>
						);
					})}
				</div>
				<div className="footer-items-app">
					<h4>Скачать приложение:</h4>
					{application.map((application, index) => {
						return (
							<li key={index}>
								<img src={application.logo} alt="" />
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
};
