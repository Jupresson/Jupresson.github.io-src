// Removed reference to missing 'astro/client' type definition

declare module "astro/config" {
	export function defineConfig(config: any): any;
}

declare module "*.css";
