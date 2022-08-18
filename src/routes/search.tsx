import { Title } from "solid-start";
import { useRouteParams } from "solid-start/islands/server-router";

export default function Search() {
    const router = useRouteParams();
    const query = () => router().q;

	return (
		<main>
			<Title>CourseAPI – 「{query()}」的搜尋結果</Title>

			<h1 class="font-bold text-4xl">{query()} 的搜尋結果</h1>
		</main>
	);
}
