// import "./Counter.css";
import { Button, ButtonColor, ButtonSize } from "./src/button";
import { createSignal } from "solid-js";
import { PlayIcon } from "~/icons";

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<Button
			size={ButtonSize.Medium}
			color={ButtonColor.Accent}
			class="increment"
			onClick={() => setCount(count() + 1)}
			icon={<PlayIcon />}>
			Clicks: {count()}
		</Button>
	);
}
