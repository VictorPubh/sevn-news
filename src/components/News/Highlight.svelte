<script>
    // @ts-nocheck
    import Badge from "../Badge/index.svelte"
    import CardArticle from "./CardArticle.svelte";

    export let data

    $: highlighted = data.pop()
</script>

<div class="highlight-grid">
    <a href="/article/{highlighted.id}">
        <div class="highlighted hover-pointer">
            <Badge category={highlighted.category} />
            <h2>
                {highlighted.title}
            </h2>
        </div>
    </a>
    <div class="articles">
        {#each data as article }
            <a href="/article/{article.id}">
                <CardArticle article={article} />
            </a>
        {/each}
    </div>
</div>

<style>
    .highlight-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 5rem;
        align-items: center;
        margin: 4rem auto;
    }

    .highlighted {
        display: grid;
        gap: .75rem;
    }

    .highlighted h2 {
        font-size: 58px;
        font-weight: 700;
    }

    .articles { 
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
    }

    @media (max-width: 800px) {
        .highlight-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 1000px) {
        .highlight-grid {
            grid-template-columns: 1fr;
        }

        .highlighted h2 {
            font-size: 40px;
            font-weight: 700;
        }

        .articles {
            justify-content: center;
        }
    }
</style>