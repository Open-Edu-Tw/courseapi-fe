import solid from "solid-start/vite";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [solid(), Unocss()],
});
