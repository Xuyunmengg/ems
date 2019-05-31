<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">企业信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width:160px' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='seach'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		
		<div style="text-align: center;">
				<center>
					<el-table :data="list">
						<el-table-column prop="compid" label="ID" width="80"></el-table-column>
						<el-table-column prop="compname" label="公司名称" width="120"></el-table-column>
						<el-table-column prop="contacts" label="联系人" width="120"></el-table-column>
						<el-table-column prop="comptel" label="联系电话" width="120"></el-table-column>
						<el-table-column prop="industry" label="行业" width="180"></el-table-column>
						<el-table-column prop="address" label="地址" width="180"></el-table-column>
						<el-table-column label="操作" width="230">
							<template slot-scope="scope">
								<el-button size="mini" @click="update(scope.row)">编辑</el-button>
								<el-button size="mini" type='danger' @click="del(scope.row.compid)">删除</el-button>
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
				search_compname:'',
				search_industry:'',
				list:[]
			};
		},
		methods:{
				add(){
					this.$router.push({path:'/CompAdd'});
				},
				
				del(compid){
					// 后端网址
					var url = this.baseUrl+"/baseCompany/delete"
					// 传递给后端的数据
					var data = {compid:compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("删除成功");
						this.seach()
					})
				},
					fn(){
					// 后端网址
						var url = this.baseUrl+"/baseCompany/list"
						// 传递给后端的数据
						this.$axios.post(url,{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.list=res.data;
						})
				},
				update(row){
					this.$router.push({name:'CompEdit',params:{row:row}});
				},
				seach(){
					// 后端网址
					var url = this.baseUrl+"/baseCompany/search"
					// 传递给后端的数据
					var data = {compname:this.search_compname,industry:this.search_industry};
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
			this.seach()
	
		}
	}
</script>
<!-- css部分 -->
<style>
	#hh{
		color:#52bab5;margin: 10px 0;
	}
	
</style>
