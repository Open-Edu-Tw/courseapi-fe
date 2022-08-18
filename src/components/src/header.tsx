import type { NavItemsProps } from "./nav-items";
import { NavItems } from "./nav-items";
import type { SearchBarProps } from "./search-bar";
import { SearchBar, SearchBarVariant } from "./search-bar";
import { debounce } from "lodash-es";
import type { Component } from "solid-js";
import { createEffect } from "solid-js";
import {
	Show,
	createSignal,
	splitProps,
} from "solid-js";
import { BarsIcon, Logo } from "~/icons";

/**
 * 使用者停止輸入幾毫秒後才觸發 onSearch？
 */
const searchDebounceMs = 500;

/**
 * Header 的樣式。
 */
export enum HeaderStyle {
	/**
	 * 手機版，但搜尋列放獨立一列。
	 *
	 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=18%3A80
	 */
	MobileWithSearchBar = "mobile_with_search_bar",

	/**
	 * 手機版，不展開搜尋列。
	 *
	 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=18%3A82
	 */
	Mobile = "mobile",

	/**
	 * 電腦版。
	 *
	 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=18%3A101
	 */
	Desktop = "desktop",
}

// -- 類型組件 --

/**
 * 搜尋列的類型定義部分。
 */
type HpSearchBar = {
	/**
	 * 當使用者輸入關鍵字時，或按下 Enter 時，觸發這個 event。
	 *
	 * 這個請求已經 debounced，亦即只會在使用者停止輸入後才會觸發。
	 * 所以不需要在外層設定 debounce。
	 */
	onSearch: (keyword: string) => void;
};

/**
 * 導航列的類型定義部分。
 */
type HpNavItems = NavItemsProps;

/**
 * 選單按鈕的類型定義部分。
 */
type HpMenu = {
	/**
	 * 當使用者按下展開 menu 的按鈕時，觸發這個 event。
	 */
	onToggleMenu: () => void;
};

// -- Header 組件及 props --

/**
 * 電腦版 Header 的 props。
 *
 * 電腦版的 Header 可設定的項目包括：
 *
 * - 搜尋列
 * - 導航列
 */
export type DesktopHeaderProps = HpSearchBar & HpNavItems;

/**
 * 電腦版的 header。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=18%3A101
 */
export const DesktopHeader: Component<DesktopHeaderProps> = (props) => {
	const [navProps, searchBarProps] = splitProps(
		props,
		["selected", "onSelect"],
		["onSearch"],
	);

	return (
		<div class="flex items-center justify-between w-full h-full py-6 px-8">
			<Logo padding />
			<NavItems {...navProps} />
			<DebouncedSearchBar
				variant={SearchBarVariant.Expanded}
				fullWidth={false}
				onSearch={(e) => searchBarProps.onSearch(e)}
			/>
		</div>
	);
};

/**
 * 手機版 Header 的 props。
 *
 * 手機版的 Header 可設定的項目包括：
 *
 * - 搜尋列
 * - 選單按鈕
 */
export type MobileHeaderProps = HpSearchBar & HpMenu;

/**
 * 手機版的 header。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=18%3A101
 */
export const MobileHeader: Component<MobileHeaderProps> = (props) => {
	const [menuProps, searchBarProps] = splitProps(
		props,
		["onToggleMenu"],
		["onSearch"],
	);
	const [showSearchBar, setShowSearchBar] = createSignal(false);

	createEffect(() => console.log(showSearchBar()));
	return (
		<div class="flex flex-col w-full h-full gap-3 py-4 px-5">
			<div class="flex items-center justify-between w-full h-full">
				<HeaderMenuButton onToggleMenu={() => menuProps.onToggleMenu()} />
				<Logo />
				<SearchBar
					variant={SearchBarVariant.Collapsed}
					onSearchIconPressed={() => setShowSearchBar((s) => !s)}
				/>
			</div>
			<Show when={showSearchBar()}>
				<DebouncedSearchBar
					variant={SearchBarVariant.Expanded}
					fullWidth
					onSearch={(e) => searchBarProps.onSearch(e)}
				/>
			</Show>
		</div>
	);
};

type DebouncedSearchBarProps = HpSearchBar &
	Omit<Omit<SearchBarProps, "query">, "onSearchBarChanged">;
/**
 * 已經將輸入事件進行 debounce 處理的 search bar。
 */
const DebouncedSearchBar: Component<DebouncedSearchBarProps> = (props) => {
	const [query, setQuery] = createSignal("");
	const onChangeEvent = 
		debounce((target: HTMLInputElement) => {
			setQuery(target.value);
			if (props.onSearch) {
				props.onSearch(target.value);
			}
		}, searchDebounceMs);

	return (
		<SearchBar
			variant={props.variant}
			query={query()}
			fullWidth={props.fullWidth}
			onSearchBarChanged={(e) => {
				onChangeEvent(e.currentTarget);
			}}
		/>
	);
};

/**
 * Header 切換選單開關的按鈕。
 */
const HeaderMenuButton: Component<HpMenu> = (props) => (
	<button type="button" onClick={() => props.onToggleMenu()}>
		<BarsIcon />
	</button>
);
