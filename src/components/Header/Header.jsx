import './Header.scss';
const menu = [
	{ id: 1, name: 'Пицца' },
	{ id: 2, name: 'Комбо' },
	{ id: 3, name: 'Закуски' },
	{ id: 4, name: 'Напитки' },
	{ id: 5, name: 'Акции' },
	{ id: 6, name: 'Контакты' },
	{ id: 7, name: 'О нас' },
];
const Header = () => {
	return (
		<div className="header">
			<div className="header-wrap">
				<div className="header-logo">
					<a href="/" className="header-logo" alt="logo">
						<h2>Eda dostavka</h2>
					</a>
				</div>

				<nav>
					<ul className="menu">
						{menu.map((menu, index) => {
							return (
								<li className="menu-element" key={index}>
									<a href="#" alt="menu-elements">
										{menu.name}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Header;
