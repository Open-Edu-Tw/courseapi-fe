// Placeholder 🥰
//
// It is needed for the VS Code Extension “UnoCSS”.
import presetMini from "@unocss/preset-mini";
import { defineConfig } from "unocss/vite";

export default defineConfig({
	presets: [
		presetMini({
			dark: "media",
		}),
	],
});
