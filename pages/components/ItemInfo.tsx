import { NextPage } from "next";
import { useEffect, useState } from "react";
import { clsMaker } from "../../libs/utils";
import axios from "axios";
const ItemInfo: NextPage = (props) => {
	const [itemData, setItemData] = useState({});
	async function getItemData() {
		const { data } = await axios.get(
			`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`
		);
		setItemData(data.data[props.show.itemId]);
	}
	useEffect(() => {
		getItemData();
	}, [props.show.itemId]);
	return (
		<div
			className="bg-[#222727] w-[300px] text-[11px] text-white p-1 absolute flex flex-col items-start justify-center"
			style={{ top: `${props.show.y}px`, left: `${props.show.x}px` }}
		>
			<span className="text-teal-400 font-bold">
				{itemData ? itemData.name : ""}
			</span>
			<span>{itemData ? itemData.plaintext : ""}</span>
			<p dangerouslySetInnerHTML={{ __html: itemData.description }}></p>
			<span>
				가격 :{" "}
				<span className="text-yellow-400">
					{itemData.gold ? itemData.gold.total : ""}(
					{itemData.gold ? itemData.gold.base : ""})
				</span>
			</span>
		</div>
	);
};

export default ItemInfo;
