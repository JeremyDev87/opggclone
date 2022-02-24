import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { clsMaker } from "../../libs/utils";

const TeamContents: NextPage = (props) => {
	const [teamData, setTeamData] = useState([]);
	async function getTeamData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.summoner}/matchDetail/${props.gameId}`
		);
		console.log(props.summoner);
		setTeamData(data);
	}

	useEffect(() => {
		getTeamData();
	}, [props.summoner, props.gameId]);
	return (
		<div className="flex space-x-2">
			<div className="flex flex-col space-y-[1px] justify-center text-gray-500 text-[11px] tracking-[-0.42px]">
				{teamData.teams
					? teamData.teams[0].players.map((value, index) => {
							return (
								<div className="flex space-x-1" key={index}>
									<img
										src={value.champion.imageUrl}
										className={clsMaker(
											"aspect-square h-[16px]",
											props.summoner ===
												value.summonerName
												? "rounded-full"
												: ""
										)}
									/>
									<span className="truncate max-w-[52px]">
										{value.summonerName}
									</span>
								</div>
							);
					  })
					: ""}
			</div>
			<div className="flex flex-col space-y-[1px] justify-center text-gray-500 text-[11px] tracking-[-0.42px]">
				{teamData.teams
					? teamData.teams[1].players.map((value, index) => {
							return (
								<div className="flex space-x-1" key={index}>
									<img
										src={value.champion.imageUrl}
										className={clsMaker(
											"aspect-square h-[16px]",
											props.summoner ===
												value.summonerName
												? "rounded-full"
												: ""
										)}
									/>
									<span className="truncate max-w-[52px]">
										{value.summonerName}
									</span>
								</div>
							);
					  })
					: "asdf"}
			</div>
		</div>
	);
};

export default TeamContents;
