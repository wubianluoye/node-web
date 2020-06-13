<template>
  <div class="home">
    <router-link to="/admin/create">
      <el-button type="primary">添加</el-button>
    </router-link>

    <el-table :data="list" @row-click="goDetail" style="width: 100%" border stripe>
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
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
  name: "AdminList",
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      pageInit: {
        currpage: 1,
        page_size: 5,
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
      http.get("/admin?page=" + this.pageInit.currpage).then(res => {
        if (res.code === 200) {
          this.pageInit = res.page;
          this.list = res.result || [];
        }
      });
    },
    changePage(v) {
      this.pageInit.currpage = v;
      this.init(this.pageInit.currpage);
    },
    goDetail(row) {
      this.$router.push({
        path: "/admin/edit/" + row.id,
        params: {
          id: row.id
        }
      });
    },
    del(row) {
      this.$confirm(`确定删除'${row.username}'?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(() => {
        http.delete("/admin/" + row.id).then(res => {
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