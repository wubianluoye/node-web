<template>
	<div class="pagination-box">
		<el-pagination
			:disabled="disabled"
	    :background="background"
	    :layout="layout"
	    :current-page="curr_page"
	    :page-size="page_size"
	    :total="total"
	    :hide-on-single-page="hideOnSinglePage"
	    @current-change="change"
	    >
	  </el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'Pagination',
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			background: {
				type: Boolean,
				default: false
			},
			layout: {
				type: String,
				default(){
					return 'prev, pager, next'
				}
			},
			hideOnSinglePage: {
				type: Boolean,
				default: true
			},
			pageInfo: {
				type: Object,
				default() {
					return {
						curr_page: 1,
						page_size: 5,
						total: 0
					}
				}
			}
		},
		data() {
			return {
				curr_page: 1,
				page_size: 5,
				total: 0
			}
		},
		watch: {
			pageInfo(v) {
				this.curr_page = v.curr_page
				this.page_size = v.page_size
				this.total = v.total
			}
		},
		methods: {
			change(v) {
				this.$emit('change',v)
			}
		}
	}
</script>