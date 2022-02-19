import { NextPage } from "next";

const MidBar: NextPage = () => {
	return (
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
	);
};

export default MidBar;
