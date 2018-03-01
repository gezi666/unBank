<template>
  <div class="chartcon" :id='chartid'></div>
</template>

<script>
export default {
  name: 'LineChart',
  props: ['chartid', 'optionlist'],
  data(){
    return {}
  },
  mounted(){
    this.$nextTick(function () {
      this.myChart = this.$echarts.init(document.getElementById(this.chartid));
      this.initLine()
    })
  },
  watch: {
    optionlist(){
      this.initLine()
    }
  },
  methods: {
    initLine() {
      this.myChart.setOption({
        title:{
          text: this.optionlist.fondName,
          textStyle: {
            color: '#ff8400',
            fontSize: 13
          },
          bottom: '5%',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show:false
        },
        grid: {
          left: '3%',
          right: '6%',
          bottom: '15%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel:{
            textStyle:{
              color:'#999',
              fontSize: 12
            }
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          data: this.optionlist.timeList
        },
        yAxis: {
          type: 'value',
          min: 13.50,
          axisLabel:{
            formatter: function(value){
              var v = value.toFixed(2)
              return v
            },
            textStyle:{
              color:'#999',
              fontSize: 12
            }
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            lineStyle:{
              color:'#e5e5e5',
              type:'solid'
            }
          }
        },
        color:['#8f6cc5','#89df39','#31cef4','#2c97fb'],
        series: [
          {
            name:'',
            type:'line',
            smooth:true,
            symbolSize:0,
            lineStyle: {
              normal: {
                color: '#ff8400',
                width: 3,
              }
            },
            data:this.optionlist.dataList
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
</style>
