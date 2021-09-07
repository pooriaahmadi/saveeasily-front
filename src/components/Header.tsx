import "../styles/header.css";
import logo from "../images/saveeasily.png";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className="padding">
			<div>
				<div className="left">
					<img src={logo} alt="" />
					<h3>Save Easily</h3>
					<div className="items">
						<Link className="item" to="/">
							Home
						</Link>
						<Link className="item" to="/">
							Vote
						</Link>
						<Link className="item" to="/">
							Support
						</Link>
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
