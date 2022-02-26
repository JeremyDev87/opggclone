import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clsMaker } from "../../libs/utils";

const TeamContents: NextPage = (props) => {
	const [teamData, setTeamData] = useState([]);
	async function getTeamData() {
		const { data } = await axios.get(
			`https://codingtest.op.gg/api/summoner/${props.summoner}/matchDetail/${props.gameId}`
		);
		setTeamData(data);
	}

	useEffect(() => {
		getTeamData();
	}, [props.summoner, props.gameId]);
	return (
		<div className="flex space-x-2 w-[150px]">
			<div className="flex flex-col space-y-[1px] justify-center text-gray-500 text-[11px] tracking-[-0.42px]">
				{teamData.teams
					? teamData.teams[0].players.map((value, index) => {
							return (
								<div className="flex space-x-1" key={index}>
									<Image
										src={value.champion.imageUrl}
										width={16}
										height={16}
										className={clsMaker(
											"",
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
									<Image
										src={value.champion.imageUrl}
										width={16}
										height={16}
										className={clsMaker(
											"",
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
		</div>
	);
};

export default TeamContents;
