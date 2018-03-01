<template>
  <div class="chartcon" :id='piechartid'></div>
</template>

<script>
  export default {
    name: 'PieChart',
    props: ['piechartid', 'pieoptionlist'],
    data(){
      return {}
    },
    mounted(){
      this.$nextTick(function() {
        this.myChart = this.$echarts.init(document.getElementById(this.piechartid));
        this.initPie()
      })
    },
    watch: {
      pieoptionlist(){
        this.initPie()
      }
    },
    methods: {
      initPie() {
        this.myChart.setOption({
          title:{
            text: this.pieoptionlist.fondName,
            textStyle: {
              color: '#ff8400',
              fontSize: 13
            },
            bottom: '5%',
            left: 'center'
          },
          legend:{
            itemGap:20,
            data:['股票资产','债权资产','其他'],
            top: '5%',
            left: 0,
            textStyle: {
              color: '#999',
              fontSize: 13,
            }
          },
          tooltip:{
            show: true,
            trigger: 'item'
          },
          color:['#ffba00','#ff8400','#3e6fa5'],
          series : [
            {
              type: 'pie',
              radius : ['45%', '60%'],
              clockwise: false,
              data:[
                {
                  value:this.pieoptionlist.dataList[0],
                  name:'股票资产',
                  label: {
                    normal:{
                      show: false,
                      position: 'center',
                      formatter: '',
                      textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#23bd68'
                      }
                    }
                  },
                  tooltip:{
                    show: true,
                    backgroundColor:'rgba(0,0,0,0.2)',
                    formatter: function(p){
                      var tipDom = '<div style="text-align:right;width:98px;height:50px;background-color:#fff)"><p style="font-size:16px;color: #333">持仓前10涨跌<p><p style="text-align:right;font-size:24px;color: #333">'+p.percent+'%</p></div>'
                      return tipDom
                    }
                  },
                },
                {
                  value:this.pieoptionlist.dataList[1],
                  name:'债权资产',
                  tooltip: {
                    show: false
                  },
                  label: {
                    normal:{
                      show: true,
                      position: 'center',
                      formatter: this.pieoptionlist.growth,
                      textStyle: {
                        fontSize: 40,
                        lineHeight: 28,
                        fontWeight: 'bold',
                        color: '#ff8400'
                      }
                    }
                  },
                  tooltip:{
                    show: true,
                    backgroundColor:'rgba(0,0,0,0.2)',
                    formatter: function(p){
                      var tipDom = '<div style="text-align:right;width:98px;height:50px;background-color:#fff)"><p style="font-size:16px;color: #333">持仓前10涨跌<p><p style="text-align:right;font-size:24px;color: #333">'+p.percent+'%</p></div>'
                      return tipDom
                    }
                  },
                },
                {
                  value:this.pieoptionlist.dataList[2],
                  name:'其他',
                  tooltip: {
                    show: false
                  },
                  label: {
                    normal:{
                      show: true,
                      position: 'center',
                      formatter: '增长收益',
                      textStyle: {
                        fontSize: 14,
                        color: '#666'
                      }
                    }
                  },
                  tooltip:{
                    show: true,
                    backgroundColor:'rgba(0,0,0,0.2)',
                    formatter: function(p){
                      var tipDom = '<div style="text-align:right;width:98px;height:50px;background-color:#fff)"><p style="font-size:16px;color: #333">持仓前10涨跌<p><p style="text-align:right;font-size:24px;color: #333">'+p.percent+'%</p></div>'
                      return tipDom
                    }
                  },
                }
              ]
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
</style>
