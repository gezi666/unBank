<template>
  <div class="project-compare">
    <div class="analysis-wrap">
      <ul class="fund-analysis-list">
        <li class="fund-item" :class="[index !=3 ? 'slide':'']" v-for="(item,index) in fundList">
          <div class="fund-wrap" v-if="item.fundName && item.fundName!=''">
            <p class="fund-name" :title="item.fundName">{{item.fundName}}</p>
            <i class="del" title="删除该项"></i>
            <router-link :to="{name:'detailsOne'}"><span class="get-fund-detail">查看详情</span></router-link>
          </div>
          <div class="select-fund" v-else>
            <router-link :to="{name:'fundIndex'}"><i class="select"></i></router-link>
            <p class="select-label">等待加入</p>
          </div>
        </li>
      </ul>
      <div class="analysis-line">
        <span class="btn-analysis" @click="toAnalysis">开始分析</span>
      </div>
    </div>
    <transition name="result-fade">
      <div class="result-wrap" v-if="resultFlag">
      <div class="comprehensive-wrap">
        <div class="section-title-wrap">
          <p class="section-title"><span class="title-wrap">综合对比</span></p>
        </div>
        <div class="comprehensive-content-wrap">
          <div class="comprehensive-item ranking-wrap slide">
            <p class="item-label">排名</p>
            <ul class="content-wrap rank-list">
              <li class="rank-item" v-for="(item,index) in rankList">
                <i :class="['rank-index','rank-index'+index]">{{index+1}}</i>
                <span :class="['rank-fund-name','rank-fund-name'+index]">{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="comprehensive-item portrait-wrap">
            <p class="item-label">画像</p>
            <RadarChart radarchartid="portrait-chart" :radaroptionlist="radarChartList"></RadarChart>
          </div>
        </div>
      </div>
      <div class="advantage-wrap">
        <div class="section-title-wrap">
          <p class="section-title"><span class="title-wrap">优势对比</span></p>
        </div>
        <div class="company-size-wrap">
          <p class="item-title">
            <span class="label-txt">基金公司规模(亿元)</span>
          </p>
          <ul class="advantage-fund-list">
            <li class="advantage-fund-item" v-for="(item,index) in sizeList">
              <p class="money">{{item.money}}</p>
              <p class="fund-label size-company">{{item.company}}</p>
              <p :class="['item-fund-name','item-fund-name'+index]">{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="manager-wrap">
          <p class="item-title">
            <span class="label-txt">基金经理</span>
          </p>
          <ul class="advantage-fund-list">
            <li class="advantage-fund-item manager-item" v-for="(item,index) in managerList">
              <p class="fund-label manager-label">任职回报：&nbsp;<span class="job-return">{{item.jobReturn}}</span></p>
              <p class="fund-label manager-label tenure">累计任职：&nbsp;{{item.tenure}}</p>
              <p class=" manager-label manager-name-wrap"><i class="person-ico"></i><span class="manager-name">{{item.name}}</span></p>
              <p :class="['item-fund-name','item-fund-name'+index]">{{item.fundName}}</p>
            </li>
          </ul>
        </div>
        <div class="size-change-wrap">
          <p class="item-title">
            <span class="label-txt">基金规模变动</span>
          </p>
          <div class="char-wrap">
            <ul class="advantage-fund-list">
              <li class="advantage-fund-item" v-for="(item,index) in lineChartList">
                <div class="chart">
                  <LineChart :chartid="'line-chart'+index" :optionlist="item"></LineChart>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="growth-wrap">
          <p class="item-title">
            <span class="label-txt">基金累计增长率</span>
          </p>
          <ul class="advantage-fund-list">
            <li class="advantage-fund-item" v-for="(item,index) in growthList">
              <p class="index-num growth-num" :class="[item.indexChage==0 ? 'equal': item.indexChage==1 ? 'up' : item.indexChage==2 ? 'down' : '']">{{item.totalGrowth}}</p>
              <p :class="['item-fund-name','item-fund-name'+index]">{{item.fundName}}</p>
            </li>
          </ul>
        </div>
        <div class="asset-allocation-wrap">
          <p class="item-title">
            <span class="label-txt">基金资产配置</span>
          </p>
          <div class="char-wrap">
            <ul class="advantage-fund-list">
              <li class="advantage-fund-item" v-for="(item,index) in pieChartList">
                <div class="chart">
                  <PieChart :piechartid="'pie-chart'+index" :pieoptionlist="item"></PieChart>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sector-allocation-wrap">
          <p class="item-title">
            <span class="label-txt">基金行业配置</span>
          </p>
          <div class="char-wrap">
            <ul class="advantage-fund-list">
              <li class="advantage-fund-item" v-for="(item,index) in barChartList">
                <div class="chart">
                  <BarChart :chartid="'bar-chart'+index" :optionlist="item"></BarChart>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="detailed-data-wrap">
        <div class="section-title-wrap">
          <p class="section-title"><span class="title-wrap">详细数据对比</span></p>
          <i :class="['slide-down',slideFlag ? 'active':'' ]" @click="slideDown" title="点击查看详情"></i>
        </div>
        <div :class="['table-wrap',tableFlag ? 'active':'']">
          <table>
            <tr class="section-line">
              <td class="first-col first-col-item"></td>
              <td v-for="item in detailsDataList.fundList" class="tabel-label">{{item}}</td>
            </tr>
            <tr v-for="item in detailsDataList.basicInfo">
              <td v-for="(item1,index1) in item" :class="[index1==0 ? 'first-col-item' : '']">{{item1}}</td>
            </tr>
            <tr class="section-line">
              <td class="first-col-item tabel-label">资产配置</td>
              <td v-for="item in detailsDataList.fundList.length"></td>
            </tr>
            <tr v-for="item in detailsDataList.assets">
              <td v-for="(item1,index1) in item" :class="[index1==0 ? 'first-col-item' : '']">{{item1}}</td>
            </tr>
            <tr class="section-line">
              <td class="first-col-item tabel-label">行业配置</td>
              <td v-for="item in detailsDataList.fundList.length"></td>
            </tr>
            <tr v-for="item in detailsDataList.industry">
              <td v-for="(item1,index1) in item" :class="[index1==0 ? 'first-col-item' : '']">{{item1}}</td>
            </tr>
        </table>
      </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  import LineChart from 'components/echarts/line'
  import PieChart from 'components/echarts/pie'
  import BarChart from 'components/echarts/bar'
  import RadarChart from 'components/echarts/radar'
  export default {
    name: 'projectCompare',
    data(){
      return {
        fundList: [
          {
            "id": 1,
            "fundName": "国富潜力组合混合A"
          },
          {
            "id": 2,
            "fundName": "博时中证银行指数"
          },
          {
            "id": 3,
            "fundName": ""
          },
          {
            "id": 4,
            "fundName": ""
          }
        ],
        rankList:["国富潜力组合混合A","博时中证银行指数","益民服务领先混合","国富潜力组合混合A"],
        radarChartList:{
          "dimension":[
            { name: '规模', max: 6500},
            { name: '业绩', max: 16000},
            { name: '配置', max: 52000},
            { name: '稳定性', max: 40000},
            { name: '经理', max: 52000},
            { name: '公司', max: 25000}
          ],
          "data":[
            {
              value : [4300, 10000, 28000, 35000, 50000, 19000]
            },
            {
              value : [5000, 14000, 28000, 31000, 42000, 21000]
            }
          ]
        },
        sizeList:[
          {
            "money": 348.98,
            "company": "国海富兰克林基金管理有限公司",
            "name": "国富潜力组合混合A"
          },
          {
            "money": 19.34,
            "company": "益民基金管理有限公司",
            "name": "博时中证银行指数"
          },
          {
            "money": 19.34,
            "company": "国海富兰克林基金管理有限公司",
            "name": "益民服务领先混合"
          },
          {
            "money": 19.34,
            "company": "国海富兰克林基金管理有限公司",
            "name": "国富潜力组合混合A"
          }
        ],
        managerList:[
          {
            "jobReturn":"63.60%",
            "tenure":"一年又6天",
            "name":"徐荔荣",
            "fundName":"国富潜力组合混合A"
          },
          {
            "jobReturn":"63.60%",
            "tenure":"269天",
            "name":"赵若琼",
            "fundName":"博时中证银行指数"
          },
          {
            "jobReturn":"63.60%",
            "tenure":"一年又6天",
            "name":"赵若琼",
            "fundName":"益民服务领先混合"
          },
          {
            "jobReturn":"63.60%",
            "tenure":"一年又6天",
            "name":"赵若琼",
            "fundName":"国富潜力组合混合A"
          }
        ],
        growthList:[
          {
            "fundName": "国富潜力组合混合A",
            "indexChage": 1, // 0-持平；1-增长；2-减少
            "totalGrowth": "16.1%"
          },
          {
            "fundName": "国富潜力组合混合A",
            "indexChage": 1, // 0-持平；1-增长；2-减少
            "totalGrowth": "9.2%"
          },
          {
            "fundName": "国富潜力组合混合A",
            "indexChage": 0, // 0-持平；1-增长；2-减少
            "totalGrowth": "9.2%"
          },
          {
            "fundName": "国富潜力组合混合A",
            "indexChage": 2, // 0-持平；1-增长；2-减少
            "totalGrowth": "9.2%"
          }
        ],
        lineChartList:[
          {
            "fondName":"国富潜力组合混合A",
            "timeList":["2016-07","2016-10","2017-01","2017-04","2017-07","2017-10"],
            "dataList":[13.85, 14.18, 13.80, 14.08, 14.50, 14.70]
          },
          {
            "fondName":"博时中证银行指数",
            "timeList":["2016-07","2016-10","2017-01","2017-04","2017-07","2017-10"],
            "dataList":[14.70,14.50,14.18,14.08,13.85,13.80]
          },
          {
            "fondName":"益民服务领先混合",
            "timeList":["2016-07","2016-10","2017-01","2017-04","2017-07","2017-10"],
            "dataList":[13.85, 14.18, 13.80, 14.08, 14.50, 14.70]
          },
          {
            "fondName":"国富潜力组合混合A",
            "timeList":["2016-07","2016-10","2017-01","2017-04","2017-07","2017-10"],
            "dataList":[14.70,14.50,14.18,14.08,13.85,13.80]
          }
        ],
        pieChartList:[
          {
            "fondName":"国富潜力组合混合A",
            "growth":"40%",
            "dataList":[65,45,12]
          },
          {
            "fondName":"博时中证银行指数",
            "growth":"32%",
            "dataList":[30,60,20]
          },
          {
            "fondName":"益民服务领先混合",
            "growth":"20%",
            "dataList":[65,45,12]
          },
          {
            "fondName":"国富潜力组合混合A",
            "growth":"10%",
            "dataList":[65,45,12]
          }
        ],
        barChartList:[
          {
            "fondName":"国富潜力组合混合A",
            "industry":['制造业', '房地产', '石油', '化工', '有色金属', '新闻出版', '林业', '金融', '气象', '汽修'],
            "dataList":[60, 50, 8, 8, 8, 8, 8, 8 , 8, 8]
          },
          {
            "fondName":"博时中证银行指数",
            "industry":['制造业', '房地产', '石油', '化工', '有色金属', '新闻出版', '林业', '金融', '气象', '汽修'],
            "dataList":[70, 50, 8, 8, 8, 8, 8, 8 , 8, 8]
          },
          {
            "fondName":"益民服务领先混合",
            "industry":['制造业', '房地产', '石油', '化工', '有色金属', '新闻出版', '林业', '金融', '气象', '汽修'],
            "dataList":[55, 50, 8, 8, 8, 8, 8, 8 , 8, 8]
          },
          {
            "fondName":"国富潜力组合混合A",
            "industry":['制造业', '房地产', '石油', '化工', '有色金属', '新闻出版', '林业', '金融', '气象', '汽修'],
            "dataList":[60, 50, 8, 8, 8, 8, 8, 8 , 8, 8]
          }
        ],
        detailsDataList:{
          "fundList":["国富潜力组合混合A","博时中证银行指数","益民服务领先混合","国富潜力组合混合A"],
          "basicInfo":[
            ["基金公司规模(亿元)","6990","6990","6990","6990"],
            ["基金规模(亿元)","1.59","1.59","1.59","1.59"],
            ["基金经理","XXX","XXX","XXX","XXX"],
            ["累计净值","1.1124","1.1124","1.1124","1.1124"],
            ["成立时间","2016-09-22","2016-09-22","2016-09-22","2016-09-22"]
          ],
          "assets":[
            ["股票占净比","68%","68%","68%","68%"],
            ["债券占净比","12%","12%","12%","12%"]
          ],
          "industry":[
            ["制造业","87%","87%","87%","87%"],
            ["金融业","12%","12%","12%","12%"],
            ["代销的其他行个数","5","5","5","5"]
          ]
        },
        resultFlag: false,
        tableFlag: false,
        slideFlag: false
      }
    },
    mounted(){
    },
    methods:{
      toAnalysis(){
        this.resultFlag = true
      },
      slideDown(){
        this.slideFlag = !this.slideFlag
        this.tableFlag = !this.tableFlag
      }
    },
    components:{
      LineChart,
      PieChart,
      BarChart,
      RadarChart
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .result-fade-enter-active, .result-fade-leave-active {
    transition: all .3s;
  }
  .result-fade-enter, .result-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    height: 0;
  }
  .fund-analysis-list{
    width: 100%;
    background: #f8f9fc;
    @include flex;
    .fund-item{
      flex: none;
      width: 25%;
      height: 146px;
      @include flex($justify: center);
    }
    .fund-wrap,.select-fund{
      position: relative;
      @include flex($justify: center, $dir: column);
    }
    .fund-name{
      text-align: center;
      font-size: 16px;
      color: $cl-txt;
      margin-bottom: 22px;
    }
    .del{
      cursor: pointer;
      position: absolute;
      top: 4px;
      right: -30px;
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url('~assets/img/del-ico.png') center no-repeat;
    }
    .get-fund-detail{
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      width: 98px;
      height: 28px;
      color: $btn-ac-bg;
      @include flex($justify: center);
      @include default-border;
      &:hover{
        @include btn-ac
      }
    }
    .select{
      cursor: pointer;
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-bottom: 12px;
      background: url("~assets/img/addContrast.png") center no-repeat;
      transition: all .3s;
      &:hover{
        transform: scale(1.1);
      }
    }
    .select-label{
      text-align: center;
      font-size: 12px;
      color: $cl-txt;
    }
  }
  .analysis-line{
    margin-top: 30px;
    width: 100%;
    @include flex($justify: center);
    .btn-analysis{
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      width: 98px;
      height: 28px;
      @include flex($justify: center);
      @include default-border;
      @include btn-ac;
      &:hover{
        opacity: .9;
      }
    }
  }
  .result-wrap{
    .section-title-wrap{
      margin-top: 30px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      background: $df-bg-color;
      @include flex($justify: space-between,$align-items: stretch);
      .section-title{
        width: 223px;
        height: 100%;
        background: url("~assets/img/img-label-bg.png") no-repeat;
        background-position: 0 0;
      }
      .title-wrap{
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        @include flex($justify: center);
        background: rgba(0,0,0,.3) ;
      }
    }
    .comprehensive-content-wrap{
      width: 100%;
      margin-bottom: -30px;
      @include flex;
      .comprehensive-item{
        width: 50%;
        flex: none;
        height: 330px;
        @include flex($dir: column,$align-items: stretch);
      }
    }
    .slide:before{
      background-size: cover;
    }
    .item-label{
      flex: none;
      margin: 28px 0;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: $cl-txt;
    }
    .content-wrap{
      flex: auto;
    }
    .rank-list{
      @include flex($dir: column);
      .rank-item{
        margin-bottom: 20px;
        @include flex;
      }
      .rank-index{
        color: $btn-ac-bg;
        font-size: 18px;
        font-weight: bold;
        font-style: italic;
        margin-right: 18px;
      }
      .rank-index1{
        color:$cl-blue
      }
      .rank-index2{
        color:$cl-deep-blue
      }
      .rank-index3{
        color:$cl-green
      }
      .rank-fund-name{
        box-sizing: border-box;
        display: inline-block;
        width: 217px;
        height: 28px;
        padding-left: 18px;
        @include default-border;
        @include btn-ac;
        @include flex;
        font-size: 16px;
      }
      .rank-fund-name1{
        border-color: $cl-blue;
        background: $cl-blue
      }
      .rank-fund-name2{
        border-color: $cl-deep-blue;
        background:$cl-deep-blue
      }
      .rank-fund-name3{
        border-color: $cl-green;
        background:$cl-green
      }
    }
    .advantage-fund-list{
      width: 100%;
      @include flex($justify: center);
      .advantage-fund-item{
        position: relative;
        box-sizing: border-box;
        padding-left: 20px;
        width: 25%;
        height: 172px;
        flex: none;
        @include flex($dir: column,$justify: center,$align-items: flex-start);
        &:before{
          position: absolute;
          content: '';
          top: 50%;
          right: 20px;
          display: inline-block;
          width: 13px;
          height: 22px;
          font-size: 22px;
          color: #7496ba;
          background: url('~assets/img/arrow-ico.png') center no-repeat;
        }
        &:last-child:before{
          background: none;
        }
        &.manager-item{
          height: 200px;
        }
        //基金公司规模
        .money{
          color: $btn-ac-bg;
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 24px;
        }
        .fund-label{
          font-size: 14px;
          color: #333;
        }
        .item-fund-name{
          font-size: 14px;
          font-weight: bold;
          color: $btn-ac-bg;
        }
        .item-fund-name1{
          color: $cl-blue;
        }
        .item-fund-name2{
          color: $cl-deep-blue;
        }
        .item-fund-name3{
          color: $cl-green;
        }
        //基金经理
        .manager-label{
          margin-bottom: 15px;
        }
        .job-return{
          font-size: 32px;
          font-weight: bold;
          color: $btn-ac-bg;
        }
        .manager-name-wrap{
          @include flex
        }
        .person-ico{
          display: inline-block;
          width: 35px;
          height: 35px;
          margin-right: 10px;
          background: url('~assets/img/person-ico.png') center no-repeat;
        }
        .manager-name{
          font-size: 18px;
          color: $cl-txt;
          font-weight: bold;
        }
        //基金累计增长率样式
        .growth-num{
          font-size: 40px;
        }
      }
    }
    .char-wrap{
      overflow-x: auto;
      .advantage-fund-list{
        justify-content: flex-start;
      }
      .advantage-fund-item{
        box-sizing: border-box;
        flex: none;
        width: 50%;
        height: 320px;
        &:before{
          right: 0;
        }
      }
      .chart{
        width: 100%;
        height: 100%;
      }
    }
    .table-wrap{
      height: 0;
      opacity: 0;
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      overflow: hidden;
      transition: all .3s;
      &.active{
        opacity: 1;
        height: auto;
        overflow: hidden;
      }
      table{
        width: 100%;
      }
      tr{
        height: 50px;
      }
      td{
        border: $common-border;
        padding-left: 40px;
        font-size: 14px;
        color: #333;
      }
      .first-col{
        width: 172px;
      }
      .first-col-item{
        padding-left: 20px;
        background: $df-bg-color;
      }
      .section-line{
        td{
          background: $df-bg-color;
        }
      }
      .tabel-label{
        font-weight: bold;
      }
    }
    .slide-down{
      cursor: pointer;
      margin-right: 10px;
      display: inline-block;
      width: 40px;
      background: url("~assets/img/dowm-ico.png") center no-repeat;
      transition: all .3s;
      &.active{
        transform: rotate(180deg);
      }
    }
  }
</style>
