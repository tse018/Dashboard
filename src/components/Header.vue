<template>
	<header class="header">
		<RouterLink :to="{ name: 'home' }" class="header__logo">
			Dashboard
		</RouterLink>
		
		<nav class="header__mobile">
			<MobileMenu />
		</nav>
		
		<nav class="header__menu">
			<ul>
				<li>
					<RouterLink v-for="page in navigationPages" :to=" { name: page.title , params: { page_id: page.id }}" class="header__links">
						{{ page.title }}
					</RouterLink>
				</li>
			</ul>
		</nav>	
	</header>
</template>

<script>
	import MobileMenu from '../components/MobileMenu.vue';

	export default {
		components: {
				MobileMenu
			},

			computed: {
				navigationPages() {
					return this.$store.getters.getPages;
				}
			},
	};
</script>

<style>
	.header {
		position: relative;
		background-color: #E5E5E5;
		height: 50px;
		margin-bottom: 50px;
	}

	.header__logo {
		position: absolute;
		font-size: 40px;
		height: 20px;
		margin-left: 25px;
		display: flex;
	}

	.header__menu {
		position: absolute;
		right: 0;
		font-size: 25px;
		display: flex;
		justify-content: space-between;
	}

	.header__links {
		text-decoration: none;
		margin: 10px 20px 0 10px;
		color: black;
	}

	.header__mobile {
		display: none;
	}

	@media screen and (max-width: 800px) {
		.header__mobile {
			display: block;
		}

		.header__menu {
			display: none;
		}
	}
</style>
