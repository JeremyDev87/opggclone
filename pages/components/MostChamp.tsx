import { NextPage } from "next";
import axios from "axios";
import { useState, useEffect } from "react";
import RecentWinRate from "./RecentWinRate";

const MostChamp: NextPage = (props) => {
	const [mostChamp, setMostChamp] = useState([]);
	useEffect(() => {
		getMostData();
	}, [props]);
	async function getMostData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.userID}/mostInfo/`
		);
		setMostChamp(data);
	}
	return (
		<div className="w-full flex flex-col space-y-2">
			<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm">
				<div className="flex flex-row items-center justify-evenly divide-x-[0.5px] divide-gray-400">
					<div className="w-full border-gray-400 bg-gray-100 text-xs text-center py-3 font-normal shadow-sm">
						<span className="text-gray-500 font-bold">
							S2022 전체
						</span>
					</div>
					<div className="w-full border-gray-400 bg-gray-50 text-xs text-center py-3 font-normal shadow-sm">
						<span className="text-gray-500">솔로랭크</span>
					</div>
					<div className="w-full border-gray-400 bg-gray-50 text-xs text-center py-3 font-normal shadow-sm">
						<span className="text-gray-500">자유랭크 5vs5</span>
					</div>
				</div>
				<div className="divide-y-2 ">
					{mostChamp.champions
						? mostChamp.champions.map((value, index) => {
								return (
									<div
										className="flex flex-row items-center justify-around text-xs text-gray-400 py-1 text-[11px]"
										key={index}
									>
										<div>
											<img
												src={value.imageUrl}
												className="w-[45px] rounded-full"
											/>
										</div>
										<div className="flex flex-col items-start justify-start w-[66px]">
											<span className="font-bold text-gray-600 text-[13px]">
												{value.name}
											</span>
											<span>
												CS {value.cs} (
												{Math.round(
													(value.cs / value.games) *
														10
												) / 10}
												)
											</span>
										</div>
										<div className="flex flex-col items-stretch">
											<span
												className={`font-bold text-right text-[13px] ${
													(value.kills +
														value.assists) /
														value.deaths >=
													5
														? "text-[#e19205]"
														: (value.kills +
																value.assists) /
																value.deaths >=
														  4
														? "text-[#1f8ecd]"
														: (value.kills +
																value.assists) /
																value.deaths >=
														  3
														? "text-[#2daf7f]"
														: ""
												}`}
											>
												{(
													(value.kills +
														value.assists) /
													value.deaths
												).toFixed(2)}
												:1 평점
											</span>
											<span className="text-right text-[11px]">
												{(
													value.kills / value.games
												).toFixed(1)}{" "}
												/{" "}
												{(
													value.deaths / value.games
												).toFixed(1)}{" "}
												/{" "}
												{(
													value.assists / value.games
												).toFixed(1)}
											</span>
										</div>
										<div className="flex flex-col items-center">
											<span
												className={`text-[13px] font-bold ${
													value.wins / value.games >=
													0.6
														? "text-[#c6443e]"
														: ""
												}`}
											>
												{Math.round(
													(value.wins / value.games) *
														100
												)}
												%
											</span>
											<span>{value.games} 게임</span>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
			{mostChamp.recentWinRate ? (
				<RecentWinRate data={mostChamp.recentWinRate} />
			) : null}
		</div>
	);
};
export default MostChamp;
