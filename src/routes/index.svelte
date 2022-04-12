<script>
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'
    import Advertising from '../components/Advertising.svelte'
    import News from '../components/News.svelte'

    export let others;
    export let headlines;

    $: articles = {
        others,
        headlines
    }
</script>

<script context="module">
    /** @type {import('./[slug]').Load} */
    export async function load({ params, fetch, session, stuff }) {
        const others = `https://apimock.sevn.technology/news/others`;
        const resOthers = await fetch(others);

        const headlines = `https://apimock.sevn.technology/news/headlines`;
        const resHeadlines = await fetch(headlines);

        return {
            props: {
                others: await resOthers.json(),
                headlines: await resHeadlines.json(),
            }
        };
    }
</script>

<Header />
<div class="container centralize">
    <Advertising />
    <News data={articles} />
</div>
<Footer />
