import { SavesInputs, SaveType } from "../typings/interfaces";
import "../styles/saves.scss";
import search from "../svg/search.svg";
import Save from "./Save";
import React, { useEffect, useState } from "react";
const Saves = (props: SavesInputs) => {
	const [saves, setSaves] = useState([]);
	const [previewSaves, setPreviewSaves] = useState([]);
	useEffect(() => {
		const getSaves = async () => {
			const response = await fetch(`${props.backend}/saves/all`, {
				headers: {
					Authorization: `Bearer ${props.userObject.token}`,
				},
				method: "GET",
			});
			const result = await response.json();
			setSaves(result);
			setPreviewSaves(result);
		};
		getSaves();
	}, [props.userGuilds]);
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const search: HTMLInputElement | null = document.querySelector(
			'.search>input[type="text"]'
		);
		setPreviewSaves(
			saves.filter((item: SaveType) => {
				if (search) {
					return (
						item.title?.includes(search.value) ||
						item.content.includes(search.value)
					);
				}
				return false;
			})
		);
	};
	return (
		<div className="saves">
			<form className="search" onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Type something"
					onChange={handleSearch}
				/>
				<button type="submit">
					<img src={search} alt="" />
				</button>
			</form>
			<div className="records">
				{previewSaves.map((item: SaveType) => (
					<Save {...item} key={item.id}></Save>
				))}
			</div>
		</div>
	);
};
export default Saves;
