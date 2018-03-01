<template>
  <div class="diy-temp-wrap">
    <ul class="temp-ul">
      <li class="temp-head">
        <span class="first-col">优先排序</span>
        <span>配置</span>
      </li>
      <li class="temp-item" v-for="i in 9">
        <slot :name="i"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'diyTemp',
    data(){
      return{

      }
    },
    mounted(){
    },
    methods:{
    },
    components:{
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .diy-temp-wrap{
    width: 100%;
  }
  ul.temp-ul{
    width: 100%;
    font-size: 14px;
    color: #666;
    li{
      width: 100%;
      border-bottom: $common-border;
    }
    .temp-head{
      height: 50px;
      background: $df-bg-color;
      border-top: none;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
    }
    .temp-head span{
      box-sizing: border-box;
      padding-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .first-col{
      width: 266px;
      flex: none;
    }
  }
</style>
