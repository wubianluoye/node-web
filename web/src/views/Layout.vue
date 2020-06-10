<template>
	<el-container class="ctr">
  <el-header>
    header
    <el-dropdown>
      <span class="el-dropdown-link">
        {{$store.state.username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="text" @click="logout">logout</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <el-container>
    <my-aside></my-aside>
    <el-container>
      <el-main>
				<router-view/>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
import MyAside from '@/components/aside'

export default {
  name: 'Layout',
  components: {
  	MyAside
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
	  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }

  .ctr{
    height: 100%;

  }
</style>
