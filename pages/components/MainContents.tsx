import { NextPage } from "next";
import { useEffect, useState } from "react";
import DetailContents from "./DetailContents";
import axios from "axios";
import { clsMaker } from "../../libs/utils";

const MainContents: NextPage = (props) => {
	const [matchData, setMatchData] = useState([]);

	async function getMatchData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.summoner.name}/matches/`
		);
		setMatchData(data);
		console.log(data);
	}

	useEffect(() => {
		getMatchData();
	}, [props.summoner]);
	return (
		<div className="shadow-sm w-[690px]">
			<div className="flex flex-row items-center justify-start border-[1px] shadow-sm text-[12px] pl-2 space-x-1">
				<span className="px-3 py-2 text-blue-600 font-bold border-b-2 border-blue-600">
					전체
				</span>
				<span className="px-3 py-2">솔로랭크</span>
				<span className="px-3 py-2">자유랭크</span>
			</div>
			<div className="divide-x-2 h-[158px] grid grid-cols-3 border-l-[1px] border-r-[1px] border-b-[1px] bg-gray-100">
				<div className="flex flex-col justify-start">
					<span className="text-xs text-gray-500 font-medium p-4">
						{matchData.summary
							? matchData.summary.wins +
							  matchData.summary.losses +
							  " 전 " +
							  matchData.summary.wins +
							  " 승 " +
							  matchData.summary.losses +
							  " 패"
							: null}
					</span>
					<div className="flex flex-row items-center justify-around">
						<div
							className={clsMaker(
								"border border-[15px] border-blue-400 aspect-square p-4 rounded-full ",
								matchData.summary
									? (matchData.summary.wins /
											(matchData.summary.wins +
												matchData.summary.losses)) *
											100 >=
									  25
										? "border-r-red-400"
										: (matchData.summary.wins /
												(matchData.summary.wins +
													matchData.summary.losses)) *
												100 >=
										  50
										? "border-r-red-400 border-b-red-400"
										: (matchData.summary.wins /
												(matchData.summary.wins +
													matchData.summary.losses)) *
												100 >=
										  75
										? "border-r-red-400 border-b-red-400 border-l-red-400"
										: ""
									: null
							)}
						>
							<span className="text-xs font-bold">
								{matchData.summary
									? Math.round(
											(matchData.summary.wins /
												(matchData.summary.wins +
													matchData.summary.losses)) *
												100
									  )
									: null}
								%
							</span>
						</div>
						<div className="flex flex-col text-sm items-center">
							<div className="text-xs">
								<span>
									{matchData.summary
										? (
												matchData.summary.kills /
												(matchData.summary.wins +
													matchData.summary.losses)
										  ).toFixed(1)
										: null}
								</span>{" "}
								/{" "}
								<span>
									{matchData.summary
										? (
												matchData.summary.deaths /
												(matchData.summary.wins +
													matchData.summary.losses)
										  ).toFixed(1)
										: null}
								</span>{" "}
								/{" "}
								<span>
									{matchData.summary
										? (
												matchData.summary.assists /
												(matchData.summary.wins +
													matchData.summary.losses)
										  ).toFixed(1)
										: null}
								</span>
							</div>
							<div>
								<span className="text-green-700">
									{matchData.summary
										? (
												(matchData.summary.kills +
													matchData.summary.assists) /
												matchData.summary.deaths
										  ).toFixed(2)
										: null}
								</span>
								:1(
								<span className="text-red-500">50%</span>)
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-3 px-3 py-4">
					{matchData.champions
						? matchData.champions.map((value) => {
								return (
									<div
										className="flex flex-row text-xs items-start justify-center space-x-3"
										key={value.id}
									>
										<div>
											<img
												src={value.imageUrl}
												className="w-[34px] aspect-square rounded-full"
											/>
										</div>
										<div className="text-gray-700">
											<div className="text-sm">
												{value.name}
											</div>
											<div className="flex flex-row">
												<span className="text-red-500 mr-1">
													{Math.round(
														(value.wins /
															value.games) *
															100
													)}
													%
												</span>
												<div className="flex flex-row space-x-2">
													<span>
														({value.wins}승{" "}
														{value.losses} 패)
													</span>
													<span className="text-yellow-500 font-bold">
														{(
															(value.kills +
																value.assists) /
															value.deaths
														).toFixed(2)}{" "}
														평점
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
					{matchData.positions
						? matchData.positions.map((value, index) => {
								return (
									<div
										className="flex flex-row items-center justify-start space-x-3"
										key={index}
									>
										<div>
											<img src="https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png" />
										</div>
										<div className="flex flex-col items-start">
											<span className="text-sm">
												{value.positionName}
											</span>
											<div className="flex flex-row space-x-2">
												<span>
													{Math.round(
														(value.games / 20) * 100
													)}
													%
												</span>
												<span>
													승률{" "}
													{Math.round(
														(value.wins /
															(value.wins +
																value.losses)) *
															100
													)}
													%
												</span>
											</div>
										</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
			<DetailContents />
		</div>
	);
};
export default MainContents;
