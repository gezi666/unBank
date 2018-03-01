<template>
  <div class="fund">
    <div class="select-wrap">
      <div class="template-wrap">
        <div class="img-label">智能模板排序</div>
        <div class="template-list-wrap">
          <ul class="template-list">
            <li class="template-item" :class="[tIndex === i ? 'active' : '']" v-for="(item,i) in templateList" @click="toTemplate(i,item)">{{item}}</li>
          </ul>
          <div class="operate-wrap">
            <span class="edit-btn" @click="editTemplate">编辑模板</span>
            <span class="plus-template" @click="plusTemplate" title="添加模板"></span>
          </div>
        </div>
      </div>
      <div class="search-line">
        <div class="result-wrap">
          <p class="result-label">
            *根据“{{tempName}}”智能排列了以下 <span class="result-num">{{searchNum}}</span> 条基金项目
          </p>
        </div>
        <div class="search-box">
          <input type="text" class="search-txt" placeholder="请输入关键字查询项目">
          <span class="search-ico"></span>
        </div>
      </div>
    </div>

    <div class="fund-list-wrap">
      <ul class="list-wrap">
        <li class="fund-item" :class="[(i+1)%4 === 0 ? 'nFouth-item':'', (Math.ceil((i+1)/4) == Math.ceil(fundList.length/4)) ? 'last-line-item':'']" v-for="(item,i) in fundList">
          <p v-if="item.fundLabel=== 0" class="fund-label fLabel0">黑马基金</p>
          <p v-if="item.fundLabel=== 1" class="fund-label fLabel1">明星经理</p>
          <p v-if="item.fundLabel=== 2" class="fund-label fLabel2">五星基金</p>
          <p v-if="item.fundLabel=== 3" class="fund-label fLabel3">稳步上升</p>
          <p v-if="item.fundLabel=== 4" class="fund-label fLabel4">平稳基金</p>

          <p class="fund-name">{{item.fundName}}</p>
          <div class="index-wrap">
            <div class="num-wrap">
              <span class="index-num" :class="[item.indexChage==0 ? 'equal': item.indexChage==1 ? 'up' : item.indexChage==2 ? 'down' : '']">{{item.saleIndex}}</span>
            </div>
            <p class="index-label">热销指数</p>
          </div>
          <div class="fund-info">
            <p class="time">成立时间：{{item.fundingTime}}</p>
            <p class="total-growth">累计净值增长率：{{item.totalGrowth}}</p>
          </div>

          <p class="getDetails" @click="getFundDetails">查看详情</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fund',
    data(){
      return{
        templateList:["系统默认排序","模板一","模板二"],
        tIndex: 0,
        tempName: '系统模板',
        searchNum : 8,
        fundList: [
          {
            "fundLabel": 0, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 80,
            "indexChage": 0, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 1, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 68,
            "indexChage": 1, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 2, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 50,
            "indexChage": 2, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 3, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 90,
            "indexChage": 0, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 4, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 70,
            "indexChage": 0, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 2, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 100,
            "indexChage": 2, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          },{
            "fundLabel": 0, // 0-黑马基金；1-明星经理；2-五星基金；3-稳步上升；4-平稳基金
            "fundName": "国富潜力组合混合A",
            "saleIndex": 40,
            "indexChage": 1, // 0-持平；1-增长；2-减少
            "fundingTime": "2002-12-23",
            "totalGrowth": "12%"
          }
        ]
      }
    },
    mounted(){
    },
    methods:{
      toTemplate(n,name){
        this.tIndex = n
        this.tempName = name === "系统默认排序" ? "系统模板" : name
      },
      editTemplate(){
        this.$router.push({name:'templateCustom'})
      },
      plusTemplate(){
        this.$router.push({name:'templateCustom'})
      },
      getFundDetails(){
        this.$router.push({name:'detailsOne'})
      }
    },
    components:{
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .template-wrap{
    margin: 20px 0 30px;
    background: $df-bg-color;
    height: 86px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    .img-label{
      flex: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 223px;
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      background: rgba(147,198,249,.5) url("~assets/img/img-label-bg.png") center no-repeat;
    }
    .template-list-wrap{
      box-sizing: border-box;
      padding: 0 28px 0 39px;
      flex: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .template-list{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .operate-wrap{
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .edit-btn{
        cursor: pointer;
        width: 70px;
        height: 28px;
        @include default-border(#678db4);
        @include btn-ac($bd-color: #678db4);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        &:hover{
          opacity: .8;
        }
      }
      .template-item{
        position: relative;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        margin-right: 80px;
        &.active,&:hover{
          color: $btn-ac-bg;
          font-weight: bold;
        }
        &:before{
          position: absolute;
          content: '';
          top: 0;
          right: -36px;
          width: 1px;
          height: 26px;
          background: #d6dfeb;
        }
      }
      .plus-template{
        cursor: pointer;
        width: 28px;
        height: 28px;
        background: url('~assets/img/plus-ico.png') center no-repeat;
        transition: all .2s;
        &:hover{
          transform: scale(1.2);
        }
      }
    }
  }
  .search-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .result-num{
    color: $btn-ac-bg;
    font-weight: bold;
  }
  .search-box{
    width: 424px;
    height: 36px;
    @include default-border(#678db4);
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .search-txt{
      flex: auto;
      padding-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: none;
      outline: none;
    }
    .search-ico{
      cursor: pointer;
      flex: none;
      width: 32px;
      background: url("~assets/img/search-ico.png") center no-repeat;
      transition: all .3s;
      &:hover{
        transform: scale(1.2);
      }
    }
  }
  .fund-list-wrap{
    padding: 16px 0 20px;
    .list-wrap{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .fund-item{
      box-sizing: border-box;
      flex: none;
      width: 25%;
      height: 320px;
      padding: 40px 40px 0;
      border: 1px solid #e5e5e5 {
        left: 0;
        top: 0;
      };
      .fund-label{
        flex: none;
        box-sizing: border-box;
        width: 60px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        @include default-border
      }
      .fLabel0{
        color: #2c3b50;
        border-color: #2c3b50;
        background: rgba(244,245,246,.3);
      }
      .fLabel1{
        color: #1e5eff;
        border-color: #1f52d2;
        background: rgba(237,246,255,.3);
      }
      .fLabel2{
        color: #ee8100;
        border-color: #ff8400;
        background: rgba(255,250,240,.3);
      }
      .fLabel3{
        color: #ff2424;
        border-color: #ff2424;
        background: rgba(255,240,240,.3);
      }
      .fLabel4{
        color: #0095e6;
        border-color: #00a7ff;
        background: rgba(237,249,255,.3);
      }
      .fund-name{
        text-align: center;
        font-size: 16px;
        color: #333;
        font-weight: 500;
        margin-top: 11px;
      }
      .index-wrap{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
      }
      .num-wrap{
        display: flex;
        justify-content: center;
      }
      .index-label{
        text-align: center;
        font-size: 14px;
        color: #666;
      }
      .fund-info{
        flex: none;
        width: 152px;
        height: 48px;
        margin: 13px auto 10px;
        background: #f2f4f9;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p{
          color: #666;
          font-size: 12px;
        }
      }
      .getDetails{
        cursor: pointer;
        margin: 0 auto;
        box-sizing: border-box;
        flex: none;
        width: 98px;
        height: 28px;
        color: $btn-ac-bg;
        font-size: 14px;
        font-weight: bold;
        @include default-border;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          @include btn-ac
        }
      }
    }
    .last-line-item{
      border-bottom: 0;
    }
    .nFouth-item{
      border-right: 0;
    }
  }
</style>
