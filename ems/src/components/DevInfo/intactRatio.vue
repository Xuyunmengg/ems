<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' value-format='yyyy' placeholder='请选择年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		
		<h1>港口间设备完好率对比</h1>
		 <ve-radar :data="chartData"></ve-radar>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				years:'2018',
				chartData: {},
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/intactRatio"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData=res.data;
				})
						
			}
		},
		mounted:function(){
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
