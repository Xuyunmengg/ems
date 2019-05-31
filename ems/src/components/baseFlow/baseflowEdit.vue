<!-- html部分 -->
<template>
	<div>
		<h1>修改流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' v-model='flowname'></el-input> </el-col>
		  <el-col :span="12">
			  <el-select v-model="dljid" style='width: 300px;margin-top: 20px;'  placeholder='请输入斗轮机'>
			  		<el-option v-for="item in dljArr" :label="item.devname" :value="item.devid">{{item.devname}}</el-option>
			  </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12">
			  <el-select v-model="zcjid" style='width: 300px;margin-top: 20px;' placeholder='请输入装船机'>
			  		<el-option v-for="obj in zcjArr" :label="obj.devname" :value="obj.devid">{{obj.devname}}</el-option>
			  </el-select>
		  </el-col>
		  <el-col :span="12">
		  	  <el-select v-model="pdjid" style='width: 300px;margin-top: 20px;' placeholder='请输入皮带机'>
		  		<el-option v-for="ii in pdjArr" :label="ii.devname" :value="ii.devid">{{ii.devname}}</el-option>
		  	  </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
				<el-select v-model="compid" style='width: 300px;margin-top: 20px;'>
					<el-option v-for="vv in compArr" :label="vv.compname" :value="vv.compid"></el-option>
				</el-select>
		  </el-col>
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
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				dljArr:[],
				zcjArr:[],
				pdjArr:[],
				compArr:[]
			
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/update"
				// 传递给后端的数据
				var data ={flowid:this.flowid,flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,
							compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/baseflowList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.dljArr=res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.zcjArr=res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.pdjArr=res.data;
			})
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
					this.flowid = obj.flowid;
					this.flowname = obj.flowname;
					this.dljid = obj.dljid;
					this.zcjid = obj.zcjid;
					this.pdjid = obj.pdjid;
					this.compid = obj.compid;
					
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
