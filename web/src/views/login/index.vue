<template>
  <div class="login">
    <el-card class="transition-box">
      <p style="text-align:left">请先登录</p>
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="100px"
        @submit.native.prevent="login"
        class="demo-form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import http from "@/axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: { required: true, message: "请输入用户名", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" }
      }
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          http.post("/login", this.form).then(res => {
            if (res.code === 200) {
              this.$message.success(`welecome ${res.data.username} !`);
              this.$store.commit("SET_USER_NAME", res.data.username);

              localStorage.setItem("token", res.token);
              localStorage.setItem("username", res.data.username);

              this.$router.push("/");
            } else {
              this.$message.error(res.message);
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: #606266;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-card {
}
.demo-form {
  padding: 20px 40px;
}
</style>