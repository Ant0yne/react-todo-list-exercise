import "./footer.css";

const Footer = ({ isDark }) => {
	return (
		<>
			<footer>
				<p>
					Made with <span>React</span> at{" "}
					<a
						style={
							isDark ? { color: "var(--white)" } : { color: "var(--black)" }
						}
						href="https://www.lereacteur.io/"
						target="_blank">
						Le Reacteur
					</a>{" "}
					by{" "}
					<a
						style={
							isDark ? { color: "var(--white)" } : { color: "var(--black)" }
						}
						href="https:www.linkedin.com/in/antoine-soliveres-396811a4"
						target="_blank">
						Antoine SOLIVERES
					</a>
				</p>
			</footer>
		</>
	);
};

export default Footer;
