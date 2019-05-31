<!-- html部分 -->
<template>
	<div id="app" style="height: 600px;">
		<h1>能耗信息</h1>
		<!-- <hr id="hh" /> -->
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='电耗(kw.h)' v-model='electric'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<div>
			<center>
				<el-table :data="list">
					<el-table-column prop="consumeid" label="ID" width="80"></el-table-column>
					<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
					<el-table-column prop="electric" label="电耗(kw.h) " width="120"></el-table-column>
					<el-table-column prop="water" label="水耗(吨) " width="120"></el-table-column>
					<el-table-column prop="oil" label="油耗(L) " width="120"></el-table-column>
					<el-table-column prop="reportid" label="报岗id" width="120"></el-table-column>
		
					<el-table-column label="操作" width="230">
						<template slot-scope="scope">
							<el-button size="mini" @click="update(scope.row)">编辑</el-button>
							<el-button size="mini" type='danger' @click="del(scope.row.consumeid)">删除</el-button>
						</template>
					</el-table-column>
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
				electric:'',
				list:[]
			};
		},
		methods:{
			add(){
					this.$router.push({path:'/consumeAdd'});
				},
			
				del(consumeid){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/delete"
					// 传递给后端的数据
					var data = {consumeid:consumeid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("删除成功");
						this.fn()
					})
				},
				update(row){
					this.$router.push({name:'consumeEdit',params:{row:row}});
				},
				search(){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/search"
					// 传递给后端的数据
					var data = {electric:this.electric};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						
						this.list=res.data;
					})
				},
				
				fn(){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/list"
					// 传递给后端的数据
					this.$axios.post(url,{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list=res.data;
					})
				}
				
		},
		mounted:function(){
			this.fn()
			
		}
	}
</script>
<!-- css部分 -->
<style>
	#hh{
		color:#52bab5;margin: 10px 0;
	}
	
</style>
