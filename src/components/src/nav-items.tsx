import type { Component } from "solid-js";
import { For } from "solid-js";

/**
 * 可以使用的導覽列項目。
 *
 * 與頁面路徑沒有直接關聯。
 */
export enum NavbarEntry {
	Recommends = "recommended",
	Favorites = "favorites",
	HotCourses = "hot_courses",
	Hashtags = "hashtags",
}

// entry → 實際連結
const NavbarItemUrlMap: Record<NavbarEntry, string> = {
	[NavbarEntry.Recommends]: "/recommends",
	[NavbarEntry.Favorites]: "/favorites",
	[NavbarEntry.HotCourses]: "/hot-courses",
	[NavbarEntry.Hashtags]: "/hashtags",
};

// entry → 顯示名稱
const NavbarItemDisplayNameMap: Record<NavbarEntry, string> = {
	[NavbarEntry.Recommends]: "個人推薦",
	[NavbarEntry.Favorites]: "收藏課程",
	[NavbarEntry.HotCourses]: "話題課程",
	[NavbarEntry.Hashtags]: "Hashtags",
};

export type NavbarItemsProps = {
	/**
	 * 要選取的導覽列項目。
	 */
	selected?: NavbarEntry;

	/**
	 * 選取時觸發之事件。
	 */
	onSelect?: (entry: NavbarEntry) => void;
};

/**
 * 導覽列項目。
 *
 * `selected` 會讓指定的項目變為粗體。
 */
export const NavbarItems: Component<NavbarItemsProps> = (props) => (
	<section class="flex items-center gap-5">
		<For each={Object.values(NavbarEntry)}>
			{(item) => {
				const url = NavbarItemUrlMap[item];
				const displayName = NavbarItemDisplayNameMap[item];

				return (
					<a href={url} onClick={[props.onSelect, item]}>
						<span
							class="cursor-pointer"
							classList={{
								"font-bold": props.selected === item,
							}}>
							{displayName}
						</span>
					</a>
				);
			}}
		</For>
	</section>
);
