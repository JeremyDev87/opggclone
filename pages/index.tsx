import type { NextPage } from "next";
import LeftBar from "./components/LeftBar";
import MainContents from "./components/MainContents";
import MidBar from "./components/MidBar";
import TopBar from "./components/TopBar";

const Home: NextPage = () => {
	return (
		<div className="h-[1819px]">
			<TopBar />
			<MidBar />
			<div className="mt-8 border-t-2">
				<div className="mx-[200px] grid grid-cols-3 mt-5">
					<LeftBar />
					<MainContents />
				</div>
			</div>
		</div>
	);
};

export default Home;
