import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ postcss: true }),
	kit: { adapter: adapter(), paths: { base: '/socio-design-web' } }
};

export default config;
