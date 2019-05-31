<template>
	<div>
		<!-- <h1 style="text-align: center">中控信息</h1> -->
		<div style="display: inline-block;width: 250px;margin: 10px 0 0 20px;">
			<h1>船队信息</h1>
			<el-table :data="reportList" :row-class-name="fn3" @row-click="fn2">
				<el-table-column prop="reportid" label="报岗ID" width="50"></el-table-column>
				<el-table-column prop="shipname" label="船队名称" width="100"></el-table-column>
				<el-table-column prop="status" label="状态" width="100"></el-table-column>
			</el-table>
		</div>
		<div style="display: inline-block;width: 800px;margin: 10px 0 0 20px;
			vertical-align: top;">
				<h1>中控信息</h1>
			<div style="font-size: 14px;color: #606266;">
				<el-row>
				  <el-col :span="6"><div class="grid-content bg-purple">船队名称: {{shipname}}</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light">装载量: {{capacity}}</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"> 报岗人: {{reportuser}}</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"> 预计到港时间:<br/>{{planjobtime}}</div></el-col>
				</el-row>
				<el-row style='margin-top: 20px;'>
				  <el-col :span="6" >
					   <el-select  placeholder="请选择流程"  v-model='flowid' style='width: 150px;' @change="fn4">
							<el-option v-for="item in flows" :key="item.flowid" :label="item.flowname" :value="item.flowid">
							</el-option>
					   </el-select>
				  </el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light">斗轮机{{': '+dljname}}</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"> 装船机{{': '+zcjname}}</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"> 皮带机{{': '+pdjname}}</div></el-col>
				</el-row>
				<el-row style='margin-top: 20px;'>
				  <el-col :span="6">
					  <el-date-picker  v-model="startjobtime" style='width:190px' type="datetime" placeholder="选择开始时间"
						value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
				  </el-col>
				  <el-col :span="6">
					<el-button type='primary'  :disabled="status!='未完成'" @click="start">开始作业</el-button>
				  </el-col>
				  <el-col :span="6">			
					  <el-date-picker  v-model="completetime" style='width:190px' type="datetime" placeholder="选择结束时间"
						value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
				  </el-col>
				  <el-col :span="6">
					<el-button type='success'  :disabled='status!="作业中"' @click="end">结束作业</el-button>
				  </el-col>
				</el-row>
				<div class="boat">
					<div class="wrap">
						<!-- 煤 -->
						<transition name="slide-fade">
							<div class="coal" v-if="show">&bull;</div>
						</transition>
						<!-- 皮带 -->
						<div class="strap">
						</div>
						<!-- 船 -->
						<div class="main">
							<div class="boat-mid-layer">
								<div class="top" style='padding-left:40px;color:black'>
									已装船{{count}}吨
								</div>
								<div class="bottom"></div>
							</div>
							<div class="boat-bot-layer">
								<div class="top"></div>
								<div class="bottom"></div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				startjobtime:'',
				completetime:'',
				flowid:'',
				reportid:'',
				capacity:'',
				shipname:'',
				reportuser:'',
				planjobtime:'',
				show:true,
				reportList:[],
				count:0,
				flows:[],
				timer:'',
				dljname:'',
				pdjname:'',
				zcjname:'',
				status:''
				
			}
		},
		methods:{
			fn2(row){
				this.startjobtime = row.startjobtime;
				this.completetime = row.completetime;
				this.flowid = row.flowid;
				this.reportid = row.reportid;
				this.shipname = row.shipname;
				this.capacity = row.capacity;
				this.reportuser = row.reportuser;
				this.planjobtime = row.planjobtime;
				this.status = row.status;
				if(this.flowid){
					this.fn4()
				}else{
					this.dljname = "";
					this.pdjname = "";
					this.zcjname = "";
				}
				
			},
			fn3({row}){
				if(row.status=="已完成"){
					return 'green';
				}else if(row.status=="作业中"){
					return 'yellow';
				}
				return '';
			},
			fn4(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/load"
				// 传递给后端的数据
				var data = {flowid:this.flowid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					var obj = res.data;
					this.dljname = obj.dljname;
					this.pdjname = obj.pdjname;
					this.zcjname = obj.zcjname;
				})
			},
			start(){
				// 跟后台交互，更新开始作业时间
				// 后端网址
				if(this.startjobtime){
					var url = this.baseUrl+"/produceReport/updateSelective"
					// 传递给后端的数据
					var data = {flowid:this.flowid,startjobtime:this.startjobtime,reportid:this.reportid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						//重新赋值
						this.status = '作业中';
						this.reportList=res.data;
					})
					//动画播放
					this.timer = setInterval(()=>{
						this.show = !this.show;
						this.count++;
					},2000)
				}else{
					this.$message("请输入开始时间")
				}
			},
			end(){
				// 跟后台交互，更新开始作业时间
				// 后端网址
				if(this.completetime){
					var url = this.baseUrl+"/produceReport/updateSelective"
					// 传递给后端的数据
					var data = {flowid:this.flowid,startjobtime:this.startjobtime,reportid:this.reportid,
					completetime:this.completetime,capacity:this.capacity};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						//重新赋值
						this.status = '已完成';
						this.reportList=res.data;
					})
					clearInterval(this.timer)
				}else{
				this.$message("请输入结束时间")
				}
			}
			
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceReport/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.reportList=res.data;
			})	
			
			// 后端网址
			var url2 = this.baseUrl+"/baseFlow/list"
			// 传递给后端的数据
			this.$axios.post(url2,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.flows=res.data;
			})
		}			
	}
</script>

<style>

.el-table .yellow{
	background: lightyellow;
}
.el-table .green{
	background: lightgreen;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(600px,84px);
  opacity: 1;
}
.boat{
}
.boat .wrap{
	margin:auto;width:100%;height:200px;overflow:hidden;margin-top: 30px;
	position:relative;background: darkgrey;border-radius: 10px;
}
.boat .wrap .strap{
	float: left;display: inline-block;background: lightblue;width: 600px;height: 20px;
	margin: 100px 0 0 -25px;transform:skew(20deg,8deg);/*设置倾斜度为-30*/z-index: 2;
}
.boat .wrap .main{
	margin: 100px 0 0 75%;
}
.boat .wrap  .coal{
	float: left;display: inline-block;font-size: 100px;
	margin: -10px 0 0 5px;z-index: 5;
}
.boat .boat-bot-layer .bottom:before,
.boat .boat-bot-layer .bottom:after,
.boat .water .drop:before,
.boat .water .drop:after{
	content:'';position:absolute;
}
/* middle - bottom */
.boat .boat-mid-layer .bottom{
	left:25px;width:150px;height:18px;
	background:#fff;position:relative;
}
/* bottom - bottom */
.boat .boat-bot-layer .bottom{
	width:180px;
	height:25px;
	position:relative;
	border-radius:2px;
	background:#222e28;
}
.boat .boat-bot-layer .bottom:before{
	left:-15px;
	width:25px;
	height:25px;
	background:inherit;
	border-radius:inherit;
	-webkit-transform:skewX(25deg);
	-ms-transform:skewX(25deg);
	    transform:skewX(25deg);
}
.boat .boat-bot-layer .bottom:after{
	right:-15px;
	width:25px;
	height:25px;
	background:inherit;
	border-radius:inherit;
	-webkit-transform:skewX(-25deg);
	-ms-transform:skewX(-25deg);
	    transform:skewX(-25deg);
}

</style>
