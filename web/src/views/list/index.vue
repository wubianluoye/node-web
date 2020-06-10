<template>
  <div class="home">
  	<router-link to="/list/create">
  		<el-button type="primary">添加</el-button>
  	</router-link>

    <el-table
      :data="list"
      @row-click="goDetail"
      style="width: 100%" border stripe>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="sex" label="性别">
      	<template slot-scope="scope">
      		{{scope.row.sex?'男':'女'}}
      	</template>
      </el-table-column>
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
import http from '@/axios'
import Pagination from '@/components/Pagination'

export default {
  name: 'UserList',
  components: {
    Pagination
  },
  data() {
  	return {
  		list: [],
  		pageInit: {
  			curr_page: 1,
  			page_size: 5,
  			total: 0
  		}
  	}
  },
  created() {
  	this.init()
  },
  methods: {
  	init(page=1) {
      this.pageInit.curr_page = page
  		http.get('/user?page=' + this.pageInit.curr_page).then(res => {
        if(res.code === 200) {
          this.pageInit = res.page
          this.list = res.result || []
        }
  		})
  	},
    changePage(v) {
      this.pageInit.curr_page = v
      this.init(this.pageInit.curr_page)
    },
  	goDetail(row) {
  		this.$router.push({
  			path: '/list/detail/' + row.id,
  			params: {
  				id: row.id
  			}
  		})
  	},
  	del(row) {
  		this.$confirm(`确定删除'${row.name}'?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          http.delete('/user/' + row.id).then(res => {
		  			this.$message({
		  				message: '删除成功！',
		  				duration: 2000
		  			})
		  			this.init()
		  		})
        })
  	}
  }
}
</script>