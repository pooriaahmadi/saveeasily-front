import "../styles/footer.scss";
import logo from "../images/saveeasily.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="middle">
				<img src={logo} alt="" />
				<h1>Save Easily</h1>
				<p>© 2021 Pastep studios</p>
			</div>
			<div>
				<div className="left">
					<h1>Links</h1>
					<div className="links">
						<Link to="/">Instagram</Link>
						<Link to="/">Discord</Link>
					</div>
				</div>
				<div className="right">
					<h1>Contact us</h1>
					<div className="links">
						<Link to="/">Email</Link>
						<Link to="/">Phone</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
