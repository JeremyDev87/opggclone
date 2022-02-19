import { NextPage } from "next";
import DetailContents from "./DetailContents";

const MainContents: NextPage = () => {
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
						20전 13승 7 패
					</span>
					<div className="flex flex-row items-center justify-around">
						<div className="border border-[15px] border-blue-400 border-r-red-400 aspect-square p-4 rounded-full ">
							<span className="text-xs font-bold">65%</span>
						</div>
						<div className="flex flex-col">
							<span>5.7 / 3.4 / 7.2</span>
							<span>3.79:1(50%)</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-3 px-3 py-4">
					<div className="flex flex-row text-xs items-start justify-center space-x-3">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_auto,w_auto&v=1645010759508&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[34px] aspect-square rounded-full"
							/>
						</div>
						<div className="text-gray-700">
							<div className="text-sm">아리</div>
							<div className="flex flex-row">
								<span className="text-red-500 mr-1">100%</span>
								<div className="flex flex-row space-x-2">
									<span>(4승 0 패)</span>
									<span className="text-yellow-500 font-bold">
										5.08 평점
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row text-xs items-start justify-center space-x-3">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_auto,w_auto&v=1645010759508&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[34px] aspect-square rounded-full"
							/>
						</div>
						<div className="text-gray-700">
							<div className="text-sm">아리</div>
							<div className="flex flex-row">
								<span className="text-red-500 mr-1">100%</span>
								<div className="flex flex-row space-x-2">
									<span>(4승 0 패)</span>
									<span className="text-yellow-500 font-bold">
										5.08 평점
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row text-xs items-start justify-center space-x-3">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_auto,w_auto&v=1645010759508&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
								className="w-[34px] aspect-square rounded-full"
							/>
						</div>
						<div className="text-gray-700">
							<div className="text-sm">아리</div>
							<div className="flex flex-row">
								<span className="text-red-500 mr-1">100%</span>
								<div className="flex flex-row space-x-2">
									<span>(4승 0 패)</span>
									<span className="text-yellow-500 font-bold">
										5.08 평점
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start px-3 py-4 space-y-3 text-xs text-gray-500">
					<div>
						<span>선호 포지션 (랭크)</span>
					</div>
					<div className="flex flex-row items-center justify-start space-x-3">
						<div>
							<img src="https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png" />
						</div>
						<div className="flex flex-col items-start">
							<span className="text-sm">미드</span>
							<div className="flex flex-row space-x-2">
								<span>70%</span>
								<span>승률 71%</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center justify-start space-x-3">
						<div>
							<img src="https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png" />
						</div>
						<div className="flex flex-col items-start">
							<span className="text-sm">미드</span>
							<div className="flex flex-row space-x-2">
								<span>70%</span>
								<span>승률 71%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DetailContents />
		</div>
	);
};
export default MainContents;
