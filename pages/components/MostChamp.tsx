import { NextPage } from "next";
import axios from "axios";
import { useState, useEffect } from "react";

const MostChamp: NextPage = (props) => {
	const [summonerName, setSummonerName] = useState(props);
	useEffect(() => {
		console.log(summonerName);

		(async () => {
			const { data } = await axios.get(`/api/mostInfo/${summonerName}`);
		})();
	}, []);
	return (
		<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12">
			<div className="flex flex-row items-center justify-evenly divide-x-[0.5px] divide-gray-400">
				<div className="w-full border-gray-400 bg-gray-100 text-xs text-center py-3 font-normal shadow-sm">
					<span className="text-gray-500 font-bold">S2022 전체</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
						<span className="font-bold text-gray-600">빅토르</span>
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
	);
};
export default MostChamp;
