import { HeaderItemInputs } from "../typings/interfaces";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const HeaderItem = ({ className, to, children }: HeaderItemInputs) => {
	const currentPath = useLocation().pathname;
	return (
		<Link className={`${className} ${currentPath === to && "active"}`} to={to}>
			{children}
		</Link>
	);
};
export default HeaderItem;
