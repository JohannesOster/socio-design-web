<script lang="ts">
	import { fade } from 'svelte/transition';

	export let showModal: boolean;
	export let closeModal: () => void;
</script>

{#if showModal}
	<div
		class="relative z-20"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		in:fade={{ duration: 80 }}
		on:click={closeModal}
	>
		<!-- Background Backdrop -->
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" in:fade={{ duration: 80 }}></div>

		<!-- Modal Content -->

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto" in:fade={{ duration: 80 }}>
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
					on:click|stopPropagation
				>
					<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mt-3 text-center sm:mt-0 sm:text-left">
						<slot name="body" />
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:flex sm:px-6 sm:gap-x-3">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
