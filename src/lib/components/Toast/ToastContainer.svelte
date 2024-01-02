<script lang="ts">
	import { fly } from 'svelte/transition';
	import { toasts } from './store';
</script>

<div class="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 space-y-2 z-50">
	{#each $toasts as toast (toast.id)}
		<div role="alert" class="toast" in:fly={{ y: 32, duration: 300 }} out:fly={{ y: 32, duration: 100 }}>
			{toast.message}
		</div>
	{/each}
</div>
