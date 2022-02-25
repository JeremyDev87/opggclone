import { NextPage } from "next";

const MostChampList: NextPage = (props) => {
	return (
		<div className="divide-y-2 ">
			{props.data
				? props.data
						.sort((a, b) => {
							return b.games - a.games;
						})
						.map((value, index) => {
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
										<span className="font-bold text-gray-600 text-[13px] w-[100px]">
											{value.name}
										</span>
										<span>
											CS {value.cs} (
											{Math.round(
												(value.cs / value.games) * 10
											) / 10}
											)
										</span>
									</div>
									<div className="flex flex-col items-stretch">
										<span
											className={`font-bold text-center text-[13px] w-[100px] ${
												(value.kills + value.assists) /
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
												(value.kills + value.assists) /
												value.deaths
											).toFixed(2)}
											:1 평점
										</span>
										<span className="text-center text-[11px]">
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
												value.wins / value.games >= 0.6
													? "text-[#c6443e]"
													: ""
											}`}
										>
											{Math.round(
												(value.wins / value.games) * 100
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
	);
};

export default MostChampList;
