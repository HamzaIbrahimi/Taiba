<div class="circle"></div>

<style>
	.circle {
		max-width: 50px;
		height: 50px;
		border-radius: 100vw;
		background-color: inherit;
		border-left: 1px solid #fff;
		border-bottom: 1px solid #fff;
		animation: spin 1s infinite ease-in;
	}

	@keyframes spin {
		25% {
			transform: rotate(90deg);
		}

		50% {
			transform: rotate(180deg);
		}

		75% {
			transform: rotate(270deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
