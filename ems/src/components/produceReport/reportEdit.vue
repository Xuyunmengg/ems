<!-- html部分 -->
<template>
	<div>
		<h1>修改报岗信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入装载量(吨)' v-model='capacity'></el-input> </el-col>
		</el-row>
		<el-row>
		  
		 <el-col :span="12">
			 <div class="block">
				<el-date-picker v-model="planjobtime"  type="datetime" placeholder="选择日期时间" 
					style='width:300px;margin-top: 20px;' value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
			</div>
		 </el-col>	
		 
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报岗人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12">
			  <el-select v-model="compid" style='width: 300px;margin-top: 20px;'>
			  		<el-option v-for="item in compArr" :label="item.compname" :value="item.compid"></el-option>
			  </el-select>
		  </el-col>
		  
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				reportid:'',
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				compid:'',
				compArr:[]
			
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data ={reportid:this.reportid,compid:this.compid,shipname:this.shipname,capacity:this.capacity,
							planjobtime:this.planjobtime,reportuser:this.reportuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/reportList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.compArr=res.data;
			})
			//接受路由传递的数据
			var obj = this.$route.params.row;
					this.reportid = obj.reportid;
					this.shipname = obj.shipname;
					this.capacity = obj.capacity;
					this.planjobtime = obj.planjobtime;
					this.reportuser = obj.reportuser;
					this.compid = obj.compid;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
