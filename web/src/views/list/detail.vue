<template>
  <div class="detail">
    <p>{{id?'修改': '添加'}}</p>
    <el-form ref="form" :model="form" label-width="110px" inline>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.male">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="习惯">
        <el-input v-model="form.hobby"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{id?'保存': '添加'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import http from "@/axios";

export default {
  name: "ListDetail",
  data() {
    return {
      id: this.$route.params.id,
      form: {
        male: 0
      }
    };
  },
  created() {
    this.id && this.init();
  },
  methods: {
    init() {
      http.get("/user/" + this.id).then(res => {
        this.form = res.data;
      });
    },
    onSubmit() {
      if (this.id) {
        this.changeForm();
      } else {
        this.addForm();
      }
    },
    addForm() {
      http.post("/user", this.form).then(res => {
        this.$message("添加成功");
        this.$router.push({
          path: "/index"
        });
      });
    },
    changeForm() {
      http.put("/user/" + this.form.id, this.form).then(res => {
        this.$message("修改成功");
        this.$router.push({
          path: "/index"
        });
      });
    }
  }
};
</script>

<style>
</style>