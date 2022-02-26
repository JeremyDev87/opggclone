import { NextPage } from "next";
import MostChamp from "./components/MostChamp";
import { useEffect, useState } from "react";
import Image from "next/image";

const LeftBar: NextPage = (props) => {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center w-[298px] mr-3">
			{props.summoner.leagues
				? props.summoner.leagues.map((value) => {
						return (
							<div
								className="bg-[#f2f2f2] border-[1px] border-[#cdd2d2] shadow-sm h-[124px] w-[298px] flex flex-row items-center justify-start"
								key={value.tierRank.name}
							>
								<div className="px-3 w-2/5 flex justify-center">
									<Image
										src={
											props.summoner.leagues
												? value.tierRank.imageUrl
												: ""
										}
										width={104}
										height={104}
									/>
								</div>
								<div className="flex flex-col">
									<span className="text-[11px] text-[#879292]">
										솔로랭크
									</span>
									<span className="text-[#1f8ecd] font-bold text-[15px">
										{props.summoner.leagues
											? value.tierRank.tier
											: ""}
									</span>
									<div>
										<span className="font-bold text-[#555e5e] text-[12px]">
											{props.summoner.leagues
												? value.tierRank.lp
												: "0"}{" "}
											LP
										</span>
										<span className="text-[12px] text-[#879292] ml-1">
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
									<span className="text-[12px] text-[#879292]">
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
