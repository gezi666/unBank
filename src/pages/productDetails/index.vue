<template>
  <div class="details-wrap">
    <p class="page-tab-title">产品详情</p>
    <div class="combination">
      <!--公司信息-->
      <div class="company-info">
        <div class="info-title" :id="infoList.id">
          <h3>{{infoList.fundName}}</h3>
          <p class="tagging">{{infoList.classification}}</p>
        </div>
        <span>基金管理人:</span>
        <span class="info-span">{{infoList.fundCustodian}}</span>
        <ul>
          <li v-for="item in infoList.label ">{{item}}</li>
        </ul>
        <div class="icon-wrap">
          <div class="icon-box box-one" >
            <p class="icon-add" v-show="addType1" @click="joinContrast1()"></p>
            <p class="icon-reduce" v-show="addType2" @click="joinContrast2()"></p>
            <p>{{addText}}</p>
          </div>
          <!--收藏-->
          <div class="icon-box box-two">
            <p class="icon-collect"  v-show="collectionType1" @click="collection1( )"></p>
            <p class="icon-success" v-show="collectionType2" @click="collection2( )"></p>
            <p>{{typeText}}</p>
          </div>
        </div>
      </div>
      <!--热销指数-->
      <div class="selling"  v-loading="loading" element-loading-text="数据加载中..." >
        <echartsGauge :gaugeData="echartsDatas"></echartsGauge>
        <p class="echart-text">根据库内所有基金 <br/>分析得出热销指数</p>
      </div>

      <!--产品画像-->
      <div class="portrait">
        <RadarChart radarchartid="portrait-chart" :radaroptionlist="radarChartList" chartTitle="产品画像"></RadarChart>
      </div>
    </div>
    <!--列表-->
    <div class="details-list">
      <router-link :to="{name:'detailsOne'}">产品详情</router-link>
      <router-link :to="{name:'detailsTwo'}">基金经理</router-link>
      <router-link :to="{name:'detailsThree'}">历史业绩</router-link>
      <router-link :to="{ name: 'detailsFour'}">舆情信息</router-link>
    </div>
    <div class="details-table">
      <router-view></router-view>
    </div>

    <!--加入对比模态框-->
    <div class="modal" v-if="showModal" @click="modal()">
      <div class="modal-body">
        <p class="modal-title">{{modalTitle}}</p>
        <div class="btn-group" v-if="modalBtn">
          <span class="btn-jump" @click="newPage()">跳转到对比页面</span>
          <span class="btn-cancel" @click="modal()">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import * as api from '@/api/api'
  import echartsGauge from 'components/echarts/Gauge.vue'
  import RadarChart from 'components/echarts/radar'
  import { Loading } from 'element-ui'
  export default {
    name: 'index',
    data () {
      return {
        modalTitle:"已成功加入对比！是否转到对比页面？",
        showModal:false,
        modalBtn:true,
        echartsDatas:'',
        loading: false,
        typeText:"加入收藏",
        collectionType1: true,
        collectionType2: false,
        addText:"加入对比",
        addType1:true,
        addType2:false,
        collectStatus:"0",//收藏
        addStatus:"0",
        infoList:{
          "id":"1",
          "fundName":"国富潜力组合混合A",
          "classification":"中高风险型",
          "fundCustodian":"国海富兰克林基金管理有限公司",
          "label":[
              "星级基金公司","明星基金经理","五星基金"
          ]
        },
        radarChartList:{
          "dimension":[
            { name: '规模', max: 6500},
            { name: '公司', max: 16000},
            { name: '经理', max: 52000},
            { name: '稳定性', max: 40000},
            { name: '配置', max: 52000},
            { name: '业绩', max: 25000}
          ],
          "data":[
            {
              value : [4300, 10000, 28000, 35000, 50000, 19000],
              areaColor:"#ff8b10",
              lineWidth:"0"
            }
          ]
        },
      }
    },
    methods:{
      /**
       * 加入对比
       */
      joinContrast1(){
        this.showModal=true;
        this.modalBtn=true;
        this.modalTitle="已成功加入对比！是否转到对比页面？";
        this.addType1=!this.addType1;
        this.addType2=!this.addType2;
        this.addText="取消对比";
        this.addStatus="0";
      },
      joinContrast2(){
        this.showModal=true
        this.modalTitle="已成功取消对比！";
        this.modalBtn=false;
        this.addType1=!this.addType1;
        this.addType2=!this.addType2;
        this.addText="加入对比";
        this.addStatus="1";
      },
      //跳转到对比页面
      newPage(){
        this.$router.push({name: 'fundCompare',params:{addStatus:this.addStatus}})
      },

      /**
       *模态框
       */
      modal(){
        this.showModal=false
      },

      /**
       * 收藏
       */
      collection1(){
        this.collectionType1=!this.collectionType1;
        this.collectionType2=!this.collectionType2;
        this.typeText="取消收藏";
        this.collectStatus="0";
      },
      collection2(){
        this.collectionType1=!this.collectionType1;
        this.collectionType2=!this.collectionType2;
        this.typeText="加入收藏";
        this.collectStatus="1";
      },
    },
    mounted(){
      //热销指数图数据
      this.echartsDatas= "80"

    },
    components: {
      echartsGauge,
      RadarChart
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  /*标题*/
  .details-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 15px;
  }
  /*公司信息*/
  .details-wrap .combination,.details-wrap .company-info ul,.details-wrap .company-info .icon-wrap ,.details-wrap .details-list{
    display: flex;
    flex-direction: row;
  }
  .details-wrap .combination {
    height: 235px;
  }
  .details-wrap .combination .company-info {
    width: 400px;
    color: #333;
    padding: 28px $padding-side;
    box-sizing: border-box;
  }
  .details-wrap .info-title {
    font-size: $fz-lg;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }
  .details-wrap .info-title .tagging {
    width: 92px;
    height: 24px;
    line-height: 24px;
    font-size: $fz-sm;
    font-weight: 700;
    color: #ff8e26;
    text-align: center;
    border: 1px solid #ff8e26;
    border-radius: $bd-radius;
  }
  .details-wrap  .info-span {
    color: #666;
  }
  .details-wrap .company-info ul {
    margin-top: 12px;
  }
  .details-wrap .company-info ul li {
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
    background: #668bb4;
    border-radius: $bd-radius;
  }
  .details-wrap .company-info .icon-wrap {
    margin-top: 20px;
    justify-content: center;
  }
  .details-wrap .icon-wrap .icon-box {
    width: 60px;
    height: 60px;
  }
  .details-wrap .icon-wrap .box-one {
    padding: 0 20px;
    background: url("../../assets/img/smallLine.png") no-repeat right;
  }
  .details-wrap .icon-wrap .icon-add,.details-wrap .icon-wrap .icon-reduce {
    width: 29px;
    height: 28px;
    margin: 0 auto 5px;
    background-size: 100% 100%;
  }
  .details-wrap .icon-wrap .icon-add{
    background: url("../../assets/img/addContrast.png") no-repeat center;
  }
  .details-wrap .icon-wrap .icon-reduce{
    background: url("../../assets/img/subtractContrast.png") no-repeat center;
  }
  .details-wrap .company-info .box-two {
    padding: 0 20px;
  }
  .details-wrap .company-info .icon-collect {
    width: 29px;
    height: 28px;
    margin: 0 auto 5px;
    background: url("../../assets/img/notCollection.png") no-repeat center;
    background-size: 100% 100%;
  }
  .details-wrap .company-info .icon-success{
    width: 29px;
    height: 28px;
    margin: 0 auto 5px;
    background: url("../../assets/img/collection.png") no-repeat center;
    background-size: 100% 100%;
  }
  .details-wrap .company-info .icon-collect:hover,.details-wrap .company-info .icon-add:hover{
    cursor: pointer;
  }
  /*热销指数*/
  .details-wrap .selling{
    width: 400px ;
    height:235px;
    position: relative;
    background: url("../../assets/img/bigLine.png") no-repeat left;
  }
  .details-wrap .selling .echart-text{
    position: absolute;
    top:180px;
    left:153px;
    font-size: 12px;
    color: #999999;
  }
  /*产品画像*/
  .details-wrap .portrait{
    width: 400px ;
    height:235px;
    background: url("../../assets/img/bigLine.png") no-repeat left;
  }
  /*列表切换卡*/
  .details-wrap .details-list{
    margin:30px 25px 0;
    border-bottom:1px solid #cccccc;
  }
  .details-wrap a{
    width: 70px;
    height:28px;
    line-height: 28px;
    text-align: center;
    font-size: $fz-sm;
    border-radius: 5px 5px 0 0;
    border:1px solid #cccccc;
    border-left: none;
    border-bottom: none;
    margin-left: -1px;
  }
  .details-wrap a:first-child{
    border-left:1px solid #cccccc;
  }
  .details-wrap .details-list .active.router-link-exact-active{
    border-left: none;
    border-right: none;
  }
  .details-wrap .details-list .active.router-link-exact-active,.details-wrap a:hover{
    @include btn-ac;
    border:1px solid $btn-ac-bg !important;
    border-left: none !important;
    border-bottom: none !important;
    margin-left: -1px;
  }
  .details-wrap a:first-child:hover{
    margin-left: 0!important;
  }
  .details-wrap .details-table{
    margin:20px 25px;
  }

/*模态框*/
  .details-wrap .modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    transition: all .5s;
  }
  .details-wrap .modal-body{
    width:350px;
    height:160px;
    padding:45px 55px 30px;
    margin:300px auto;
    background: #fff;
    border-radius: $bd-radius;
    box-sizing: border-box;
  }
  .details-wrap .modal .modal-title{
    font-size: $fz-sm;
    color: #333;
    text-align: center;
    padding-bottom: 40px;
  }
  .details-wrap .modal .btn-group{
    padding:0 5px;
    display: flex;
  }
  .details-wrap .modal .btn-group span{
    width:96px;
    height:29px;
    line-height: 29px;
    text-align: center;
    font-size: $fz-sm;
    border-radius: $bd-radius;
  }
  .details-wrap .modal .btn-group span:hover{
    cursor: pointer;
  }
  .details-wrap .modal .btn-group .btn-jump{
    color: #fff;
    background: $btn-ac-bg;
    border:1px solid $btn-ac-bg;
    margin-right: 20px;
  }
  .details-wrap .modal .btn-cancel{
    border:1px solid $btn-ac-bg;
    color: $btn-ac-bg;
  }

</style>
