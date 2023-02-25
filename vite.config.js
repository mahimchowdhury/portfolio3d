import { defineConfig } from "vite";

export default defineConfig({
	base: "/portfolio3d/",
	optimizeDeps: {
		include: ["./mahim.jpg", "./moon.jpg", "./normal.jpg"],
	},
});
