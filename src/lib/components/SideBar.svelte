<script>
	let isSidebarOpen = false;
</script>

<aside class="sidebar" class:open={isSidebarOpen}>
	<button class="toggleBtn" on:click={() => (isSidebarOpen = !isSidebarOpen)}
		>{isSidebarOpen ? '<' : '>'}</button
	>

	<div class="flex flex-col p-4 pr-0 gap-4 h-full">
		<div class="flex flex-col bg-white rounded-md">
			<button id="optimizeBtn" class="py-2">Make me sexy! 🤤</button>
			<hr />
			<button id="analyzeBtn" class="py-2">Gimme the numbers! 🧮</button>
			<hr />
			<button id="saveBtn" class="py-2">Speichern 📁</button>
		</div>
		<div class="flex-1 flex flex-col overflow-y-clip">
			<div class="bg-white rounded-md p-4 overflow-y-scroll">
				<div id="degree-centrality" class="cursor-pointer">
					<h3 class="font-bold">Degree Centrality</h3>
					<ul hidden>-Leer-</ul>
				</div>

				<div id="degree-centrality-normalized" class="cursor-pointer">
					<h3 class="font-bold">Degree Centrality Normalized</h3>
					<ul hidden>-Leer-</ul>
				</div>

				<div id="betweenness-centrality-normalized" class="cursor-pointer">
					<h3 class="font-bold">Betweenness Centrality</h3>
					<ul hidden>-Leer-</ul>
				</div>

				<div id="closeness-centrality-normalized" class="cursor-pointer">
					<h3 class="font-bold">Closeness Centrality</h3>
					<ul hidden>-Leer-</ul>
				</div>

				<div id="page-rank" class="cursor-pointer">
					<h3 class="font-bold">Page Rank</h3>
					<ul hidden>-Leer-</ul>
				</div>
			</div>
		</div>
	</div>
</aside>

<style>
	.sidebar {
		@apply fixed inset-0 max-w-xs transform transition ease-in-out duration-300 sm:duration-500 pointer-events-none;
	}

	.sidebar > * {
		@apply pointer-events-auto;
	}

	.toggleBtn {
		@apply absolute top-4 right-0 bg-white px-4 py-2 rounded-full;
		transform: translateX(calc(100% + 16px));
	}

	.open {
		@apply -translate-x-full;
	}
</style>
