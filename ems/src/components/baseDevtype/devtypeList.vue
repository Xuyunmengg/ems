<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">设备类别信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='设备类别' v-model='search_typename'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="typeid" label="ID" width="80"></el-table-column>
				<el-table-column prop="typename" label="设备名称" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.typeid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				search_typename:'',
				list:[]
			};
		},
		methods:{
			del(typeid){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/delete"
				// 传递给后端的数据
				var data = {typeid:typeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.fn();
				})
			},
			fn(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list=res.data;
				})
			},
		search(){
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/search"
			// 传递给后端的数据
			var data = {typename:this.search_typename};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data;
			})
		},
			add(){
					this.$router.push({path:'/devtypeAdd'});
				},
			
			update(row){
				this.$router.push({name:'devtypeEdit',params:{row:row}})
			}
			
		},
		mounted:function(){
			this.fn()
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
