<template>
	<div class="collapsible">
		<div class="collapsible__top-container">
			<!-- 
				default fa-chevron-circle-right icon, 
				when its !collapsed then show fas fa-caret-square-down icon,
				otherwise don´t do anything
			-->
			<button @click="toggleDetails" :class="`collapsible__arrow fa-lg fas fa-chevron-circle-right${collapsed ? 'fas fa-caret-square-down' : ' '}`">

				<!-- v-model {{ title is props and its value gets rendered from Home.vue }} -->
				<div class="collapsible__title">
					{{ title }}
				</div>
				
			</button>

		</div>

		<!-- slot takes content from another component and render taken components content -->
		<div class="collapsible__components" v-if="collapsed">
			<slot />
		</div>

	</div>
</template>

<script>
export default {
	/* props value can be sent to other componets, default value just in case props fail */

	props: {
		title: {
			type: String,
			default: 'Click here to see more',
		},
	},

	data() {
		return {
			collapsed: false,
		};
	},

	methods: {
		toggleDetails() {
			this.collapsed = !this.collapsed;
		},
	},

};
</script>

<style>
.collapsible {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 550px;
	margin-bottom: 2rem;
}

.collapsible__top-container {
	background: #efefef;
	border-radius: 2px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.collapsible__arrow {
	display: inline-block;
	padding: 0.8em 1em;
	width: 100%;
	text-align: left;
}

.collapsible__title {
	display: inline-block;
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	margin-left: 1rem;
	font-size: 1.5rem;
}
</style>
