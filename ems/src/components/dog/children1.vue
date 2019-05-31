<!-- html部分 -->
<template>
	<div id="app">
		<h1>组件1</h1>
		<el-input v-model="$store.state.v1" style="width: 150px;"></el-input>
		<el-input v-model="$store.state.v2" style="width: 150px;"></el-input>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				v1:'',
				v2:''
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
