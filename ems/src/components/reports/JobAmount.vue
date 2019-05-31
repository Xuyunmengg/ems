<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' value-format='yyyy' placeholder='请选择年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>流程作业对比图</h1>
		 <ve-funnel :data="chartData"></ve-funnel>
		 <h1>设备类别作业量对比图（单元：万吨）</h1>
		 <ve-radar :data="chartData2"></ve-radar>
		 <h1>设备作业量对比图（单元：万吨）</h1>
		 <ve-ring :data="chartData3"></ve-ring>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				years:'2018',
				chartData: {
						
				},
				chartData2: {
					
				},
				chartData3: {
					
				}
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/jobAmount/flowAmount"
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
				var url = this.baseUrl+"/jobAmount/devTypeAmount"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2=res.data;
				})
				
				// 后端网址
				var url = this.baseUrl+"/jobAmount/devAmount"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3=res.data;
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
