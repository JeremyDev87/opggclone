import { NextPage } from "next";
import { useState } from "react";
import { clsMaker } from "../../libs/utils";

const RecentWinRate: NextPage = (props) => {
	return (
		<div className="bg-[#ededed] border-[1px] border-[#cdd2d2] shadow-sm text-xs w-full">
			<div className="divide-y-2 pr-2">
				{props.data
					? props.data.map((value, index) => {
							return (
								<div
									className="grid grid-cols-6 items-center py-1"
									key={index}
								>
									<img
										src={value.imageUrl}
										className="w-[32px] rounded-full mx-auto"
									/>
									<span className="font-bold text-left truncate">
										{value.name}
									</span>
									<div className="text-gray-500 text-center">
										{Math.round(
											(value.wins /
												(value.wins + value.losses)) *
												100
										)}
										%
									</div>
									<div className="col-span-3 w-full h-[24px] relative">
										<div
											className="bg-[#1f8ecd] rounded-l-md shadow-sm absolute h-[20px] left-0"
											style={{
												width: `${Math.round(
													(value.wins * 100) /
														(value.wins +
															value.losses)
												)}%`,
											}}
										></div>
										<div
											className="bg-[#ee5a52] rounded-r-md shadow-sm absolute h-[20px] right-0"
											style={{
												width: `${
													100 -
													Math.round(
														(value.wins * 100) /
															(value.wins +
																value.losses)
													)
												}%`,
											}}
										></div>
										<div className="absolute w-full h-full flex items-center justify-between px-1 text-gray-50">
											<span>{value.wins}승</span>
											<span>{value.losses}패</span>
										</div>
									</div>
								</div>
							);
					  })
					: null}
			</div>
		</div>
	);
};
export default RecentWinRate;
