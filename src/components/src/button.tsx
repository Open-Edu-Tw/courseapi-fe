import type { Component, ComponentProps, JSX } from "solid-js";
import { children, mergeProps, splitProps } from "solid-js";

/**
 * 按鈕的大小。
 */
export enum ButtonSize {
	/**
	 * 中型：100 × 40。
	 */
	Medium = "medium",
	/**
	 * 大型：126 × 48。
	 */
	Large = "large",
}

/**
 * 按鈕的色彩。
 */
export enum ButtonColor {
	/**
	 * 基本色（灰色）。
	 */
	Basic = "basic",
	/**
	 * 強調色（天藍色／藍色）。
	 */
	Accent = "accent",
}

/**
 * 按鈕的 props。
 */
export interface ButtonProps extends ComponentProps<"button"> {
	/**
	 * 按鈕的大小。
	 *
	 * 預設為 `Medium`。
	 */
	size?: ButtonSize;

	/**
	 * 按鈕的顏色。
	 *
	 * 預設為 `Basic`。
	 */
	color?: ButtonColor;

	/**
	 * 按鈕的圖示。
	 */
	icon?: JSX.Element;

	/**
	 * 按鈕的文字。
	 */
	children?: JSX.Element;
}

/**
 * 按鈕。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=20%3A62
 */
export const Button: Component<ButtonProps> = (_props) => {
	const props = mergeProps(
		{ size: ButtonSize.Medium, color: ButtonColor.Basic },
		_props,
	);
	const [ourProps, buttonProps] = splitProps(props, [
		"size",
		"color",
		"icon",
		"children",
		"class",
	]);
	const icon = children(() => ourProps.icon);
	const text = children(() => ourProps.children);

	return (
		<button
			class={`flex rounded-3 ${ourProps.class} items-center`}
			classList={{
				"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200":
					props.color === ButtonColor.Basic,
				"bg-sky-200 dark:bg-lightblue-700 text-gray-800 dark:text-gray-200":
					props.color === ButtonColor.Accent,
				"px-6 py-3 gap-x-2.5": props.size === ButtonSize.Medium,
				"px-9 py-4 gap-x-3": props.size === ButtonSize.Large,
			}}
			{...buttonProps}>
			<div>{icon()}</div>
			<div>{text()}</div>
		</button>
	);
};
