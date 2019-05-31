<!-- html部分 -->
<template>
	<div id="app">
		<h1>组件2</h1>
		<el-button @click='fn()'>点击</el-button>
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
			fn(){
				console.log(this.$store.state.v1),
				console.log(this.$store.state.v2)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
