<script lang="ts">
	type Variant = 'primary' | 'secondary';
	export let variant: Variant = 'primary'; // default variant
	export let intent = 'none'; // default intent

	$: buttonClasses = `inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:w-auto transition-colors 
      ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-500' : ''}
      ${variant === 'secondary' ? 'text-gray-900 ring-1 ring-gray-300 hover:bg-gray-100' : ''}
      ${intent === 'success' ? 'border-green-500' : ''}
      ${intent === 'danger' ? 'border-red-500' : ''}
      ${intent === 'warning' ? 'border-yellow-500' : ''}`;
</script>

<button type="button" on:click on:mouseover on:mouseenter on:mouseleave class={buttonClasses}>
	<slot />
</button>
