import { lightDarkStrokeClass } from "./consts";
import type { Component } from "solid-js";

/**
 * 選單（三槓）圖示。
 *
 * 內建亮暗色變體，使用 `dark` class 開關。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=311%3A2425
 */
export const BarsIcon: Component = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<line y1="2.5" x2="14" y2="2.5" class={lightDarkStrokeClass} />
		<line y1="6.5" x2="14" y2="6.5" class={lightDarkStrokeClass} />
		<line y1="10.5" x2="14" y2="10.5" class={lightDarkStrokeClass} />
	</svg>
);
