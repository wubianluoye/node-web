<template>
	<el-aside width="200px" id="aside">
		<el-menu 
			router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="item in sideRouters()" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
      
    </el-menu>
  </el-aside>
</template>

<script>
	import { routes } from '@/router'
	export default{
		name: 'MyAside',
		methods: {
			sideRouters(){
				const asideList = []
				this.flatArr(routes, asideList)
				return asideList
			},
			flatArr(arr, res) {
				arr.forEach(v => {
					if(!v.hidden && (v.meta && v.meta.title && !v.meta.isPublic)) {
						res.push(v)
					}
					if(v.children && v.children.length) {
						this.flatArr(v.children, res)
					}
				})
			}
		}
	}

</script>

<style>
	#aside{
		height: 100%;
		overflow-x: hidden; 
		overflow-y: auto;
		background-color: rgb(84, 92, 100);
	}
	#aside .el-menu{
		width: 100%;
	}
</style>