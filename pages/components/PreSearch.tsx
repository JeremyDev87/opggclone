import { NextPage } from "next";
import { useEffect, useState } from "react";
import { clsMaker } from "../../libs/utils";

const SearchHistory: NextPage = (props) => {
	const [preID, setpreID] = useState([]);
	useEffect(() => {
		setpreID(props.preID);
	});
	return (
		<div
			className={clsMaker(
				"bg-gray-50 border-[1px]  border-gray-500 w-[260px] mt-1 p-2 rounded-sm shadow-sm flex items-center space-x-3",
				!preID ? "hidden" : ""
			)}
		>
			<img
				src={preID ? preID.profileImageUrl : ""}
				className="aspect-square w-[36px] rounded-full"
			/>
			<div className="flex flex-col text-sm text-gray-500">
				<span className="text-gray-700 font-medium">
					{preID ? preID.name : null}
				</span>
				<span>
					{preID
						? preID.leagues
							? preID.leagues[0].tierRank.tier +
							  "·" +
							  preID.leagues[0].tierRank.lp +
							  "LP"
							: null
						: null}
				</span>
			</div>
		</div>
	);
};
export default SearchHistory;
