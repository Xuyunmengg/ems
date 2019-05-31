<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">修改设备类别</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> </el-col>
		  <el-col :span="12"> 
				<el-select v-model="typeid" style='width: 300px;margin-top: 20px;' placeholder='请输入投入设备类别'>
					<el-option v-for="item in typeArr" :label="item.typename" :value="item.typeid">{{item.typename}}</el-option>
				</el-select>
		  </el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12">
			  <el-col :span="12"><el-date-picker style='width: 300px; margin-top: 20px;' v-model="devdate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
			  		value-format="yyyy-MM-dd"> </el-date-picker> 
			  </el-col>
		  </el-col>
		  <el-col :span="12">
				<el-select v-model="compid" style='width: 300px;margin-top: 20px;' placeholder='请输入投入公司名称'>
					<el-option v-for="obj in compArr" :label="obj.compname" :value="obj.compid">{{obj.compname}}</el-option>
				</el-select>
		  </el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
		  <el-col :span="12"></el-col>
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
				typeid:'',
				compid:'',
				devname:'',
				devdate:'',
				devuser:'',
				devid:'',
				typeArr:[],
				compArr:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data ={devid:this.devid,typeid:this.typeid,compid:this.compid,devname:this.devname,devdate:this.devdate,devuser:this.devuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/deviceList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			},
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
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.typeArr=res.data;
			})
			//接受路由传递的数据
			var obj = this.$route.params.row;
			
					this.devid = obj.devid;
					this.typeid = obj.typeid;
					this.compid = obj.compid;
					this.devname = obj.devname;
					this.devdate = obj.devdate;
					this.devuser = obj.devuser;
					
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
