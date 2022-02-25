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
									<div className="col-span-3 w-full grid grid-cols-10 h-[24px] relative">
										<div
											className={clsMaker(
												"bg-blue-500 rounded-l-md shadow-sm",
												`winRate-${Math.round(
													(value.wins /
														(value.wins +
															value.losses)) *
														10
												)}`
											)}
										></div>
										<div
											className={clsMaker(
												"bg-red-500 rounded-r-md shadow-sm",
												`winRate-${
													10 -
													Math.round(
														(value.wins /
															(value.wins +
																value.losses)) *
															10
													)
												}`
											)}
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
			<style jsx>
				{`
					.winRate-0 {
						grid-column: span 0 / span 0;
					}
					.winRate-1 {
						grid-column: span 1 / span 1;
					}
					.winRate-2 {
						grid-column: span 2 / span 2;
					}
					.winRate-3 {
						grid-column: span 3 / span 3;
					}
					.winRate-4 {
						grid-column: span 4 / span 4;
					}
					.winRate-5 {
						grid-column: span 5 / span 5;
					}
					.winRate-6 {
						grid-column: span 6 / span 6;
					}
					.winRate-7 {
						grid-column: span 7 / span 7;
					}
					.winRate-8 {
						grid-column: span 8 / span 8;
					}
					.winRate-9 {
						grid-column: span 9 / span 9;
					}
					.winRate-10 {
						grid-column: span 10 / span 10;
					}
				`}
			</style>
		</div>
	);
};
export default RecentWinRate;
