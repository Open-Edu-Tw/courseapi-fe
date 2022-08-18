import type { Component } from "solid-js";
import { DesktopHeader, MobileHeader } from "~/components/src/header";
import { NavbarEntry } from "~/components/src/nav-items";

export const RootHeader: Component = () => {
	return (
		<>
			<div class="hidden lg:block">
				<DesktopHeader
					onSearch={(m) => {
						location.href = "/search?q=" + m;
					}}
					selected={NavbarEntry.Favorites}
					onSelect={(s) => console.log(s)}
				/>
			</div>

			<div class="block lg:hidden">
				<MobileHeader
					onSearch={(m) => {
						location.href = "/search?q=" + m;
					}}
					onToggleMenu={() => console.log("toggle menu")}
				/>
			</div>
		</>
	);
};
