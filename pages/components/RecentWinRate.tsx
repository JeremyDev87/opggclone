import { NextPage } from "next";
import Image from "next/image";
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
									className="grid grid-cols-6 items-center py-1 h-[48px]"
									key={index}
								>
									<div className="ml-2">
										<Image
											src={
												value.imageUrl.includes(
													"https://"
												)
													? value.imageUrl
													: "https:" + value.imageUrl
											}
											width={32}
											height={32}
											className="rounded-full"
										/>
									</div>
									<span className="font-bold text-left truncate text-[#5e5e5e] text-[13px]">
										{value.name}
									</span>
									<div className="text-[#879292] text-[13px] text-center">
										{Math.round(
											(value.wins /
												(value.wins + value.losses)) *
												100
										)}
										%
									</div>
									<div className="col-span-3 w-full h-[24px] relative">
										<div
											className="bg-[#1f8ecd] rounded-l-md shadow-sm absolute h-[24px] left-0"
											style={{
												width: `${Math.round(
													(value.wins * 100) /
														(value.wins +
															value.losses)
												)}%`,
											}}
										></div>
										<div
											className="bg-[#ee5a52] rounded-r-md shadow-sm absolute h-[24px] right-0"
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
