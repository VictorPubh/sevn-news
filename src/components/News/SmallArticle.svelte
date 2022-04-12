<script lang="ts">
    import { categoriesColors } from "../../utils/colors"
    export let article;
</script>

<div class="small-article hover-pointer" style="--line-color: {categoriesColors[article.category]}">
    <div class="line" />
    {article.title}
</div>

<style>
    .line {
        width: .4rem;
        height: 3.25rem;
        border-radius: 10rem;
        background-color: var(--line-color);
    }

    .small-article {
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
</style>