import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Logo from "~/icons/logo";

export default function Home() {
  return (
    <main>
      <Title>CourseAPI – 首頁</Title>
      <p class="bg-coolgray dark:font-bold dark:">Hello, World!</p>
      <Logo padding />
      <Counter />
      <p>
        Visit{" "}
        <a href="https://docs.solidjs.com/start" target="_blank">
          docs.solidjs.com/start
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
