import { NextPage } from "next";
import axios from "axios";
import { useState, useEffect } from "react";
import RecentWinRate from "./RecentWinRate";
import { clsMaker } from "../../libs/utils";
import MostChampList from "./MostChampList";

const MostChamp: NextPage = (props) => {
	const [mostChamp, setMostChamp] = useState([]);
	const [checkSeven, setCheckSeven] = useState(false);
	useEffect(() => {
		getMostData();
	}, [props.userID]);
	async function getMostData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.userID}/mostInfo/`
		);
		setMostChamp(data);
	}
	return (
		<div className="w-full flex flex-col space-y-2">
			<div className="bg-[#ededed] border-[1px] border-[#cdd2d2] shadow-sm">
				<div className="flex flex-row items-center justify-evenly divide-x-[0.5px] divide-[#ededed]">
					<div
						className={clsMaker(
							"w-full  text-[12px] text-center py-3 shadow-sm cursor-pointer",
							checkSeven
								? "bg-[#f2f2f2] text-[#879292] border-[#cdd2d2]"
								: "bg-[#ededed] text-[#5e5e5e] font-bold border-[#ededed]"
						)}
						onClick={() => {
							setCheckSeven(false);
						}}
					>
						<span>챔피언 승률</span>
					</div>
					<div
						className={clsMaker(
							"w-full  text-[12px] text-center py-3 shadow-sm cursor-pointer",
							checkSeven
								? "bg-[#ededed] text-[#5e5e5e] font-bold border-[#ededed]"
								: "bg-[#f2f2f2] text-[#879292] border-[#cdd2d2]"
						)}
						onClick={() => {
							setCheckSeven(true);
						}}
					>
						<span>7일간 랭크 승률</span>
					</div>
				</div>
				{checkSeven ? (
					mostChamp.recentWinRate ? (
						<RecentWinRate data={mostChamp.recentWinRate} />
					) : null
				) : mostChamp.champions ? (
					<MostChampList data={mostChamp.champions} />
				) : null}
			</div>
			{}
		</div>
	);
};
export default MostChamp;
