<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' value-format='yyyy' placeholder='请选择年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>生产模型-作业量</h1>
		 <ve-tree :data="chartData"></ve-tree>
		 <h1>能源消耗-折标煤</h1>
		 <ve-tree :data="chartData2"></ve-tree>
		
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
				chartData2: {},
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/model"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData=res.data;
				})
				
				// 后端网址
				var url = this.baseUrl+"/energyConsume/model"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2=res.data;
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
