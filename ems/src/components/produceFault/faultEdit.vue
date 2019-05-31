<!-- html部分 -->
<template>
	<div>
		<h1>修改故障信息</h1>
		<el-row>
		  <el-col :span="12">
			  <el-select v-model="devid" style='width: 300px;margin-top: 20px;'>
			  	<el-option v-for="item in devArr" :label="item.devname" :value="item.devid"></el-option>
			  </el-select>
		  </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间' v-model='faulttime'></el-input> </el-col>
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				faultId:'',
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				devArr:[]
			
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data ={faultId:this.faultId,devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/faultList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceFault/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.devArr=res.data;
			})
			//接受路由传递的数据
			var obj = this.$route.params.row;
					this.faultId = obj.faultId;
					this.devid = obj.devid;
					this.cause = obj.cause;
					this.faultuser = obj.faultuser;
					this.faulttime = obj.faulttime;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
