import type { NextPage } from "next";

const TopBar: NextPage = () => {
	return (
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
	);
};

export default TopBar;
