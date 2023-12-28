<script lang="ts">
	export let position: 'left' | 'right' = 'left';

	let isOpen = false;

	export const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<aside class={`side-panel ${position}`} class:open={isOpen}>
	<button class={`toggle-btn ${position}`} on:click={() => toggle()}>
		<svg
			height="16px"
			width="16px"
			viewBox="0 0 185.343 185.343"
			class:rotate-y={(isOpen && position === 'left') || (!isOpen && position === 'right')}
			class="transition-[transform] transform ease-in-out duration-500 sm:duration-300"
		>
			<g>
				<path
					fill="current-color"
					d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
				/>
			</g>
		</svg>
	</button>
	<slot />
</aside>

<style>
	.side-panel {
		@apply fixed top-0 bottom-0 z-10 min-w-56 max-w-xs transition transform duration-300 ease-in-out;
	}

	.side-panel.left {
		@apply left-0 -translate-x-full;
	}

	.side-panel.right {
		@apply right-0 translate-x-full;
	}

	.side-panel.open {
		@apply translate-x-0;
	}

	.toggle-btn {
		@apply absolute top-4 bg-white p-3 rounded-full;
	}

	.side-panel.left .toggle-btn {
		@apply -right-12;
	}

	.side-panel.right .toggle-btn {
		@apply -left-12;
	}

	.rotate-y {
		transform: rotateY(180deg);
	}
</style>
