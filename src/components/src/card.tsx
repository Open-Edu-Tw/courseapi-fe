import type { Component } from "solid-js";
// import { children, mergeProps, splitProps } from "solid-js";
import { PlayIcon } from "~/icons";
import { Button, ButtonColor, ButtonSize } from "./button";

// /**
//  * 卡片的大小
//  * 
//  * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=17%3A20
//  */
// export enum CardSize {
//     Small = "small",
//     Medium = "medium",
//     Large = "large",
// }

/**
 * 課程卡片的 props
 */
export type CardProps = {
    /**
     * 課程的非重要資訊
     * 
     * 比如作者、課程平台跟 Hashtags。
     */
    meta: string,

    /**
     * 課程標題
     */
    title: string,

    /**
     * 課程描述
     */
    description: string,

    url: string,
}

/**
 * 課程卡片
 * 
 * 註：我們沒有實作顯示圖片、分享按鈕和收藏的部分。
 * 另外這個組件與設計稿有很大不同。
 * 
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=17%3A20
 */
export const Card: Component<CardProps> = (props) => {
    return (
        <article class="course-card flex flex-col gap-2 bg-gray-200 dark:bg-gray-800 w-full rounded-3 p-4 pr-6 gap-3">
            <section class="course-card--header text-gray-700 dark:text-gray-300 flex flex-col gap-1">
                <section class="course-card--meta font-light text-sm">
                    {props.meta}
                </section>
                <h1 class="course-card--title font-bold text-xl">
                    {props.title}
                </h1>
            </section>

            <section class="course-card--desc max-w-84 text-base text-gray-800 dark:text-gray-200">
                {props.description}
            </section>

            <section class="course-card--panel">
                <InteractivePlayButton url={props.url} />
            </section>
        </article>
    )
};

const InteractivePlayButton: Component<{ url: string }> = (props) => {
    return (
        <Button
            size={ButtonSize.Medium}
            color={ButtonColor.Accent}
            icon={<PlayIcon />}
            onClick={() => location.href = props.url}>
                觀看
        </Button>
    )
}
