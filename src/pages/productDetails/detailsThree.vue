<template>
  <div class="details-three">
    <table>
      <tr v-for="item in tableData">
        <td>{{item.date}}</td>
        <td>{{item.information}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
//  import * as api from '@/api/api'
  export default {
    name: 'index',
    data () {
      return {
        tableData: [
          {
            date: '2007.05.12',
            information: '果富中小盘（450009）2016年度三年期股票型基金奖'
          },
          {
            date: '2007.05.12',
            information: '果富强化债券A（450005）2016年度一年期普通债券明星基金奖'
          },
          {
            date: '2007.05.12',
            information: '国海富兰克林基金2016年度一年期明星基金公司成长奖'
          },
          {
            date: '2007.04.21',
            information: '国海富兰克林基金2016年度一年期明星基金公司成长奖'
          },
          {
            date: '2007.05.12',
            information: '果富中小盘（450009）2016年度三年期金基金股票型基金奖'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .details-three {
    min-height: 440px;
  }
  .details-three table {
    width: 100%;
  }
  .details-three table tr {
    height: 50px;
  }
  .details-three table tr:nth-child(odd) {
    font-size: $fz-sm;
    color: #333;
    background: #f2f4f9;
  }
  .details-three table tr:hover {
    color: #668bb4;
    cursor: pointer;
  }
  .details-three table tr td:first-child {
    width: 135px;
    text-align: center;
  }
</style>
