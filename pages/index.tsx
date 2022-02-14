import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<div className="bg-[#1ea1f7] h-[97px]">
				<div className="flex items-center justify-end bg-transparent relative pt-10 pr-16">
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
						<div className="flex space-x-2 items-center">
							<div className="text-xl font-medium">나이수TV</div>
							<div className="text-sm border-2 rounded-md p-1">
								☆ 즐겨찾기
							</div>
						</div>
						<div className="flex items-center space-x-2">
							<div className="py-2 px-5 bg-blue-500 text-center rounded-md shadow-sm text-gray-100">
								전적 갱신
							</div>
							<div className="py-2 px-5 bg-purple-500 text-center rounded-md shadow-sm text-gray-100">
								롤 몇시간 했는지 궁금해?
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 border-t-2">
				<div className="mx-[200px]">컨테이너</div>
			</div>
		</div>
	);
};

export default Home;
