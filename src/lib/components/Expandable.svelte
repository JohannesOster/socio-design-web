<script>
	let open = false;
</script>

<button class="cursor-pointer w-full flex flex-col px-3 py-2" on:click={() => (open = !open)}>
	<dt class="relative flex w-full justify-between items-center">
		<slot name="head" /> <span aria-expanded={open} class="trigger"></span>
	</dt>
	<dd aria-hidden={!open} class="expandable-body">
		<ul class="text-left leading-7 text-gray-600 overflow-hidden">
			<slot name="body" />
		</ul>
	</dd>
</button>

<style>
	.trigger::before,
	.trigger::after {
		content: '';
		display: block;
		width: 12px;
		height: 2px;
		background: currentcolor;
		transition: transform 500ms;
	}

	.trigger::before {
		translate: 0 1px;
	}

	.trigger::after {
		rotate: 90deg;
		translate: 0 -1px;
	}

	.trigger[aria-expanded='true']::before,
	.trigger[aria-expanded='true']::after {
		transform: rotate(45deg);
	}

	.expandable-body {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 300ms;
	}

	.expandable-body[aria-hidden='false'] {
		grid-template-rows: 1fr;
	}
</style>
