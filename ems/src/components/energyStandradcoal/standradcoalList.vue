<!-- html部分 -->
<template>
	<div id="app" style="height: 600px;">
		<h1>折标煤系数</h1>
		<!-- <hr id="hh" /> -->
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='能源类别' v-model='energetype'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<div>
			<center>
				<el-table :data="list">
					<el-table-column prop="sid" label="ID" width="80"></el-table-column>
					<el-table-column prop="energetype" label="能源类别" width="120"></el-table-column>
					<el-table-column prop="ratio" label="系数" width="120"></el-table-column>
		
					<el-table-column label="操作" width="230">
						<template slot-scope="scope">
							<el-button size="mini" @click="update(scope.row)">编辑</el-button>
							<el-button size="mini" type='danger' @click="del(scope.row.sid)">删除</el-button>
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
				energetype:'',
				list:[]
			};
		},
		methods:{
			add(){
					this.$router.push({path:'/standradcoalAdd'});
				},
			
				del(sid){
					// 后端网址
					var url = this.baseUrl+"/energyStandradcoal/delete"
					// 传递给后端的数据
					var data = {sid:sid};
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
					this.$router.push({name:'standradcoalEdit',params:{row:row}});
				},
				search(){
					// 后端网址
					var url = this.baseUrl+"/energyStandradcoal/search"
					// 传递给后端的数据
					var data = {energetype:this.energetype};
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
					var url = this.baseUrl+"/energyStandradcoal/list"
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
