<!-- html部分 -->
<template>
	<div id="app" style="height: 600px;">
		<h1>设备信息</h1>
		<!-- <hr id="hh" /> -->
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='用户名' v-model='search_devname'></el-input>
			
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<div>
			<center>
				<el-table :data="list">
					<el-table-column prop="devid" label="ID" width="80"></el-table-column>
					<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
					<el-table-column prop="baseDevtype.typename" label="设备类别" width="120"></el-table-column>
					<el-table-column prop="devdate" label="投入时间" width="120"></el-table-column>
					<el-table-column prop="baseCompany.compname" label="所属企业" width="120"></el-table-column>
					<el-table-column prop="devuser" label="责任人" width="120"></el-table-column>
					
					<el-table-column label="操作" width="230">
						<template slot-scope="scope">
							<el-button size="mini" @click="update(scope.row)">编辑</el-button>
							<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
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
				search_devname:'',
				list:[]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/deviceAdd'});
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
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
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/search"
				// 传递给后端的数据
				var data = {devname:this.search_devname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.list=res.data;
				})
			},
			update(row){
				this.$router.push({name:'deviceEdit',params:{row:row}});
			},
			fn(){
					// 后端网址
					var url = this.baseUrl+"/baseDevice/list"
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

</style>
