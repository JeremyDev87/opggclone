import { NextPage } from "next";
import MostChamp from "./MostChamp";
import { useEffect, useState } from "react";

const LeftBar: NextPage = (props) => {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center w-[298px] mr-3">
			{props.summoner.leagues
				? props.summoner.leagues.map((value) => {
						return (
							<div
								className="bg-gray-100 border-[1px] border-gray-300 shadow-sm h-[124px] w-[298px] flex flex-row items-center justify-start"
								key={value.tierRank.name}
							>
								<div className="px-3 w-2/5 flex justify-center">
									<img
										src={
											props.summoner.leagues
												? value.tierRank.imageUrl
												: ""
										}
										className="w-[104px]"
									/>
								</div>
								<div className="flex flex-col">
									<span className="text-xs text-gray-400">
										솔로랭크
									</span>
									<span className="text-blue-500 font-bold text-base">
										{props.summoner.leagues
											? value.tierRank.tier
											: ""}
									</span>
									<div>
										<span className="font-bold text-gray-700 text-xs">
											{props.summoner.leagues
												? value.tierRank.lp
												: "0"}{" "}
											LP
										</span>
										<span className="text-xs text-gray-400 ml-1">
											/{" "}
											{props.summoner.leagues
												? value.wins
												: ""}
											승{" "}
											{props.summoner.leagues
												? value.losses
												: ""}{" "}
											패
										</span>
									</div>
									<span className="text-xs text-gray-400">
										승률{" "}
										{props.summoner.leagues
											? Math.round(
													(value.wins /
														(props.summoner
															.leagues[0].wins +
															props.summoner
																.leagues[0]
																.losses)) *
														100
											  )
											: 0}
										%
									</span>
									<span className="text-xs text-gray-400">
										{/* 렝가의 배짱꾼들 */}
									</span>
								</div>
							</div>
						);
				  })
				: ""}
			{props.summoner.name ? (
				<MostChamp userID={props.summoner.name} />
			) : null}
		</div>
	);
};

export default LeftBar;
