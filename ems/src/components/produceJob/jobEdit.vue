<!-- html部分 -->
<template>
	<div>
		<h1>修改作业信息</h1>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="devid" style='width: 300px;margin-top: 20px;'>
					<el-option v-for="item in devArr" :label="item.devname" :value="item.devid"></el-option>
			</el-select>
		  </el-col>
		 
		  	<el-date-picker v-model="starttime"  type="datetime" placeholder="开始作业时间" 
		  		style='width:300px;margin-top: 20px;' value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
		 
		</el-row>
		<el-row>
		 <el-col :span="12">
			 <div class="block">
				<el-date-picker v-model="completetime"  type="datetime" placeholder="结束作业时间" 
					style='width:300px;margin-top: 20px;' value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
			</div>
		 </el-col>	 
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入运行时长' v-model='duration'></el-input> </el-col>
		</el-row>
		<el-row>
		   <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入作业量' v-model='amount'></el-input> </el-col>
		   <el-col :span="12">
			   <el-select v-model="reportid" style='width: 300px;margin-top: 20px;'>
			   		<el-option v-for="item in reportArr" :label="item.reportid" :value="item.reportid"></el-option>
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
				devid:'',
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
				reportArr:[],
				devArr:[]
			
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/update"
				// 传递给后端的数据
				var data ={jobid:this.jobid,devid:this.devid,starttime:this.starttime,completetime:this.completetime,
							duration:this.duration,amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/jobList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceReport/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.reportArr=res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.devArr=res.data;
			})
			//接受路由传递的数据
			var obj = this.$route.params.row;
					this.jobid = obj.jobid;
					this.devid = obj.devid;
					this.starttime = obj.starttime;
					this.completetime = obj.completetime;
					this.duration = obj.duration;
					this.amount = obj.amount;
					this.reportid = obj.reportid;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
