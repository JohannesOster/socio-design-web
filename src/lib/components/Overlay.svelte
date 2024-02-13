<script lang="ts">
	export let closeOverlay: () => void = () => {};
	export let onMouseDown: (e: MouseEvent) => void = () => {};
	export let nodeLabelInput: HTMLInputElement;
	export let nodeNotesTextarea: HTMLTextAreaElement;

	export const getNodeLabelInputRef = () => nodeLabelInput;
	export const getNodeNotesTextareaRef = () => nodeNotesTextarea;
</script>

<div class=" pointer-events-auto rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-clip">
	<div
		role="application"
		aria-roledescription="draggable widget"
		on:mousedown={onMouseDown}
		class="flex justify-end px-4 py-1 bg-gray-50 cursor-grab"
	>
		<button
			type="button"
			on:click={closeOverlay}
			class="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<form class="flex flex-col gap-4 p-4 pt-1">
		<div class="flex flex-col gap-y-1">
			<label for="node-label" class="block text-sm font-medium leading-6 text-gray-900">Node Label</label>
			<input
				bind:this={nodeLabelInput}
				type="text"
				id="node-label"
				class="block z-50 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="Davic"
			/>
		</div>
		<div class="flex flex-col gap-y-1">
			<label for="notes" class="block text-sm font-medium leading-6 text-gray-900">Notizen</label>
			<textarea
				bind:this={nodeNotesTextarea}
				rows="4"
				name="notes"
				id="notes"
				class="mousetrap block w-full resize rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			></textarea>
		</div>
	</form>
</div>
