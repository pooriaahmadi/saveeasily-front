import { SaveType } from "../typings/interfaces";
import editSvg from "../images/edit.svg";
import deleteSvg from "../images/delete.svg";
import viewSvg from "../images/view.svg";
import "../styles/record.scss";
import { MouseEventHandler } from "react";
import { useState } from "react";
import SaveView from "./SaveView";
const Save = (props: SaveType) => {
	const [viewSave, setViewSave] = useState(<></>);
	const closeSaveView: MouseEventHandler<HTMLImageElement> = (e) => {
		setViewSave(<></>);
	};
	const handleViewClick: MouseEventHandler<HTMLImageElement> = (e) => {
		setViewSave(<SaveView close={closeSaveView} {...props}></SaveView>);
	};
	return (
		<div className="record">
			{viewSave}
			<div className="left">
				<h3 className="id">#{props.id}</h3>
				<h3 className="title">{props.title || "No title provided"}</h3>
			</div>
			<div className="right">
				<img src={editSvg} alt="" />
				<img src={deleteSvg} alt="" />
				<img src={viewSvg} alt="" onClick={handleViewClick} />
			</div>
		</div>
	);
};
export default Save;
