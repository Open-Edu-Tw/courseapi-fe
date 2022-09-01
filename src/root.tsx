// @refresh reload
import "@unocss/reset/tailwind.css";
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Link,
	Meta,
	Routes,
	Scripts,
	Style,
	Title,
} from "solid-start";
import "uno.css";
import { Footer } from "./page-component/footer";
import { RootHeader } from "./page-component/root-header";

export default function Root() {
	return (
		<Html lang="zh-tw">
			<Head>
				<Title>CourseAPI</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Link rel="preconnect" href="https://fonts.googleapis.com" />
				<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
				<Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&display=swap" rel="stylesheet" />
				<Style>{`
					body {
						font-family: 'Noto Sans TC', sans-serif;
					}
				`}</Style>
			</Head>
			<Body class="bg-gray-50 dark:bg-gray-900">
				<Suspense>
					<ErrorBoundary>
						<RootHeader />
						<main class="min-h-100vh">
							<Routes>
								<FileRoutes />
							</Routes>
						</main>
						<Footer />
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
