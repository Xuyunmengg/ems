<!-- html部分 -->
<template>
	<div>
		<h1>添加能耗信息</h1>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="devid" style='width: 300px;margin-top: 20px;'>
					<el-option v-for="item in devArr" :label="item.devname" :value="item.devid"></el-option>
			</el-select>
		  </el-col>
		 
		  	<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电耗(kw.h)' v-model='electric'></el-input> </el-col>
		</el-row>
		<el-row>
		 <el-col :span="12">
			  <el-input style='width:300px;margin-top: 20px;' placeholder='请输入水耗(吨)' v-model='water'></el-input>
		 </el-col>	 
		  <el-col :span="12"> 
				<el-input style='width:300px;margin-top: 20px;' placeholder='请输入油耗(L)' v-model='oil'></el-input> 
		  </el-col>
		</el-row>
		<el-row>
		   <el-col :span="12">
			   <el-select v-model="reportid" style='width: 300px;margin-top: 20px;'>
			   		<el-option v-for="item in reportArr" :label="item.reportid" :value="item.reportid"></el-option>
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
				devid:'',
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				reportArr:[],
				devArr:[]
			
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/insert"
				// 传递给后端的数据
				var data ={devid:this.devid,electric:this.electric,water:this.water,
							oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/consumeList'});
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
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
