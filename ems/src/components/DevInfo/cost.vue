<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' value-format='yyyy' placeholder='请选择年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>成本核算信息</h1>
		 <div style="text-align: center;">
		 		<center>
		 			<el-table :data="list">
		 			
		 				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
		 				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
		 				<el-table-column prop="consume" label="能耗" width="120"></el-table-column>
		 				<el-table-column prop="cost" label="成本核算" width="180"></el-table-column>
		 				
		 			</el-table>
		 		</center>
		 	</div>
		 
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				years:'2018',
				list:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/cost"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.list=res.data;
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
