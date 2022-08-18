import type { Component, ComponentProps } from "solid-js";
import { Show, mergeProps } from "solid-js";
import { SearchIcon } from "~/icons";

/**
 * 搜尋列式樣。
 */
export enum SearchBarVariant {
	/**
	 * 收合。
	 */
	Collapsed = "collapsed",
	/**
	 * 展開。
	 */
	Expanded = "expanded",
}

/**
 * 搜尋列 props。
 */
export interface SearchBarProps {
	/**
	 * 搜尋列的式樣。
	 */
	variant: SearchBarVariant;

	/**
	 * 搜尋內容。
	 */
	query?: string;

	/**
	 * 搜尋列的寬度是否要設為全寬 (100%)？
	 *
	 * @default false
	 */
	fullWidth?: boolean;

	/**
	 * 佔位文字。
	 *
	 * @default "搜尋課程、關鍵字或 Hashtag……"
	 */
	placeholderText?: string;

	/**
	 * 傳入搜尋按鈕的 props。
	 */
	searchButtonProps?: ComponentProps<"button">;

	/**
	 * 傳入搜尋框的 props。
	 */
	searchBarProps?: ComponentProps<"input">;
}

/**
 * CourseAPI 的搜尋列。
 *
 * 有兩個變體：搜尋按鈕 (`collapsed`) 和搜尋列 (`expanded`)。
 */
export const SearchBar: Component<SearchBarProps> = (_props) => {
	const props = mergeProps(
		{
			fullWidth: false,
			placeholderText: "搜尋課程、關鍵字或 Hashtag……",
		},
		_props,
	);

	// 保持 reactivity
	const searchButtonProps = () => props.searchButtonProps;
	const searchBarProps = () => props.searchBarProps;

	return (
		<section
			class={[
				// Flex Configuration
				"flex gap-3",
				// Padding
				"py-2",
				// Text and Background Color
				"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
				// Chores
				"rounded-3 text-sm",
			].join(" ")}
			classList={{
				"px-2.5": props.variant === SearchBarVariant.Collapsed,
				"px-5": props.variant === SearchBarVariant.Expanded,
			}}>
			<button
				{...searchButtonProps()}
				type="button"
				class={`flex items-center justify-center ${searchButtonProps().class}`}>
				<SearchIcon />
			</button>

			<Show when={props.variant === SearchBarVariant.Expanded}>
				<input
					{...searchBarProps()}
					spellcheck
					class={`bg-transparent focus:outline-none min-w-max ${
						searchBarProps().class
					}`}
					classList={{
						...searchBarProps().classList,
						"w-full": props.fullWidth,
					}}
					type="search"
					// Make the size match the placeholder length.
					//
					// We make the size the 1.5 times the length of the placeholder,
					// as `placeholderText.length` did not consider the text size in Chinese.
					//
					// `1.5` is a magic number that makes the above work.
					// You can adjust it by yourself,
					// but I did not plan to separate it as a parameter.
					size={props.placeholderText.length * 1.5}
					placeholder={props.placeholderText}
					value={props.query}
				/>
			</Show>
		</section>
	);
};
