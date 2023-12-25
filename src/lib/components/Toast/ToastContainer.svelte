<script lang="ts">
	import { fly } from 'svelte/transition';
	import { toasts } from './store';
</script>

<div class="fixed top-0 right-0 m-4 space-y-2 z-50">
	{#each $toasts as toast (toast.id)}
		<div
			role="alert"
			class="toast"
			in:fly={{ x: 32, duration: 300 }}
			out:fly={{ x: 32, duration: 100 }}
		>
			{toast.message}
		</div>
	{/each}
</div>
