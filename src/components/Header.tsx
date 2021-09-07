import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/saveeasily.png";
import HeaderItem from "./HeaderItem";
const Header = () => {
	return (
		<header className="padding">
			<div>
				<div className="left">
					<img src={logo} alt="" />
					<h3>Save Easily</h3>
					<div className="items">
						<HeaderItem className="item" to="/">
							Home
						</HeaderItem>
						<HeaderItem className="item" to="/vote">
							Vote
						</HeaderItem>
						<HeaderItem className="item" to="/support">
							Support
						</HeaderItem>
					</div>
				</div>
				<Link className="right" to="/dashboard">
					<h3>Dashboard</h3>
				</Link>
			</div>
		</header>
	);
};
export default Header;
