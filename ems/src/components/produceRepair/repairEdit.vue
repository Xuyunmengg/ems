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
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修原因 ' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修费用 ' v-model='cost'></el-input> </el-col>
			
			<el-col :span="12"><el-date-picker style='width: 300px; margin-top: 20px;' v-model="repairdate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
					value-format="yyyy-MM-dd"> </el-date-picker> 
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
				repairid:'',
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				devArr:[]
			
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data ={repairid:this.repairid,devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/repairList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceRepair/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.devArr=res.data;
			})
			//接受路由传递的数据
			var obj = this.$route.params.row;
					this.repairid = obj.repairid;
					this.devid = obj.devid;
					this.cause = obj.cause;
					this.cost = obj.cost;
					this.repairdate = obj.repairdate;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
