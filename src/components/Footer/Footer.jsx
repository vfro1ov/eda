import React from 'react';
import './Footer.scss'

const list = [
	{ id: 1, name: 'Eda | Пицца' },
	{ id: 2, name: 'Eda | О нас' },
	{ id: 3, name: 'Eda | Книга' },
	{ id: 4, name: 'Eda | Блог' },
	{ id: 5, name: 'Eda | Адреса' },
];

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-list">
				{list.map((list, index) => {
					return (
						<li key={index}>
							{list.name}
						</li>
					);
				})}
				{/* <li className="footer_list_li"></li> */}
				{/* <li className="footer_list_li"></li> */}
				{/* <li className="footer_list_li"></li> */}
			</div>
			<div className="footer_app"></div>
			<div className="footer_contacts"></div>
		</div>
	);
};
