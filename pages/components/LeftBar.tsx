import { NextPage } from "next";
import MostChamp from "./MostChamp";

const LeftBar: NextPage = (props) => {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center w-[300px]">
			{props.summoner.leagues
				? props.summoner.leagues.map((value) => {
						return (
							<div
								className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12 h-[124px] flex flex-row items-center justify-start"
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
			<MostChamp props={props.summoner.name} />
			<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12 text-xs">
				<div className="w-full bg-white py-2">
					<span className="ml-3 font-bold text-gray-500">
						최근 7일간 랭크 승률
					</span>
				</div>
				<div className="divide-y-2 pr-2">
					<div className="grid grid-cols-6 items-center py-1">
						<img
							src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=q_auto,f_auto,w_auto&v=1644981085621&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
							className="w-[32px] rounded-full mx-auto"
						/>
						<span className="font-bold text-left">리 신</span>
						<div className="text-gray-500 text-center">38%</div>
						<div className="col-span-3 w-full grid grid-cols-10 text-gray-50">
							<div className="bg-blue-500 col-span-4 rounded-l-sm shadow-sm text-left p-1">
								3승
							</div>
							<div className="bg-red-500 col-span-6 rounded-r-sm shadow-sm text-right p-1">
								5패
							</div>
						</div>
					</div>
					<div className="grid grid-cols-6 items-center py-1">
						<img
							src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=q_auto,f_auto,w_auto&v=1644981085621&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
							className="w-[32px] rounded-full mx-auto"
						/>
						<span className="font-bold text-left">리 신</span>
						<div className="text-gray-500 text-center">38%</div>
						<div className="col-span-3 w-full grid grid-cols-10 text-gray-50">
							<div className="bg-blue-500 col-span-4 rounded-l-sm shadow-sm text-left p-1">
								3승
							</div>
							<div className="bg-red-500 col-span-6 rounded-r-sm shadow-sm text-right p-1">
								5패
							</div>
						</div>
					</div>
					<div className="grid grid-cols-6 items-center py-1">
						<img
							src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=q_auto,f_auto,w_auto&v=1644981085621&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
							className="w-[32px] rounded-full mx-auto"
						/>
						<span className="font-bold text-left">리 신</span>
						<div className="text-gray-500 text-center">38%</div>
						<div className="col-span-3 w-full grid grid-cols-10 text-gray-50">
							<div className="bg-blue-500 col-span-4 rounded-l-sm shadow-sm text-left p-1">
								3승
							</div>
							<div className="bg-red-500 col-span-6 rounded-r-sm shadow-sm text-right p-1">
								5패
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
