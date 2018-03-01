<template>
  <div class="chart-wrapper" ref="chart">
  </div>
</template>

<script>
  export default {
    name: 'gauge',
    props: ['gaugeData'],
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(function() {
        this.myChart = this.$echarts.init(this.$refs.chart);
        this.initChart();
      })
    },
    methods: {
      initChart() {
        this.myChart.setOption({
          backgroundColor: '#fff',
          tooltip: {
            show: false
          },
          series: [
            {
              name: '',
              max: 100,
              type: 'gauge',
              splitNumber: 10,
              radius: '95%',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  color:[[0.75, '#668bb4'], [1, '#ff8400']],
                  width: 9//仪表盘，盘边宽度
                }
              },
              splitLine: {//分隔线
                show: false
              },
              axisTick: {//分隔线
                show: false
              }, axisLabel: {
              show: false
            },
              title: {
                fontSize: 14,
                color: "#333",
                offsetCenter: [0, '-60%']
              },
              pointer: {//指针
                width: 4,
                length: '70%'
              },
              detail: {
                offsetCenter: [0, '-26%'],//相对于仪表盘中心的偏移位置
                fontSize: 30,
                color: '#ff8400',
                fontWeight: 'bold',
                formatter: '{value}'
              },
              data: [{value:"80", name: '热销指数'}]
            }
          ]
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .chart-wrapper {
    width: 100%;
    height: 100%;
    margin-top:30px;
  }
</style>
