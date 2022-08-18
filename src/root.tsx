// @refresh reload
import "@unocss/reset/tailwind.css";
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "uno.css";

export default function Root() {
	return (
		<Html lang="zh-tw">
			<Head>
				<Title>CourseAPI</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class="bg-gray-50 dark:bg-gray-800">
				<Suspense>
					<ErrorBoundary>
						<a href="/">Index</a>
						<a href="/about">About</a>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
