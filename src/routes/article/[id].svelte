<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch }) {
		const url = `https://apimock.sevn.technology/news/articles/${params.id}`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				article: await response.json()
			}
		};
	}
</script>

<script>
	import Header from '../../components/Header.svelte';
	import Badge from '../../components/Badge/index.svelte';
	import Footer from '../../components/Footer.svelte';
	import Advertising from '../../components/Advertising.svelte';
	import { company } from '../../store/global';

	export let article;

	$: articleDate = `${article.date}, Por: ${article.author}`;
	$: articleBody = article.article;
</script>

<svelte:head>
	<title>{$company} - {article.title}</title>
</svelte:head>

<Header buttonReturn />

<div class="full-article container">
	<div class="article-badge">
		<Badge category={article.category} />
	</div>
	<h1>{article.title}</h1>
	<p>{article.subtitle}</p>
	<sub>{articleDate}</sub>
	<Advertising full />
	<article>
		{@html articleBody}
	</article>
</div>

<Footer />

<style>
	.full-article {
		margin: auto;
	}

	.full-article .article-badge {
		margin: 4rem 0 1rem 0;
	}

	.full-article h1 {
		font-weight: 700;
		font-size: 58px;
		line-height: 60px;
	}

	.full-article p {
		margin: 2rem 0;
		font-weight: 400;
		font-size: 25px;
		line-height: 32px;
	}

	.full-article sub {
		font-weight: 700;
		font-size: 1rem;
		line-height: 16px;
		color: rgba(0, 0, 0, 0.2);
	}

	.full-article article {
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.75rem;
	}
</style>
