import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

const Header = ({ isDark, setIsDark }) => {
	return (
		<>
			<header>
				<div>
					<div id="title">
						<i>
							<FontAwesomeIcon icon="list-check" />
						</i>
						<h1>Todo List</h1>
					</div>
					<button
						style={
							isDark
								? {
										color: "var(--purple)",
										backgroundColor: "var(--white)",
								  }
								: {
										color: "var(--white)",
										backgroundColor: "var(--purple)",
								  }
						}
						onClick={() => {
							isDark ? setIsDark(false) : setIsDark(true);
						}}>
						{isDark ? (
							<FontAwesomeIcon icon="circle-half-stroke" />
						) : (
							<FontAwesomeIcon icon="circle-half-stroke" />
						)}
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;
