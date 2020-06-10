<template>
	<el-aside width="200px" id="aside">
		<el-menu 
			router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <span slot="title">Admin</span>
      </el-menu-item>
      
    </el-menu>
  </el-aside>
</template>

<script>
	export default{
		name: 'MyAside'
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