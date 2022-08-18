import { Title, useSearchParams } from "solid-start";

export default function Search() {
    const [param] = useSearchParams();
    const query = () => param.q;

	return (
		<main class="text-gray-200 px-40">
			<Title>CourseAPI – 「{query()}」的搜尋結果</Title>

			<h1 class="font-bold text-4xl">「{query()}」的搜尋結果</h1>
		</main>
	);
}
