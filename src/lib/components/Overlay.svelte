<script lang="ts">
	export let closeOverlay: () => void;

	function getRandomColor() {
		// Generate a random number between 0 to 255 for each color component
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		// Convert each color component into a hexadecimal string and concatenate them
		const color =
			'#' +
			red.toString(16).padStart(2, '0') +
			green.toString(16).padStart(2, '0') +
			blue.toString(16).padStart(2, '0');

		return color;
	}
</script>

<div
	style={`background-color: ${getRandomColor()}`}
	class="py-2 px-4 cursor-grab pointer-events-auto border-2 border-gray-600 rounded-md"
>
	<button on:click={closeOverlay}>Close</button>
</div>
