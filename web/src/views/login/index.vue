<template>
  <div class="login">
    <el-card>
      <p style="text-align:left">请先登录</p>
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.submit="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>

import http from '@/axios'

export default {
  name: 'Login',
  data() {
  	return {
  		form: {
        username: '',
        password: ''
      },
      rules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      }
  	}
  },
  methods: {
  	login() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          http.post('/login', this.form).then(res => {
            if(res.code === 200) {
              this.$store.commit('SET_USER_NAME', res.username)
              
              this.$message.success(`hello ${res.username} !`)
              localStorage.setItem('token',res.token)
              this.$router.push('/')
            }else{
              this.$message.error(res.code)
            }
          })
        } else {
          return false;
        }
      });
  	}
  }
}
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-form{
    padding: 20px 40px;
  }
</style>