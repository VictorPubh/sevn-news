<script>
	import Badge from '../Badge/index.svelte';
	export let article;
</script>

<div class="card-article hover-pointer">
	<img src={article.poster} alt={article.title} />
	<Badge category={article.category} />
	<h2>{article.title}</h2>
</div>

<style>
	.card-article {
		width: 100%;
		display: grid;
		gap: 0.75rem;
	}

	.card-article img {
		width: 100%;
		height: 20vh;
		object-fit: cover;
		border-radius: 10px;
	}

	.card-article h2 {
		font-weight: 700;
		font-size: 20px;
		line-height: 1.5rem;
	}

	@media (max-width: 600px) {
		.card-article img {
			height: 90px;
		}

		.card-article h2 {
			font-size: 14px;
			line-height: 1.2rem;
		}
	}
</style>
