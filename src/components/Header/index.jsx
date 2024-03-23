import "./header.css";

const Header = ({ isDark, setIsDark }) => {
	return (
		<>
			<header>
				<h1>Todo List</h1>
				<button
					onClick={() => {
						isDark ? setIsDark(false) : setIsDark(true);
					}}>
					{isDark ? "Light Mode" : "Dark Mode"}
				</button>
			</header>
		</>
	);
};

export default Header;
