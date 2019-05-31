import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={

tags:[
	  { name: '首页', type: 'info',url:'/' ,index:'101'}
	],
	
	defaultIndex:'101',
	LoginFlag:false
}
// mutations对象用来存储方法
var mutations = {

	addtag(state,obj){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info'
		}
		//重复的不在添加
		for(var item of state.tags){
			if(item.name==obj.name){
				item.type='warning'
				return;
			}
		}
		state.tags.push(obj);
	},
	change(state,index){
		state.defaultIndex==index
	},
	updateTag(state,index){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info';
		}
		// 把index对应的改成warning
		state.tags[index].type='warning';
	},
	delTag(state,index){
		state.tags.splice(index,1);
	}

}
	
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})