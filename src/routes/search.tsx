import { createResource, For, Show } from "solid-js";
import { Title, useSearchParams } from "solid-start";

const searchApi = async (query: string) => {
    const response = await fetch(`https://courseapi.org/course?name=${query}`);
    const json = await response.json();
    
    return json.data as ({ name: string })[];
};

export default function Search() {
    const [param] = useSearchParams();
    const query = () => param.q;
    const [searchResult] = createResource(query, searchApi);

	return (
		<main class="text-gray-200 px-40">
			<Title>CourseAPI – 「{query()}」的搜尋結果</Title>

			<h1 class="font-bold text-4xl">「{query()}」的搜尋結果</h1>

            <Show when={!searchResult.loading} fallback={<div>Loading...</div>}>
                <ul>
                    <For each={searchResult()} fallback={<p>沒東西笑死</p>}>{(item) => {
                        return <li>{item.name}</li>;
                    }}</For>
                </ul>
            </Show>
		</main>
	);
}
