import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
	return (
		<main class="text-gray-200">
			<Title>CourseAPI – 無此頁面！</Title>
			<HttpStatusCode code={404} />
			<h1 class="font-bold text-2xl">無此頁面。</h1>
			<p>請回 <a href="/">首頁</a>。</p>
		</main>
	);
}
