import "../styles/save-view.scss";
import { SaveType, SaveViewInputs } from "../typings/interfaces";
import close from "../images/close.svg";
const SaveView = (props: SaveViewInputs) => {
	return (
		<div className="save-view">
			<div className="save-view-inner">
				<div className="top">
					<div className="left">
						<h1>#{props.id}</h1>
						<h1>{props.title || "No title provided"}</h1>
					</div>
					<div className="right">
						<img onClick={props.close} src={close} alt="" />
					</div>
				</div>
				<div className="content">
					<div>{props.content}</div>
					{props.media && <img src={props.media} alt="" className="media" />}
				</div>
			</div>
		</div>
	);
};
export default SaveView;
