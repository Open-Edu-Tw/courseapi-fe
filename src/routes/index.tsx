import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { Button } from "~/components/src/button";
import {
	BarsIcon,
	DownloadIcon,
	FilledStarIcon,
	LinkIcon,
	PlayIcon,
	SearchIcon,
	ShareIcon,
	StrokeStarIcon,
} from "~/icons";
import { Logo } from "~/icons";

export default function Home() {
	return (
		<main>
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
			<Button size="large" color="accent">Hello, World!</Button>
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
