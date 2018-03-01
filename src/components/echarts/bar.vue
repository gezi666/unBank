<template>
    <div class="chartcon" ref="chart" :id='chartid'></div>
</template>

<script>
export default {
  name: 'BarChart',
  props: ['chartid', 'optionlist'],
  data() {
    return {}
  },
  watch: {
    optionlist(){
      this.initChart()
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.myChart = this.$echarts.init(document.getElementById(this.chartid));
      this.initChart()
    })
  },
  methods: {
   initChart() {
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
       tooltip : {
         trigger: 'axis',
         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
           type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
       },
       legend:{
         show:false
       },
       grid: {
         left: '3%',
         right: '4%',
         bottom: '15%',
         containLabel: true
       },
       xAxis : [
         {
           type : 'category',
           data: this.optionlist.industry,
           axisTick: {
             show: false
           },
           axisLine: {
             show: false,
             lineStyle: {
               color: '#848c93'
             }
           },
           axisLabel: {
             interval: '0',
             fontSize: 12,
             color: '#999'
           }
         }
       ],
       yAxis : [
         {
           type : 'value',
           axisLine: {
             show: false
           },
           axisTick: {
             show: false
           },
           splitLine:{
             lineStyle:{
               color:'#e5e5e5',
               type:'solid'
             }
           },
           axisLabel: {
             fontSize: 12,
             color: '#999'
           }
         }
       ],
       color:['#668bb4'],
       series : [
         {
           name:'新用户',
           type:'bar',
           barWidth: '10',
           label: {
             normal: {
               show: true,
               color: ['#ff8400','#4b79ab'],
               fontSize: 18,
               position: 'top',
               formatter: '{c}%',
               offset: [0,-5]
             }
           },
           data: this.optionlist.dataList.map((item,index)=>{
             if(index == 0){
               return {
                 value: item,
                 itemStyle:{
                   normal:{
                     color: '#ff8400'
                   }
                 }

               }
             } else{
               return item
             }
           })

         }
       ]
     });
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
