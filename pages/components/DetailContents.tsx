import { NextPage } from "next";

const DetailContents: NextPage = () => {
	return (
		<div className="h-[96px] bg-[#b0ceea] border-1px border-[#a1b8cd] mt-4 shadow-sm">
			<div className="text-xs flex flx-row items-center justify-between">
				<div className="flex flex-col space-y-1 text-gray-500 ml-3">
					<div className="flex flex-col items-center">
						<span className="font-medium">솔랭</span>
						<span>2일 전</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="border-t-[1px] border-gray-400 pt-1 text-blue-500">
							승리
						</span>
						<span>16분 6초</span>
					</div>
				</div>
				<div className="flex flex-col space-y-2 items-center justify-center">
					<div className="flex flex-row space-x-1">
						<div>
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Caitlyn.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="rounded-full aspect-square h-[46px]"
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px]"
							/>
							<img
								src="https://opgg-static.akamaized.net/images/lol/spell/SummonerHeal.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px]"
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px]"
							/>
							<img
								src="https://opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px]"
							/>
						</div>
					</div>
					<div>
						<span className="text-gray-500">케이틀린</span>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-1">
					<div className="flex flex-row space-x-1 text-base text-gray-500 font-bold">
						<span>16</span>
						<span>/</span>
						<span className="text-red-700">3</span>
						<span>/</span>
						<span>8</span>
					</div>
					<div className="flex flex-row space-x-1 text-gray-500">
						<span className="font-bold text-gray-700">8.00:1</span>{" "}
						<span>평점</span>
					</div>
					<div className="flex flex-row space-x-1 text-[10px]">
						<div className="bg-red-500 text-gray-50 rounded-lg shadow-sm px-2">
							트리플킬
						</div>
						<div className="bg-orange-500 text-gray-50 rounded-lg shadow-sm px-2">
							MVP
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-[1px] text-gray-500">
					<span>레벨 9</span>
					<span>145 (9) CS</span>
					<span className="text-red-500">킬관여 50%</span>
					<span>매치 평균</span>
					<span className="font-bold text-gray-700">Grandmaster</span>
				</div>
				<div>
					<div className="grid grid-cols-4 gap-[2px]">
						<div className="bg-slate-400 rounded-md">
							<img
								src="https://opgg-static.akamaized.net/images/lol/item/3006.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px] rounded-md"
							/>
						</div>
						<div className="bg-slate-400 rounded-md">
							<img
								src="https://opgg-static.akamaized.net/images/lol/item/6671.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px] rounded-md"
							/>
						</div>
						<div className="bg-slate-400 rounded-md">
							<img
								src="https://opgg-static.akamaized.net/images/lol/item/3086.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px] rounded-md"
							/>
						</div>
						<div className="bg-slate-400 rounded-md">
							<img
								src="https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px] rounded-md"
							/>
						</div>
						<div className="bg-slate-400 rounded-md">
							<img
								src="https://opgg-static.akamaized.net/images/lol/item/1042.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[22px] rounded-md"
							/>
						</div>
						<div className="bg-slate-400 rounded-md"></div>
						<div className="bg-slate-400 rounded-md"></div>
						<div className="bg-slate-400 rounded-full">
							<img
								src="https://s-lol-web.op.gg/static/images/icon/common/icon-buildblue-p.png?v=1645189214748"
								className="aspect-square h-[22px] rounded-full"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center space-x-1 text-gray-700">
						<img
							src="https://s-lol-web.op.gg/static/images/icon/common/icon-ward-blue.png?v=1645189214748"
							className="aspect-square rounded-full h-[16px]"
						/>
						<span>제어 와드</span>
						<span>2</span>
					</div>
				</div>
				<div className="flex space-x-2">
					<div className="flex flex-col space-y-[1px] justify-center text-gray-500 text-[11px] tracking-[-0.42px]">
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Gnar.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								GEN Doran
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Karthus.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								GEN Peanut
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Akshan.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								GEN Chovy
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Caitlyn.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								GEN Ruler
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Lux.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								GEN Lehends
							</span>
						</div>
					</div>
					<div className="flex flex-col space-y-[1px] justify-center text-gray-500 text-[11px] tracking-[-0.42px]">
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Gnar.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								DRX Kingen
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Karthus.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								DRX Pyosik
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Akshan.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								DRX Xeka
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Caitlyn.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								DRX Deft
							</span>
						</div>
						<div className="flex space-x-1">
							<img
								src="https://opgg-static.akamaized.net/images/lol/champion/Lux.png?image=q_auto,f_webp,w_auto&v=1645189214748"
								className="aspect-square h-[16px]"
							/>
							<span className="truncate max-w-[52px]">
								DRX Beryl
							</span>
						</div>
					</div>
				</div>
				<div className="bg-[#7fb0e1] h-[96px] w-[30px] flex items-end justify-center border-[1px] border-[#549dc7]">
					<img
						src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-blue.png?v=1645189214748"
						className="p-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default DetailContents;
