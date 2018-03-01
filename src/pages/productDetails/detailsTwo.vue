<template>
  <div class="details-two">
    <p class="item-title">
      <span class="label-txt">现任基金经理</span>
    </p>

    <div class="user-content">
      <img src='../../assets/img/user.png'>
      <p class="user-text">
        {{introduction}}
      </p>
    </div>

    <table class="fund-table">
      <thead>
      <tr>
        <th>任职基金</th>
        <th>任职回报</th>
        <th>同期上证涨幅</th>
        <th>年平均收益率</th>
        <th>任职日期</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataList">
        <td>{{item.officeholdingFund}}</td>
        <td :class="item.retState=='0'?'redText':'greenText'">{{item.officeholdingReturn}}</td>
        <td :class="item.shzhState=='0'?'redText':'greenText'">{{item.meanwhileSHZH}}</td>
        <td :class="item.yieState=='0'?'redText':'greenText'">{{item.averageYield}}</td>
        <td>{{item.tenureDate}}</td>
      </tr>
      </tbody>
    </table>

    <!--历任基金经理-->
    <p class="item-title">
      <span class="label-txt">历任基金经理</span>
    </p>
    <table class="successive-table">
      <thead>
      <tr>
        <th>姓名</th>
        <th>起始时间</th>
        <th>截止时间</th>
        <th>任职天数</th>
        <th>任职回报</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableList">
        <td>{{item.name}}</td>
        <td>{{item.startTime}}</td>
        <td>{{item.closingTime}}</td>
        <td>{{item.servedDays}}</td>
        <td :class="item.state=='0'?'redText':'greenText'">{{item.officeholdingReturn}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//  import * as api from '@/api/api'
  export default {
    name: 'index',
    data () {
      return {
        picture: "../../assets/img/user.png",
        introduction: "徐荔蓉先生：CFA，CPA(非执业)，律师(非执业)，中央财经大学经济学硕士。2001.03-2004.02任中国技术进出口总公司金融部副总经理。2004.11-2008.02任融通基金管理有限公司基金经理助理/基金经理。2008.02-2010.09.29申万巴黎基金管理有限公司基金经理。2009.11.01-至今任国海富兰克林基金管理有限公司高级顾问、资产管理部总经理、投资经理；2010.09.29-至今任国海富兰克林基金管理有限公司研究分析部总经理；2012.09.25-至今任国海富兰克林基金管理有限公司基金经理；2013.05.16-至今任国海富兰克林基金管理有限公司投资总监。现任国海富兰克林基金管理有限公司副总经理、投资总监、研究分析部总经理，国富中国收益混合基金、国富潜力组合股票基金和国富研究精选股票基金基金经理",
        dataList: [
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"5.07%",
            "meanwhileSHZH":"5.92%",
            "averageYield":"6.33%",
            "tenureDate":"2003.09.30 － 2004.07.21",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"221.32%",
            "meanwhileSHZH":"224.92%",
            "averageYield":"89.41%",
            "tenureDate":"2006.04.04 － 2008.02.01",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"-0.21%",
            "meanwhileSHZH":"-5.23%",
            "averageYield":"-0.17%",
            "tenureDate":"2004.11.29 － 2006.02.18",
            "retState":"1",
            "shzhState":"1",
            "yieState":"1"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"221.32%",
            "meanwhileSHZH":"224.92%",
            "averageYield":"89.41%",
            "tenureDate":"2006.04.04 － 2008.02.01",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"221.32%",
            "meanwhileSHZH":"224.92%",
            "averageYield":"89.41%",
            "tenureDate":"2006.04.04 － 2008.02.01",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"221.32%",
            "meanwhileSHZH":"224.92%",
            "averageYield":"89.41%",
            "tenureDate":"2006.04.04 － 2008.02.01",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          },
          {
            "officeholdingFund":"融通债券A",
            "officeholdingReturn":"221.32%",
            "meanwhileSHZH":"224.92%",
            "averageYield":"89.41%",
            "tenureDate":"2006.04.04 － 2008.02.01",
            "retState":"0",
            "shzhState":"0",
            "yieState":"0"
          }
        ],
        tableList: [
          {
            "name":"朱国庆",
            "startTime":"2007.03.22",
            "closingTime":"2014.02.21",
            "servedDays":"6年337天",
            "officeholdingReturn":"49.59%",
            "state":"0"
          },
          {
            "name":"张惟闵",
            "startTime":"2007.03.22",
            "closingTime":"2017.11.22",
            "servedDays":"243天",
            "officeholdingReturn":"-49.59%",
            "state":"1"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .details-two .user-content {
    display: flex;
    justify-content: flex-start;
  }
  .details-two .user-text {
    width: 1150px;
    height: 177px;
    text-align: justify;
    color: #333;
    font-size: $fz-sm;
    line-height: 35px;
    padding-left: 25px;
    overflow-y: auto;
  }
  .details-two table {
    width: 100%;
    margin-top: 20px;
  }
  .details-two table thead tr th {
    height: 55px;
    color: #333;
    font-size: $fz-sm;
    text-align: center;
    background: #f2f4f9;
  }
  .details-two table tbody tr:nth-child(even) {
    box-sizing: border-box;
    background: #f2f4f9;
  }
  .details-two table tbody tr:hover {
    background: #fdf8f2;
  }
  .details-two table tbody tr td {
    height: 50px;
    color: #333;
    font-size: $fz-sm;
    text-align: center;
    border: 1px solid #dfe0e2;
  }
  .details-two .fund-table tbody tr td:first-child {
    text-align: left;
    padding-left: 20px;
  }
  .details-two .successive-table tr td {
    text-align: center;
  }
  /*根据正负数判断字体显示颜色*/
  .details-two .redText {
    color: red;
  }
  .details-two .greenText {
    color: green;
  }
</style>
