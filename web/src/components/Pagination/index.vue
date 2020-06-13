<template>
  <div class="pagination-box">
    <el-pagination
      :disabled="disabled"
      :background="background"
      :layout="layout"
      :current-page="pageInfo.currpage"
      :page-size="pageInfo.limit"
      :total="pageInfo.total"
      @current-change="change"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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
      default() {
        return "prev, pager, next";
      }
    },
    pageInfo: {
      type: Object,
      default() {
        return {
          currpage: 1,
          limit: 5,
          total: 0
        };
      }
    }
  },
  methods: {
    change(v) {
      this.$emit("change", v);
    }
  }
};
</script>