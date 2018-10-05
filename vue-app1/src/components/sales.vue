<template>
    <div style="width:80%;height:500px;" ref="chart"></div>
</template>

<script>
   	import echarts from 'echarts'
    
    export default {
        data(){
            return {
                myChart:null,
            }
        },
        mounted(){
            this.myChart = echarts.init(this.$refs.chart);
            this.myChart.setOption(this.readyBarOption(this.type));
        },
		beforeDestroy() {
			if (!this.myChart) {
				return
			}
			this.myChart.dispose();
			this.myChart = null;
        },
        props: ['id'],
        methods: {
            readyBarOption(){
				  let data = {
					  tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
						type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data:['牛肉汉堡','芝士汉堡','虾肉汉堡','蟹黄汉堡','巨无霸汉堡','猪肉汉堡']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis : [
					{
						type : 'category',
						data : ['周一','周二','周三','周四','周五','周六','周日']
					}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'牛肉汉堡',
							type:'bar',
							data:[320, 332, 301, 334, 390, 330, 320]
						},
						{
							name:'芝士汉堡',
							type:'bar',
							stack: '广告',
							data:[120, 132, 101, 134, 90, 230, 210]
						},
						{
							name:'虾肉汉堡',
							type:'bar',
							stack: '广告',
							data:[220, 182, 191, 234, 290, 330, 310]
						},
						{
							name:'蟹黄汉堡',
							type:'bar',
							stack: '广告',
							data:[150, 232, 201, 154, 190, 330, 410]
						},
						{
							name:'巨无霸汉堡',
							type:'bar',
							data:[862, 1018, 964, 1026, 1679, 1600, 1570],
							markLine : {
								lineStyle: {
									normal: {
										type: 'dashed'
									}
								},
								data : [
									[{type : 'min'}, {type : 'max'}]
								]
							}
						},
						{
							name:'猪肉汉堡',
							type:'bar',
							barWidth : 5,
							stack: '搜索引擎',
							data:[620, 732, 701, 734, 1090, 1130, 1120]
						}
					]
				}
				return data;
				  
			},
        },
        watch: {
            id:(v)=>{
                this.readyBarOption(v)
            }
        }
    }
</script>


<style scoped>


</style>
