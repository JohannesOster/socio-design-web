<script lang="ts">
	export let nodeLabelInput: HTMLInputElement;
	export let nodeNotesTextarea: HTMLTextAreaElement;
</script>

<form class="flex flex-col gap-4">
	<div class="flex flex-col gap-y-1">
		<label for="node-label" class="block text-sm font-medium leading-6 text-gray-900">Node Label</label>
		<input
			bind:this={nodeLabelInput}
			type="text"
			id="node-label"
			class="mousetrap block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
			class="mousetrap block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		></textarea>
	</div>
</form>
