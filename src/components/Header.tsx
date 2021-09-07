import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/saveeasily.png";
import HeaderItem from "./HeaderItem";
import { HeaderInputs } from "../typings/interfaces";
import { UserState } from "../typings/enums";
const Header = (props: HeaderInputs) => {
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
				{!props.userState ? (
					<a
						className="right"
						href="https://discord.com/api/oauth2/authorize?client_id=879048523801317386&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Freturn&response_type=code&scope=identify%20guilds%20guilds.join"
					>
						<h3>Dashboard</h3>
					</a>
				) : (
					<Link className="right" to="/dashboard">
						<h3>Dashboard</h3>
					</Link>
				)}
			</div>
		</header>
	);
};
export default Header;
