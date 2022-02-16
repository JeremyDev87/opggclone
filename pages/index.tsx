import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<div className="bg-[#1ea1f7] h-[97px]">
				<div className="w-full pt-3 pl-3">
					<img
						src="https://s-lol-web.op.gg/images/icon/opgglogo.svg"
						className="w-20"
					/>
				</div>
				<div className="flex items-center justify-end bg-transparent relative pt-3 pr-20">
					<input className="p-1.5 rounded-md shadow-sm" />
					<img
						src="https://s-lol-web.op.gg/images/icon/icon-gg.svg"
						className="w-6 absolute mr-2 cursor-pointer"
					/>
				</div>
			</div>
			<div className="mx-[200px] mt-5">
				<div className="flex items-start space-x-2">
					<div className="bg-slate-200 rounded-md shadow-sm text-xs p-1">
						<span className="font-medium mr-1">S3</span>Sliver
					</div>
					<div className="bg-slate-200 rounded-md shadow-sm text-xs p-1">
						<span className="font-medium mr-1">S4</span>Sliver
					</div>
					<div className="bg-slate-200 rounded-md shadow-sm text-xs p-1">
						<span className="font-medium mr-1">S5</span>Sliver
					</div>
					<div className="bg-slate-200 rounded-md shadow-sm text-xs p-1">
						<span className="font-medium mr-1">S6</span>Sliver
					</div>
				</div>
				<div className="mt-5 flex items-center justify-start">
					<div className="aspect-square bg-slate-400 w-[120px]"></div>
					<div className="ml-5 flex flex-col justify-between h-[120px]">
						<div className="flex space-x-3 items-center">
							<div className="text-xl font-bold">나이수TV</div>
							<div className="border-2 rounded-md p-1 font-light flex justify-between items-center space-x-1">
								<svg
									className="w-3 h-3 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									></path>
								</svg>
								<span className="text-[10px] text-gray-500">
									즐겨찾기
								</span>
							</div>
						</div>
						<div className="flex items-center space-x-2 text-sm font-medium">
							<div className="py-2 px-5 bg-blue-500 text-center text-gray-100">
								<span>전적 갱신</span>
							</div>
							<div className="py-2 px-5 bg-purple-500 text-center text-gray-100">
								<span>롤 몇시간 했는지 궁금해?</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 border-t-2">
				<div className="mx-[200px] grid grid-cols-3 mt-5">
					<div className="flex flex-col space-y-2 justify-center items-center">
						<div className="bg-gray-100 border-[1px] border-gray-300 shadow-sm w-11/12 h-[124px] flex flex-row items-center justify-start">
							<div className="px-3 w-2/5 flex justify-center">
								<img
									src="https://opgg-static.akamaized.net/images/medals/challenger_1.png?image=q_auto&image=q_auto,f_auto,w_auto&v=1644981085437&name=Chrome&version=98.0.4758.80&major=98&name=MacOS&version=10.15.7"
									className="w-[104px]"
								/>
							</div>
							<div className="flex flex-col">
								<span className="text-xs text-gray-400">
									솔로랭크
								</span>
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
								<span className="text-xs text-gray-400">
									승률 54%
								</span>
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
								<span className="text-xs text-gray-400">
									자유랭크
								</span>
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
									<span className="text-gray-500">
										솔로랭크
									</span>
								</div>
								<div className="w-full border-gray-400 bg-gray-50 text-xs text-center py-3 font-normal shadow-sm">
									<span className="text-gray-500">
										자유랭크 5vs5
									</span>
								</div>
							</div>
							<div className="divide-y-2">
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
										<span>25 게임</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
										<span>25 게임</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
										<span>25 게임</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
										<span>25 게임</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
										<span>25 게임</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-around text-xs text-gray-400">
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
										<span className="text-red-600">
											64%
										</span>
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
									<span className="font-bold text-left">
										리 신
									</span>
									<div className="text-gray-500 text-center">
										38%
									</div>
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
									<span className="font-bold text-left">
										리 신
									</span>
									<div className="text-gray-500 text-center">
										38%
									</div>
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
									<span className="font-bold text-left">
										리 신
									</span>
									<div className="text-gray-500 text-center">
										38%
									</div>
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
					<div className="bg-blue-300 col-span-2">오른쪽메뉴</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
