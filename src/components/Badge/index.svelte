<script lang="ts">
	export let category: string;
	import { categoriesColors } from '../../utils/colors';
</script>

<em class="badge" style="--badge-color: {categoriesColors[category]}">
	{category}
</em>

<style>
	.badge {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		color: var(--badge-color);
	}
</style>
