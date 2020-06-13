<template>
  <div class="home">
    <router-link to="/index/create">
      <el-button type="primary">添加</el-button>
    </router-link>

    <el-table :data="list" @row-click="goDetail" style="width: 100%" border stripe>
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">{{scope.row.male?'男':'女'}}</template>
      </el-table-column>
      <el-table-column prop="hobby" label="习惯"></el-table-column>
      <el-table-column prop="mobile" label="手机号"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click.stop="del(scope.row)" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :page-info="pageInit" background @change="changePage"></pagination>
  </div>
</template>
<script>
// @ is an alias to /src
import http from "@/axios";
import Pagination from "@/components/Pagination";

export default {
  name: "UserList",
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      pageInit: {
        currpage: 1,
        limit: 5,
        total: 0
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(page = 1) {
      this.pageInit.currpage = page;
      http.get("/user?page=" + this.pageInit.currpage).then(res => {
        if (res.code === 200) {
          this.pageInit = res.page;
          this.list = res.result || [];
        }
      });
    },
    changePage(v) {
      this.init(v);
    },
    goDetail(row) {
      this.$router.push({
        path: "/index/edit/" + row.id,
        params: {
          id: row.id
        }
      });
    },
    del(row) {
      this.$confirm(`确定删除'${row.name}'?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(() => {
        http.delete("/user/" + row.id).then(res => {
          this.$message({
            message: "删除成功！",
            duration: 2000
          });
          this.init();
        });
      });
    }
  }
};
</script>