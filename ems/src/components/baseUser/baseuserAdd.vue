<!-- html部分 -->
<template>
	<div>
		<h1>添加公司信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='cname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户名' v-model='username'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入email' v-model='email'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入性别' v-model='sex'></el-input> </el-col>
		</el-row>
		<el-row >
			<el-col :span="12">
				  <el-select v-model="compid" style='width: 300px;margin-top: 20px;'>
					<el-option v-for="item in selArr" :label="item.compname" :value="item.compid"></el-option>
				  </el-select>
			</el-col>
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
				compid:'',
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				selArr:[]
			
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/insert"
				// 传递给后端的数据
				var data ={compid:this.compid,userid:this.userid,cname:this.cname,username:this.username,email:this.email,
							password:this.password,telno:this.telno,sex:this.sex};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseuserList'});
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
					this.selArr=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
