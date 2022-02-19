import { NextPage } from "next";

const LeftBar: NextPage = () => {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center w-[300px]">
			<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12 h-[124px] flex flex-row items-center justify-start">
				<div className="px-3 w-2/5 flex justify-center">
					<img
						src="https://opgg-static.akamaized.net/images/medals/challenger_1.png?image=q_auto&image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
						className="w-[104px]"
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-xs text-gray-400">솔로랭크</span>
					<span className="text-blue-500 font-bold text-base">
						Challenger
					</span>
					<div>
						<span className="font-bold text-gray-700 text-xs">
							611 LP
						</span>
						<span className="text-xs text-gray-400 ml-1">
							/ 115승 97 패
						</span>
					</div>
					<span className="text-xs text-gray-400">승률 54%</span>
					<span className="text-xs text-gray-400">
						렝가의 배짱꾼들
					</span>
				</div>
			</div>
			<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12 h-[124px] flex flex-row items-center justify-start">
				<div className="px-3 w-2/5 flex justify-center">
					<img
						src="https://opgg-static.akamaized.net/images/medals/default.png?image=q_auto&image=q_auto,f_auto,w_auto&v=1644981085621&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
						className="w-[64px]"
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-xs text-gray-400">자유랭크</span>
					<span className="text-gray-400 font-bold text-base">
						Unranked
					</span>
				</div>
			</div>
			<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12">
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
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
					<div className="flex flex-row items-center justify-around text-xs text-gray-400 py-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[45px] rounded-full"
							/>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-gray-600">
								빅토르
							</span>
							<span>CS 224.8 (8.7)</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold text-green-600">
								3.04:1 평점
							</span>
							<span>4.8 / 3.6 / 6.0</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-red-600">64%</span>
							<span>25 게임</span>
						</div>
					</div>
				</div>
			</div>
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
