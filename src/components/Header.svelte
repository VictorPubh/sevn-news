<script>
    import { company } from "../store/global"
    import { identityColor } from "../utils/colors"

    $: title = `${$company} News`
    export let buttonReturn = false;
</script>

<div class="header" style="--identity-color: {$identityColor}">
    {#if buttonReturn}
        <a class="button-return" href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                
        </a>
    {/if}
    {title}
</div>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--identity-color);
        text-transform: uppercase;
        width: 100%;
        
        font-size: 1.45rem;
        height: 3.375rem;
        font-weight: 700;
    }

    .button-return {
        position: absolute;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: black;
        height: 3.375rem;
        width: 3.375rem;
        cursor: pointer;
    }
</style>