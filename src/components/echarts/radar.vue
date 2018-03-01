<template>
  <div class="chartcon" :id='radarchartid'></div>
</template>

<script>
  export default {
    name: 'RadarChart',
    props: ['radarchartid', 'radaroptionlist','chartTitle','titleTop'],
    data(){
      return {}
    },
    mounted(){
      this.$nextTick(function() {
        this.myChart = this.$echarts.init(document.getElementById(this.radarchartid));
        this.initChart()
      })
    },
    watch: {
      radaroptionlist(){
        this.initChart()
      }
    },
    methods: {
      initChart() {
        let lineColorLIst = ['#3a7adb','#ff8400']
        let areaColorLIst = ['rgba(229,236,248,.5)','rgba(249,237,225,.7)']
        this.myChart.setOption({
          title: {
            text: this.chartTitle ? this.chartTitle :'',
            left: 'center',
            top: this.titleTop ? this.titleTop :'center',
            textStyle: {
              fontSize: 14
            }
          },
          tooltip: {
            show: false
          },
          legend: {
            show:false,
          },
          radar: {
            name: {
              textStyle: {
                color:'#333',
                fontSize:14
              }
            },
            splitNumber: 0,
            startAngle: 0,
            splitArea: {
              areaStyle: {
                color: 'rgba(248,249,252,1)'
              }
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            indicator: this.radaroptionlist.dimension
          },
          series: [{
            name: '画像',
            type: 'radar',
            symbolSize: 0,
            data: this.radaroptionlist.data.map(function (item,index) {
              return {
                value : item.value,      //数组
                  lineStyle: {
                    normal: {
                      color: item.lineColor ? item.lineColor : lineColorLIst[index],
                      width: item.lineWidth ? item.lineWidth :3      //不想显示边线则设置为0
                    }
                  },
                    areaStyle:{
                      normal: {
                        color: item.areaColor ? item.areaColor : areaColorLIst[index],
                      }
                    }
                  }
            })
          }]
        });
      }
    }
  }
</script>

<style scoped>
</style>
