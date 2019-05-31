<!-- html部分 -->
<template>
	<div id="app">
		
		<div class="tt" :style="{background:$store.state.color}"></div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
	.tt{
		display: inline-block;width: 200px;height: 200px;border: 1px solid;
	}
</style>
