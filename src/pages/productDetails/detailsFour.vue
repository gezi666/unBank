<template>
  <div class="details-four">
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%"
      :default-sort="{prop: 'data', order: 'descending'}"
    >
      <el-table-column
        width="70"
        label="序号"
        type="index">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="630">
      </el-table-column>
      <el-table-column
        prop="source"
        label="来源"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="sourceClassify"
        label="来源分类"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        sortable
        label="时间"
        width="150"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//  import * as api from '@/api/api'
  export default {
    name: 'index',
    data () {
      return {
        fundId:"",
        fundName:"",
        sortFlag:true,
        sortKey:"0",
        tableData: [
          {
            title: '中江信托-金虎274号怎么样',
            source: '选信托网',
            sourceClassify: '贴吧',
            date: '2007.05.03'
          },
          {
            title: '金虎274号张家口市城市建设集合资金信托计划不靠谱啊',
            source: '新浪微博',
            sourceClassify: '微博',
            date: '2007.05.04'
          },
          {
            title: '中江信托暂停多地政信业务 遭遇转型困境',
            source: '新浪财经',
            sourceClassify: '网站',
            date: '2007.05.05'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.06'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.07'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.08'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.09'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.10'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.11'
          },
          {
            title: '463文件难阻地方政府兜底 中江国际信托产品遭曝光',
            source: '搜狐资讯',
            sourceClassify: '网站',
            date: '2007.05.12'
          }
        ],
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .details-four {
    min-height: 440px;
  }
</style>
