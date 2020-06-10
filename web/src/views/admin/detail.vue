<template>
	<div class="detail">
		<p>{{id?'修改': '添加'}}</p>
		<el-form ref="form" :model="form" label-width="80px" inline>
		  <el-form-item label="姓名">
		    <el-input v-model="form.username"></el-input>
		  </el-form-item>
		  <el-form-item label="密码">
		    <el-input v-model="form.password"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">{{id?'保存': '添加'}}</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>


<script>
import http from '@/axios'
	export default {
		name: 'AdminDetail',
		data() {
			return {
				id: this.$router.query.id,
				form: {
					
				}
			}
		},
		created(){
			this.id&&this.init()
		},
		methods: {
			init() {
				http.get('/login/detail/' + this.id).then(res => {
					this.form = res.data
				})
			},
			onSubmit() {
				if(this.id) {
					this.changeForm()
				}else{
					this.addForm()
				}
			},
			addForm() {
				http.post('/login/create', this.form).then(res => {
					this.$message('添加成功')
					this.$router.push({
						path: '/admin'
					})
				})
			},
			changeForm() {
				http.put('/login/update/' + this.form.id, this.form).then(res => {
					this.$message('修改成功')
					this.$router.push({
						path: '/admin'
					})
				})
			}
		}
	}



</script>

<style>
	
</style>