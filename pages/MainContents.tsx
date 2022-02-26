import { NextPage } from "next";
import { useEffect, useState } from "react";
import TeamContents from "./components/TeamContents";
import axios from "axios";
import { clsMaker } from "../libs/utils";
import ItemInfo from "./components/ItemInfo";
import Image from "next/image";

interface mainContentsData {
	allGameCnt: number;
	winGameCnt: number;
	loseGameCnt: number;
	winRate: number;
	killRate: string;
	deathRate: string;
	assiRate: string;
	kda: string;
	mostChamp: object;
	position: object;
}

const MainContents: NextPage = (props) => {
	const [matchData, setMatchData] = useState({});
	const [gameType, setGameType] = useState("전체");
	const [itemShow, setItemShow] = useState({
		over: false,
	});
	function getItemInfo(e, itemId) {
		setItemShow({
			over: true,
			x: e.pageX + 20,
			y: e.pageY + 20,
			itemId: itemId,
		});
	}
	async function getMatchData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.summoner.name}/matches/`
		);

		if (data) {
			let gameTypeSelector =
				gameType === "전체"
					? data.games
					: data.games.filter((value) => {
							return (value.gameType =
								gameType === "솔랭"
									? "솔랭"
									: gameType === "자랭"
									? "자유 5:5 랭크"
									: "");
					  });
			const setData: object = {
				allGameCnt: data.games ? gameTypeSelector.length : 0,
				winGameCnt: data.games
					? gameTypeSelector.filter((value) => {
							return value.isWin;
					  }).length
					: 0,
				loseGameCnt: data.games
					? gameTypeSelector.filter((value) => {
							return !value.isWin;
					  }).length
					: 0,

				winRate: data.games
					? Math.round(
							(gameTypeSelector.filter((value) => {
								return value.isWin;
							}).length /
								gameTypeSelector.length) *
								100
					  )
					: 0,
				killRate: (
					gameTypeSelector.reduce((prev, curr) => {
						return prev + curr.stats.general.kill;
					}, 0) / gameTypeSelector.length
				).toFixed(1),
				deathRate: (
					gameTypeSelector.reduce((prev, curr) => {
						return prev + curr.stats.general.death;
					}, 0) / gameTypeSelector.length
				).toFixed(1),
				assiRate: (
					gameTypeSelector.reduce((prev, curr) => {
						return prev + curr.stats.general.assist;
					}, 0) / gameTypeSelector.length
				).toFixed(1),
				kda: gameTypeSelector
					.reduce((prev, curr) => {
						return (
							prev +
							Number(
								curr.stats.general.kdaString.replace(":1", "")
							) /
								gameTypeSelector.length
						);
					}, 0)
					.toFixed(2),
				contributionForKillRate: Math.round(
					gameTypeSelector.reduce((prev, curr) => {
						return (
							prev +
							Number(
								curr.stats.general.contributionForKillRate.replace(
									"%",
									""
								)
							)
						);
					}, 0) / gameTypeSelector.length
				),
				mostChamp: data.champions.map((value) => {
					return {
						imgUrl: value.imageUrl.includes("https://")
							? value.imageUrl
							: "https:" + value.imageUrl,
						name: value.name,
						winRate: Math.round((value.wins / value.games) * 100),
						winCnt: value.wins,
						loseCnt: value.losses,
						kda: (
							(value.kills + value.assists) /
							value.deaths
						).toFixed(2),
					};
				}),
				position: data.positions.map((value) => {
					return {
						name: value.positionName,
						playRate: Math.round((value.games / 20) * 100),
						winRate: Math.round(
							(value.wins / (value.wins + value.losses)) * 100
						),
					};
				}),
				games: data.games,
			};
			console.log(setData);
			setMatchData(setData);
		}
	}

	useEffect(() => {
		getMatchData();
	}, [props.summoner, gameType]);
	return (
		<div className="shadow-sm min-w-[690px] max-w-[690px]">
			<div className="flex flex-row items-center justify-start border-[1px] shadow-sm text-[12px] pl-2 space-x-1">
				<span
					className={clsMaker(
						"px-3 py-2  border-blue-600",
						gameType === "전체"
							? "text-blue-600 font-bold border-b-2"
							: "cursor-pointer"
					)}
					onClick={() => {
						setGameType("전체");
					}}
				>
					전체
				</span>
				<span
					className={clsMaker(
						"px-3 py-2  border-blue-600",
						gameType === "솔랭"
							? "text-blue-600 font-bold border-b-2"
							: "cursor-pointer"
					)}
					onClick={() => {
						setGameType("솔랭");
					}}
				>
					솔로랭크
				</span>
				<span
					className={clsMaker(
						"px-3 py-2  border-blue-600",
						gameType === "자랭"
							? "text-blue-600 font-bold border-b-2"
							: "cursor-pointer"
					)}
					onClick={() => {
						setGameType("자랭");
					}}
				>
					자유랭크
				</span>
			</div>
			<div className="divide-x-2 h-[158px] grid grid-cols-3 border-l-[1px] border-r-[1px] border-b-[1px] bg-gray-100">
				<div className="flex flex-col justify-start">
					<span className="text-xs text-gray-500 font-medium p-4">
						{matchData
							? `${matchData.allGameCnt} 전 ${matchData.winGameCnt} 승 ${matchData.loseGameCnt} 패`
							: ""}
					</span>
					<div className="flex flex-row items-center justify-around">
						<div
							className="flex items-center justify-center aspect-square p-4 rounded-full relative w-[90px]"
							style={{
								background: `conic-gradient(#1f8ecd ${
									matchData ? matchData.winRate * 3.6 : 0
								}deg,#ee5a52 ${
									matchData ? matchData.winRate * 3.6 : 0
								}deg ${
									matchData
										? 360 - matchData.winRate * 3.6
										: 360
								}deg`,
							}}
						>
							<span className="text-xs font-bold absolute bg-gray-100 rounded-full aspect-square w-[64px] flex items-center justify-center">
								{matchData ? matchData.winRate : null}%
							</span>
						</div>
						<div className="flex flex-col text-sm items-center">
							<div className="text-xs">
								<span>
									{matchData ? matchData.killRate : null}
								</span>{" "}
								/{" "}
								<span>
									{matchData ? matchData.deathRate : null}
								</span>{" "}
								/{" "}
								<span>
									{matchData ? matchData.assiRate : null}
								</span>
							</div>
							<div>
								<span className="text-green-700">
									{matchData ? matchData.kda : null}
								</span>
								:1(
								<span className="text-red-500">
									{matchData.contributionForKillRate}%
								</span>
								)
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-3 px-3 py-4">
					{matchData.mostChamp
						? matchData.mostChamp.map((value, index) => {
								return (
									<div
										className="flex flex-row text-xs items-start justify-start space-x-3"
										key={index}
									>
										<div>
											<Image
												src={value.imgUrl}
												width={34}
												height={34}
												className="rounded-full"
											/>
										</div>
										<div className="text-gray-700">
											<div className="text-sm">
												{value.name}
											</div>
											<div className="flex flex-row">
												<span className="text-red-500 mr-1">
													{value.winRate}%
												</span>
												<div className="flex flex-row space-x-2">
													<span>
														({value.winCnt}승{" "}
														{value.loseCnt} 패)
													</span>
													<span className="text-yellow-500 font-bold">
														{value.kda} 평점
													</span>
												</div>
											</div>
										</div>
									</div>
								);
						  })
						: null}
				</div>
				<div className="flex flex-col items-start justify-start px-3 py-4 space-y-3 text-xs text-gray-500">
					<div>
						<span>선호 포지션 (랭크)</span>
					</div>
					{matchData.position
						? matchData.position.map((value, index) => {
								return (
									<div
										className="flex flex-row items-start justify-start space-x-3"
										key={index}
									>
										<div>
											<Image
												src={
													value.name === "Top"
														? "https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-top.png"
														: value.name ===
														  "Jungle"
														? "https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-jungle.png"
														: value.name ===
														  "Middle"
														? "https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png"
														: value.name ===
														  "Bottom"
														? "https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-adc.png"
														: value.name ===
														  "Support"
														? "https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-support.png"
														: ""
												}
												width={34}
												height={34}
											/>
										</div>
										<div className="flex flex-col items-start">
											<span className="text-sm">
												{value.name}
											</span>
											<div className="flex flex-row space-x-2">
												<span>{value.playRate}%</span>
												<span>
													승률 {value.winRate}%
												</span>
											</div>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
			{matchData.games
				? matchData.games.map((value, index) => {
						return (
							<div
								className={clsMaker(
									"h-[96px]  border-1px border-[#a1b8cd] mt-3 space-y-[2px] shadow-sm",
									value.needRenew
										? "bg-[#b6b6b6]"
										: value.isWin
										? "bg-[#b0ceea]"
										: "bg-[#d6b5b2]"
								)}
								key={index}
							>
								<div className="text-xs flex flx-row items-center justify-between">
									<div className="flex flex-col items-center space-y-1 text-[#555555] font-[11px] ml-3 w-[70px]">
										<div className="flex flex-col items-center">
											<span className="font-bold">
												{value ? value.gameType : ""}
											</span>
											<span className="tracking-[-0.42px]">
												하루전
											</span>
										</div>
										<div
											className={clsMaker(
												"flex items-center justify-center border-t-[1px] w-[27px]",
												value.needRenew
													? "border-[#94b9d6]"
													: value.isWin
													? "border-[#94b9d6]"
													: "border-[#d0a6a5]"
											)}
										></div>
										<div className="flex flex-col items-center">
											<span
												className={clsMaker(
													"tracking-[-0.42px] font-bold",
													value.needRenew
														? "text-[#000000]"
														: value.isWin
														? "text-[#2c709b]"
														: "text-[#d0021b]"
												)}
											>
												{value.needRenew
													? "다시하기"
													: value.isWin
													? "승리"
													: "패배"}
											</span>
											<span className="tracking-[-0.42px]">
												{Math.floor(
													value.gameLength / 60
												)}
												분
												{value.gameLength % 60 > 0
													? (value.gameLength % 60) +
													  "초"
													: ""}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center">
										<div className="flex flex-row space-x-1">
											<div>
												<Image
													src={
														value.champion.imageUrl
													}
													width={46}
													height={46}
													className="rounded-full"
												/>
											</div>
											<div className="flex flex-col space-y-1">
												{value.spells.map(
													(value, index) => {
														return (
															<Image
																src={
																	value.imageUrl
																}
																width={22}
																height={22}
																key={index}
															/>
														);
													}
												)}
											</div>
											<div className="flex flex-col space-y-1">
												{value.peak.map(
													(value, index) => {
														return (
															<Image
																src={value}
																width={22}
																height={22}
																key={index}
															/>
														);
													}
												)}
											</div>
										</div>
										<div>
											<span className="text-[#555555] tracking-[-0.42px] text-[11px] font-medium">
												{value.champion.imageUrl
													.replace(
														"https://opgg-static.akamaized.net/images/lol/champion/",
														""
													)
													.replace(".png", "")}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center space-y-1 w-[90px]">
										<div className="flex flex-row space-x-1 text-[15px] text-[#555e5e] font-bold tracking-[-0.58px]">
											<span>
												{value.stats.general.kill}
											</span>
											<span className="text-[#948e8d]">
												/
											</span>
											<span className="text-[#d0021b]">
												{value.stats.general.death}
											</span>
											<span className="text-[#948e8d]">
												/
											</span>
											<span>
												{value.stats.general.assist}
											</span>
										</div>
										<div className="flex flex-row space-x-1 text-[11px] text-[#555e5e] tracking-[-0.42px]">
											<span className="font-bold text-[#333333]">
												{value.stats.general.kdaString}
											</span>
											<span>평점</span>
										</div>
										<div className="flex flex-row space-x-1 text-[10px]">
											<div
												className={clsMaker(
													"bg-[#ec4f48] border-[1px] border-[#bf3b36] text-white tracking-[-0.38px] rounded-lg shadow-sm w-[44px] text-center",
													value.stats.general
														.largestMultiKillString ===
														""
														? "hidden"
														: ""
												)}
											>
												{value.stats.general
													.largestMultiKillString ===
												"Double Kill"
													? "더블킬"
													: value.stats.general
															.largestMultiKillString}
											</div>
											<div
												className={clsMaker(
													"bg-[#8c51c5] border-[1px] border-[#7f3590] text-gray-50 rounded-lg shadow-sm w-[31px] text-center",
													value.stats.general
														.opScoreBadge === ""
														? "hidden"
														: ""
												)}
											>
												{
													value.stats.general
														.opScoreBadge
												}
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center space-y-[1px] text-[#333333] w-[100px]">
										<span>레벨 {value.champion.level}</span>
										<span>
											{value.stats.general.cs} (
											{value.stats.general.csPerMin}) CS
										</span>
										<span className="text-[#d0021b]">
											킬관여
											{
												value.stats.general
													.contributionForKillRate
											}
										</span>
										<span>매치 평균</span>
										<span className="font-bold text-gray-700">
											{value.tierRankShort}
										</span>
									</div>

									<div className="relative w-[100px]">
										<div className="flex items-center justify-center">
											<div className="grid grid-cols-3 gap-[2px]">
												{value.items.map(
													(value2, index) => {
														return value.items
															.length -
															1 !==
															index ? (
															<div
																className="bg-slate-400 rounded-md cursor-help aspect-square h-[22px]"
																key={index}
																onMouseOver={(
																	e
																) => {
																	getItemInfo(
																		e,
																		value2.imageUrl
																			.replace(
																				"https://opgg-static.akamaized.net/images/lol/item/",
																				""
																			)
																			.replace(
																				".png",
																				""
																			)
																	);
																}}
																onMouseOut={() => {
																	setItemShow(
																		{
																			over: false,
																		}
																	);
																}}
															>
																<Image
																	src={
																		value2.imageUrl
																	}
																	width={22}
																	height={22}
																	className="rounded-md"
																/>
															</div>
														) : (
															new Array(6 - index)
																.fill(0)
																.map(
																	(
																		value,
																		index
																	) => {
																		return (
																			<div
																				className="bg-slate-400 rounded-md aspect-square h-[22px]"
																				key={
																					index
																				}
																			></div>
																		);
																	}
																)
														);
													}
												)}
											</div>

											<div className="ml-[2px] flex flex-col space-y-[2px]">
												<div
													className="bg-slate-400 rounded-md h-[22px] aspect-square"
													onMouseOver={(e) => {
														getItemInfo(
															e,
															value.items[
																value.items
																	.length - 1
															].imageUrl
																.replace(
																	"https://opgg-static.akamaized.net/images/lol/item/",
																	""
																)
																.replace(
																	".png",
																	""
																)
														);
													}}
													onMouseOut={() => {
														setItemShow({
															over: false,
														});
													}}
												>
													<Image
														src={
															value.items[
																value.items
																	.length - 1
															].imageUrl
														}
														width={22}
														height={22}
														className="rounded-md cursor-help"
													/>
												</div>
												<div className="bg-slate-400 rounded-full h-[22px] aspect-square">
													<Image
														src={
															value.isWin
																? "https://s-lol-web.op.gg/static/images/icon/common/icon-buildblue-p.png?v=1645189214748"
																: "https://s-lol-web.op.gg/static/images/icon/common/icon-buildred-p.png?v=1645189214748"
														}
														width={22}
														height={22}
														className="rounded-full"
													/>
												</div>
											</div>
										</div>

										<div className="flex items-center justify-center space-x-1 text-black tracking-[-0.42px] mt-2">
											<Image
												src={
													value.isWin
														? "https://s-lol-web.op.gg/static/images/icon/common/icon-ward-blue.png?v=1645189214748"
														: "https://s-lol-web.op.gg/static/images/icon/common/icon-ward-red.png?v=1645189214748"
												}
												width={16}
												height={16}
												className="rounded-full"
											/>
											<span>제어 와드</span>
											<span>
												{
													value.stats.ward
														.visionWardsBought
												}
											</span>
										</div>
									</div>
									<TeamContents
										summoner={value.summonerName}
										gameId={value.gameId}
									/>
									<div
										className={clsMaker(
											"h-[96px] w-[30px] flex items-end justify-center border-[1px] pb-2",
											value.needRenew
												? "bg-[#a7a7a7] border-[#999999]"
												: value.isWin
												? "bg-[#7fb0e1] border-[#549dc7]"
												: "bg-[#e89c95] border-[#c8817c]"
										)}
									>
										<Image
											src={
												value.needRenew
													? "https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-grey.png?v=1645189214748"
													: value.isWin
													? "https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-blue.png?v=1645189214748"
													: "https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-red.png?v=1645189214748"
											}
											height={10}
											width={13}
										/>
									</div>
								</div>
							</div>
						);
				  })
				: ""}
			{itemShow.over ? <ItemInfo show={itemShow} /> : ""}
		</div>
	);
};
export default MainContents;
