<!-- html部分 -->
<template>
	<div>
		<h1>父组件</h1>
		<children1></children1>
		<children2></children2>
	</div>
</template>
<!-- js部分 -->
<script>
	import children1 from './children1'
	import children2 from './children2'
	export default {
		name:'',
		components:{children1,children2},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
