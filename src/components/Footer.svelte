<script>
	import { company } from '../store/global';
	import { scrollToTop } from '../utils/scrollToTop';

	$: copywrite = `${$company} - Todos Direitos Reservados`;
</script>

<div class="footer">
	<div class="footer-grid container">
		<p>
			{copywrite}
		</p>
		<button on:click={scrollToTop}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 199.404 199.404"
				style="enable-background:new 0 0 199.404 199.404"
				xml:space="preserve"
			>
				<path
					d="m0 135.411 28.285 28.284 71.418-71.418 71.416 71.418 28.285-28.283-99.701-99.703z"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.footer {
		width: 100%;
		padding: 2.5rem 0;
		text-align: center;
		margin-top: 4rem;
		background-color: rgba(0, 0, 0, 0.2);
		color: rgba(0, 0, 0, 0.8);
	}

	.footer button {
		cursor: pointer;
		border: 0;
		background-color: transparent;
		opacity: 0.9;
	}

	.footer-grid {
		margin: auto;
		display: flex;
		justify-content: space-between;
	}
</style>
