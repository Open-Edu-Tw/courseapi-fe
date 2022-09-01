import { For, Show, createResource, createMemo } from "solid-js";
import { Title, useSearchParams } from "solid-start";
import { Card } from "~/components/src/card";

const MAX_DESCRIPTION_LENGTH = 84;

type SearchApiSchema = {
	name: string;
	url: string;
	instructor: string[];
	description: string;
	source: string;
};

const searchApi = async (query: string) => {
	const response = await fetch(
		`https://api.courseapi.org/course?name=${query}`,
	);
	const json = await response.json();

	return json.data as SearchApiSchema[];
};

export default function Search() {
	const [param] = useSearchParams();
	const query = () => param.q;
	const [searchResult] = createResource(query, searchApi);

	return (
		<main class="text-gray-800 dark:text-gray-200 lg:px-40 md:px-20 px-5 mb-4">
			<Title>CourseAPI –「{query()}」的搜尋結果</Title>

			<h1 class="font-bold text-2xl lg:text-3xl mb-4">「{query()}」的搜尋結果</h1>

			<Show when={!searchResult.loading} fallback={<div>Loading...</div>}>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
					<For each={searchResult()} fallback={<p>找不到 {query()} 的搜尋結果。</p>}>
						{(item) => {
                            const instructors = createMemo(() => {
                                if (item.instructor.length === 0) return null;
                                return item.instructor.join("、");
                            })

                            const meta = createMemo(() => {
                                const source = item.source;
                                const instructorString = instructors();

                                if (instructorString === null) return source;
                                return `${source} | ${instructorString}`;
                            })

                            const description = createMemo(() => {
                                if (item.description.length === 0) return "（無描述）";

                                const firstLine = item.description
                                    .split("\n")[0]
                                    .trim();
                                
                                if (firstLine.length > MAX_DESCRIPTION_LENGTH) {
                                    const finalSpaceOffset = firstLine.indexOf(" ", MAX_DESCRIPTION_LENGTH);
                                    return firstLine.slice(0, Math.min(finalSpaceOffset, MAX_DESCRIPTION_LENGTH)) + "……";
                                }

                                return firstLine;
                            });

							return (
								<Card
									meta={meta()}
									title={item.name}
									description={description()}
									url={item.url}
								/>
							);
						}}
					</For>
				</div>
			</Show>
		</main>
	);
}
