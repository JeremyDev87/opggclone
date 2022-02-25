import { NextPage } from "next";

const MidBar: NextPage = (props) => {
	let summonerInfo = {
		preTier: props.summoner.previousTiers ?? [],
		profileBorder: props.summoner.profileBorderImageUrl ?? "",
		profileUrl: props.summoner.profileImageUrl ?? "",
		lvl: props.summoner.level ?? "0",
		name: props.summoner.name ?? "",
		rank: props.summoner.ladderRank ? props.summoner.ladderRank.rank : "0",
		rankPer: props.summoner.ladderRank
			? props.summoner.ladderRank.rankPercentOfTop
			: "0",
	};

	return (
		<div className="mx-[200px] mt-5">
			<div className="flex items-start space-x-2">
				{summonerInfo.preTier.map((value) => {
					return (
						<div
							className="bg-slate-200 rounded-md shadow-sm text-xs p-1"
							key={value.season}
						>
							<span className="font-medium mr-1">
								S{value.season}
							</span>
							{value.tier}
						</div>
					);
				})}
			</div>
			<div className="mt-5 flex items-center justify-start">
				<div className="aspect-square w-[120px] relative">
					<img
						src={summonerInfo.profileBorder}
						className="absolute aspect-square w-[120px] z-10"
					/>
					<img
						src={summonerInfo.profileUrl}
						className="aspect-square w-[100px] mx-auto translate-y-3"
					/>
					<div className="absolute w-[120px] z-20 relative flex items-center justify-center">
						<img
							src="https://s-lol-web.op.gg/static/images/site/summoner/bg-levelbox.png"
							className=""
						/>
						<span className="absolute z-30 bg-transparent text-yellow-300 text-base p-1">
							{props.summoner.level}
						</span>
					</div>
				</div>
				<div className="ml-5 flex flex-col justify-between h-[120px]">
					<div>
						<div className="flex space-x-3 items-center">
							<div className="text-xl font-bold">
								{props.summoner.name}
							</div>
						</div>
						<div className="w-[146px]">
							<span className="text-[11px] text-[#657070] tracking-[-0.42px]">
								래더 랭킹
								<span className="font-bold">
									{summonerInfo.rank}
								</span>
								위 (상위 {summonerInfo.rankPer}
								%)
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MidBar;
