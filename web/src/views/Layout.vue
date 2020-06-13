<template>
  <el-container class="ctr">
    <el-header class="heads">
      <div class="head">
        <p>header</p>
      </div>
      <el-dropdown class="right" trigger="click">
        <span class="el-dropdown-link">
          {{$store.state.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
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
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MyAside from "@/components/aside";

export default {
  name: "Layout",
  components: {
    MyAside
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

.ctr {
  height: 100%;
}
.heads {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.head {
  flex-grow: 1;
  flex-shrink: 1;
}
.right {
  align-self: flex-end;
}
</style>
