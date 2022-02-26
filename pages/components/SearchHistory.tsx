import { NextPage } from "next";
import { useEffect, useState } from "react";

const PreSearch: NextPage = (props) => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		let getHistory = JSON.parse(localStorage.getItem("searchHistory"));
		setSearchHistory(getHistory);
	}, [props.preID]);
	return (
		<div className="bg-gray-50 border-[1px]  border-gray-500 w-[260px] mt-1 rounded-sm shadow-sm flex flex-col items-center">
			<div className="flex items-center justify-around text-sm w-full border-b-2">
				<div className="w-1/2 py-2 text-center text-gray-500">
					최근검색
				</div>
				<div className="w-1/2 bg-gray-300 py-2 text-center text-gray-400">
					즐겨찾기
				</div>
			</div>
			{searchHistory
				? searchHistory.map((value, index) => {
						return (
							<div
								className="w-full flex items-center justify-between text-xs px-5 py-2 text-gray-500"
								key={index}
								onClick={() => {
									props.reUse(value ? value : null);
								}}
							>
								<div className="font-medium cursor-pointer">
									{value}
								</div>
								<div className="flex justify-end items-center space-x-2">
									<span>☆</span>
									<span>X</span>
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};
export default PreSearch;
