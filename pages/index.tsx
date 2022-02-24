import type { NextPage } from "next";
import LeftBar from "./components/LeftBar";
import MainContents from "./components/MainContents";
import MidBar from "./components/MidBar";
import axios from "axios";
import { useState, useEffect } from "react";
import PreSearch from "./components/PreSearch";
import SearchHistory from "./components/SearchHistory";
import { clsMaker } from "../libs/utils";

const Home: NextPage = () => {
	const [summonerName, setSummonerName] = useState(["Hide on bush"]);
	const [searchData, setSearchData] = useState("");
	const [previewData, setPreviewData] = useState("");

	async function searchSummoner(ID) {
		if (ID) {
			const { data } = await axios.get(
				`https://codingtest.op.gg/api/summoner/${ID}`
			);
			let getHistory = JSON.parse(localStorage.getItem("searchHistory"));
			let arr = getHistory ? [...getHistory, ID] : [ID];
			localStorage.setItem("searchHistory", JSON.stringify(arr));

			setSearchData(data.summoner);
		}
	}
	async function searchID(preID) {
		setSummonerName(preID);
		if (preID) {
			const { data } = await axios.get(
				`https://codingtest.op.gg/api/summoner/${preID}`
			);
			setPreviewData(data.summoner);
		}
	}
	const keyPress = (e) => {
		if (e.key === "Enter") {
			searchSummoner(summonerName);
		}
	};
	useEffect(() => {
		return localStorage.removeItem("searchHistory");
	}, []);
	return (
		<div className="h-[1819px]">
			<div className="bg-[#1ea1f7] h-[97px]">
				<div className="w-full pt-3 pl-3">
					<img
						src="https://s-lol-web.op.gg/images/icon/opgglogo.svg"
						className="w-20"
					/>
				</div>
				<div className="flex flex-col items-end pr-20">
					<div className="flex items-center justify-end bg-transparent relative pt-3">
						<input
							className="py-1.5 pr-20 pl-2 rounded-md shadow-sm text-sm w-[260px]"
							placeholder="소환사명, 챔피언···"
							id="inputID"
							onChange={(e) => {
								searchID(e.target.value);
							}}
							onKeyPress={keyPress}
						/>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-gg.svg"
							className="w-6 absolute mr-2 cursor-pointer"
							onClick={() => {
								searchSummoner(summonerName);
							}}
						/>
					</div>
					{previewData.name && summonerName ? (
						<PreSearch preID={previewData} summoner={searchData} />
					) : (
						<SearchHistory preID={previewData} />
					)}
				</div>
			</div>
			{searchData ? <MidBar summoner={searchData} /> : ""}
			<div className={clsMaker("mt-8", searchData ? "border-t-2" : "")}>
				<div className="mx-[200px] flex flex-row items-start justify-center mt-5">
					{searchData ? <LeftBar summoner={searchData} /> : ""}
					{searchData ? <MainContents summoner={searchData} /> : ""}
				</div>
			</div>
		</div>
	);
};

export default Home;
