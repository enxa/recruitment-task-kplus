<script>
	import { fadeIn, handleClick } from './index.js'
	
	let imgs = [
		"assets/img/1.jpg",
		"assets/img/2.jpg",
		"assets/img/3.jpg",
		"assets/img/3.jpg",
		"assets/img/2.jpg",
		"assets/img/1.jpg",
		"assets/img/1.jpg",
		"assets/img/2.jpg",
		"assets/img/3.jpg",
	]
</script>

<div id="app" class="container">
	<div class="wrap" use:fadeIn>
		{#each imgs as img, i}
			<img src={img} alt="img {++i}" class={`img${i}`} data-delay="{i}" use:handleClick/>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../public/assets/styles/index.scss';

	#app {
		.wrap {
			img:nth-child(3) { 
				animation: heartbeat 1s infinite;
			}
		}
	}
	
</style>