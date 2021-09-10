import "../styles/header.scss";
import { Link } from "react-router-dom";
import logo from "../images/saveeasily.png";
import HeaderItem from "./HeaderItem";
import { HeaderInputs } from "../typings/interfaces";
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
					<a className="right" href={props.redirectUri}>
						<h3>Dashboard</h3>
					</a>
				) : (
					<Link
						className="right"
						to={`/dashboard/user/${props.userObject.discordId}`}
					>
						<img className="loading" src={props.userObject.avatar} alt="" />
						<h3>Dashboard</h3>
					</Link>
				)}
			</div>
		</header>
	);
};
export default Header;
