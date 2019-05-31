<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' value-format='yyyy' placeholder='请选择年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>企业能耗比对比图</h1>
		 <ve-funnel :data="chartData"></ve-funnel>
		 <h1>企业作业量对比图</h1>
		 <ve-ring :data="chartData2"></ve-ring>
		 <h1>企业耗电量对比图</h1>
		 <ve-radar :data="chartData3"></ve-radar>
		 <h1>企业耗水量对比图</h1>
		 <ve-scatter :data="chartData4"></ve-scatter>
		 <h1>企业耗油量对比图</h1>
		 <ve-waterfall :data="chartData5"></ve-waterfall>
		 <h1>设备完好率对比图</h1>
		 <ve-histogram :data="chartData6"></ve-histogram>
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
				chartData3: {},
				chartData4: {},
				chartData5: {},
				chartData6: {},
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/flowConsume"
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
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
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
				var url = this.baseUrl+"/energyConsume/devConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3=res.data;
				})
				
				// 后端网址
				var url = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData4=res.data;
				})
				
				// 后端网址
				var url = this.baseUrl+"/energyConsume/waterConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData5=res.data;
				})
				
				// 后端网址
				var url = this.baseUrl+"/energyConsume/oilConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData6=res.data;
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
