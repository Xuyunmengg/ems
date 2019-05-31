<!-- html部分 -->
<template>
	<div id="app">
		<h1>这是一个小狗🐶</h1>
		<el-button @click="fn1">哈士奇</el-button>
		<el-button @click="fn2">金毛</el-button>
		<router-view/>
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
			fn1(){
				this.$router.push({path:'/dog/dog1'})
			},
			fn2(){
				this.$router.push({path:'/dog/dog2'})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
