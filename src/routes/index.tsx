import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { BarsIcon, DownloadIcon, FilledStarIcon, LinkIcon, PlayIcon, SearchIcon, ShareIcon, StrokeStarIcon } from "~/icons";
import { Logo } from "~/icons";

export default function Home() {
	return (
		<main class=" bg-coolGray-900">
			<Title>CourseAPI – 首頁</Title>
			<p class="bg-coolgray dark:font-bold">Hello, World!</p>
			<Logo padding />
			<BarsIcon />
			<DownloadIcon />
			<FilledStarIcon />
			<LinkIcon />
			<PlayIcon />
			<SearchIcon />
			<ShareIcon />
			<StrokeStarIcon />
			<Counter />
			<p>
				Visit{" "}
				<a href="https://docs.solidjs.com/start" target="_blank">
					docs.solidjs.com/start
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
		</main>
	);
}
