<template>
  <div class="fund">
    <p class="page-tab-title">{{tabFlag == 0 ? '非银行间项目库' : '基金对比'}}</p>
    <div class="content-wrap">
      <nav class="nav-line">
        <router-link :to="{name:'fundIndex'}" class="nav-item nav-fund" @click.native="tabFlag = 0"> 基金推荐 </router-link>
        <router-link :to="{name:'fundCompare'}" class="nav-item nav-project" @click.native="tabFlag = 1"> 项目对比
          <span v-show="hasTips" class="tips">2</span>
        </router-link>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Fund',
    data(){
      return{
        tabFlag: 0,
        tabTitle: '非银行间项目库',
        hasTips: true
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

  .router-link-active{
    @include btn-ac
  }
  .content-wrap{
    padding: 20px $padding-side;
  }
  .nav-line{
    display: flex;
    justify-content: flex-start;
  }
  .nav-item{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 70px;
    height: 28px;
    text-align: center;
    line-height: 26px;
    @include default-border;
    &:hover{
      background: $btn-ac-bg;
      color: #fff;
      .tips{
        border-color: #fff;
      }
    }
    .tips{
      position: absolute;
      top: -8px;
      right: -8px;
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #ff8b0e;
      border-radius: 100%;
      font-size: $fz-sr;
      text-align: center;
      line-height: 16px;
      @include btn-ac;
      transition: all .2s;
    }
  }
  .router-link-active .tips{
    border-color: #fff;
  }
  .nav-fund{
    margin-right: 20px;
  }
  .content{
    width: 100%;
    margin-top: 20px;
  }

</style>
