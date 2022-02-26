import type { NextPage } from "next";
import LeftBar from "./LeftBar";
import MainContents from "./MainContents";
import MidBar from "./MidBar";
import axios from "axios";
import { useState, useEffect } from "react";
import PreSearch from "./components/PreSearch";
import SearchHistory from "./components/SearchHistory";
import { clsMaker } from "../libs/utils";
import Image from "next/image";

const Home: NextPage = () => {
	const [summonerName, setSummonerName] = useState("Hide on bush");
	const [searchData, setSearchData] = useState("");
	const [previewData, setPreviewData] = useState("");
	const [searchFocus, setSearchFocus] = useState(false);
	async function searchSummoner(ID: string) {
		if (ID) {
			const { data } = await axios.get(
				`https://codingtest.op.gg/api/summoner/${ID}`
			);
			let getHistory = JSON.parse(localStorage.getItem("searchHistory"));

			let arr = getHistory ? [...getHistory, ID] : [ID];
			localStorage.setItem("searchHistory", JSON.stringify(arr));
			setSearchFocus(false);
			setSearchData(data.summoner);
		}
	}
	async function searchID(preID: string) {
		setSummonerName(preID);
		setSearchFocus(true);
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
					<Image
						src={"https://s-lol-web.op.gg/images/icon/opgglogo.svg"}
						width={65}
						height={16}
					/>
				</div>
				<div className="flex flex-col items-end pr-[200px]">
					<div className="flex items-center justify-end bg-transparent relative py-1 w-[260px]">
						<input
							className="py-1.5 pr-20 pl-2 rounded-md shadow-sm text-sm w-[260px] absolute"
							placeholder="소환사명, 챔피언···"
							onFocus={() => {
								setSearchFocus(true);
							}}
							onChange={(e) => {
								searchID(e.target.value);
							}}
							onKeyPress={keyPress}
						/>
						<Image
							src={
								"https://s-lol-web.op.gg/images/icon/icon-gg.svg"
							}
							height={14}
							width={50}
							className={"absolute right-10 cursor-pointer pr-5"}
							onClick={() => {
								searchSummoner(summonerName);
							}}
						/>
					</div>
					{searchFocus ? (
						previewData.name && summonerName ? (
							<PreSearch
								preID={previewData}
								summoner={searchData}
								reUse={searchSummoner}
							/>
						) : (
							<SearchHistory
								preID={previewData}
								reUse={searchSummoner}
							/>
						)
					) : null}
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
