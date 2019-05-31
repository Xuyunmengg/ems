<!-- html部分 -->
<template>
	<div>
		<h1>添加流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入流程名称' v-model='flowname'></el-input> </el-col>
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
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				dljArr:[],
				zcjArr:[],
				pdjArr:[]
			
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data ={flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
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
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
