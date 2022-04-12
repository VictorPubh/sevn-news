<script>
	import Highlight from './News/Highlight.svelte';
	import SmallArticles from './News/SmallArticle.svelte';

	export let data;
</script>

<Highlight data={data.headlines} />

<div class="small-article-grid">
	{#each data.others as article}
		<a href="/article/{article.id}">
			<SmallArticles {article} />
		</a>
	{/each}
</div>

<style>
	.small-article-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1.5rem;
		width: 100%;
		margin: auto;
	}

	@media (max-width: 800px) {
		.small-article-grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (max-width: 600px) {
		.small-article-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
