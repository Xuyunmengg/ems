import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import CompList from '@/components/baseInfo/CompList'
import baseuserList from '@/components/baseUser/baseuserList'
import baseuserEdit from '@/components/baseUser/baseuserEdit'
import baseuserAdd from '@/components/baseUser/baseuserAdd'
import Welcome from '@/components/home/Welcome'
import dog from '@/components/dog/dog'
import dog1 from '@/components/dog/dog1'
import dog2 from '@/components/dog/dog2'
import parent from '@/components/dog/parent'
import color from '@/components/color/color'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import devtypeList from '@/components/baseDevtype/devtypeList'
import devtypeAdd from '@/components/baseDevtype/devtypeAdd'
import devtypeEdit from '@/components/baseDevtype/devtypeEdit'
import deviceList from '@/components/baseDevice/deviceList'
import deviceAdd from '@/components/baseDevice/deviceAdd'
import deviceEdit from '@/components/baseDevice/deviceEdit'

import Login from '@/components/home/Login'

import baseflowList from '@/components/baseFlow/baseflowList'
import baseflowAdd from '@/components/baseFlow/baseflowAdd'
import baseflowEdit from '@/components/baseFlow/baseflowEdit'
import faultList from '@/components/produceFault/faultList'
import faultAdd from '@/components/produceFault/faultAdd'
import faultEdit from '@/components/produceFault/faultEdit'
import repairList from '@/components/produceRepair/repairList'
import repairAdd from '@/components/produceRepair/repairAdd'
import repairEdit from '@/components/produceRepair/repairEdit'
import reportList from '@/components/produceReport/reportList'
import reportAdd from '@/components/produceReport/reportAdd'
import reportEdit from '@/components/produceReport/reportEdit'
import Control from '@/components/produceReport/Control'
import jobList from '@/components/produceJob/jobList'
import jobAdd from '@/components/produceJob/jobAdd'
import jobEdit from '@/components/produceJob/jobEdit'
import standradcoalList from '@/components/energyStandradcoal/standradcoalList'
import standradcoalAdd from '@/components/energyStandradcoal/standradcoalAdd'
import standradcoalEdit from '@/components/energyStandradcoal/standradcoalEdit'
import consumeList from '@/components/energyConsume/consumeList'
import consumeAdd from '@/components/energyConsume/consumeAdd'
import consumeEdit from '@/components/energyConsume/consumeEdit'
import JobAmount from '@/components/reports/JobAmount'
import EnergyConsume from '@/components/reports/EnergyConsume'
import EnergyModel from '@/components/reports/EnergyModel'
import usage from '@/components/DevInfo/usage'
import intactRatio from '@/components/DevInfo/intactRatio'
import consume from '@/components/DevInfo/consume'
import cost from '@/components/DevInfo/cost'


Vue.use(Router)

export default new Router({
  routes: [
	  {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',name: 'Index',component: Index,children:[
				
				{path:'CompList',component:CompList},
				{path:'CompAdd',component:CompAdd},
				{path:'CompEdit',component:CompEdit,name:"CompEdit"},
				{path:'baseuserList',name:'baseuserList',component:baseuserList},
				{path:'baseuserEdit',name:'baseuserEdit',component:baseuserEdit},
				{path:'baseuserAdd',component:baseuserAdd},
				{path:'devtypeList',name:'devtypeList',component:devtypeList},
				{path:'devtypeEdit',name:'devtypeEdit',component:devtypeEdit},
				{path:'devtypeAdd',component:devtypeAdd},
				{path:'deviceList',name:'deviceList',component:deviceList},
				{path:'deviceAdd',name:'deviceAdd',component:deviceAdd},
				{path:'deviceEdit',name:'deviceEdit',component:deviceEdit},
				{path:'baseflowList',name:'baseflowList',component:baseflowList},
				{path:'baseflowAdd',name:'baseflowAdd',component:baseflowAdd},
				{path:'baseflowEdit',name:'baseflowEdit',component:baseflowEdit},
				{path:'faultList',name:'faultList',component:faultList},
				{path:'faultAdd',name:'faultAdd',component:faultAdd},
				{path:'faultEdit',name:'faultEdit',component:faultEdit},
				{path:'repairList',name:'repairList',component:repairList},
				{path:'repairAdd',name:'repairAdd',component:repairAdd},
				{path:'repairEdit',name:'repairEdit',component:repairEdit},
				{path:'reportList',name:'reportList',component:reportList},
				{path:'reportAdd',name:'reportAdd',component:reportAdd},
				{path:'reportEdit',name:'reportEdit',component:reportEdit},
				{path:'Control',name:'Control',component:Control},
				{path:'jobList',name:'jobList',component:jobList},
				{path:'jobAdd',name:'jobAdd',component:jobAdd},
				{path:'jobEdit',name:'jobEdit',component:jobEdit},
				{path:'standradcoalList',name:'standradcoalList',component:standradcoalList},
				{path:'standradcoalAdd',name:'standradcoalAdd',component:standradcoalAdd},
				{path:'standradcoalEdit',name:'standradcoalEdit',component:standradcoalEdit},
				{path:'consumeList',name:'consumeList',component:consumeList},
				{path:'consumeAdd',name:'consumeAdd',component:consumeAdd},
				{path:'consumeEdit',name:'consumeEdit',component:consumeEdit},
				{path:'JobAmount',name:'JobAmount',component:JobAmount},
				{path:'EnergyConsume',name:'EnergyConsume',component:EnergyConsume},
				{path:'EnergyModel',name:'EnergyModel',component:EnergyModel},
				{path:'usage',name:'usage',component:usage},
				{path:'intactRatio',name:'intactRatio',component:intactRatio},
				{path:'consume',name:'consume',component:consume},
				{path:'cost',name:'cost',component:cost},
				{path:'/',component:Welcome}
				
			]
    },
		{
		  path: '/dog', name: 'dog',component:dog,children:[
					{path:'dog1',component:dog1},
					{path:'dog2',component:dog2}
				
			]},
			{
				path:'/parent',name:'parent',component:parent
			},
			{
				path:'/color',name:'color',component:color
			}
			
  ]
})
