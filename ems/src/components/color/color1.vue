<!-- html部分 -->
<template>
	<div id="app">
		
		<el-input v-model='color' style="width: 150px;"></el-input>
		<el-button @click='fn'>改变</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				color:''
			};
		},
		methods:{
			fn(){
				this.$store.commit('changeColor',this.color)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
