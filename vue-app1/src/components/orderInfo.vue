<template>
	<div class="orderInfo">
		<div class="container">
			<el-table
			border
			:data="tableData"
			style="width: 100%">                   
			<el-table-column
			type="index"
			label="序号"
			width="60"
			align="center">
			</el-table-column>
			<el-table-column
			label="日期"
			width="250"
			align="center">
			<template slot-scope="scope">
				<i class="el-icon-time"></i>
				<span>{{ scope.row.date }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="商品名称"
			width="130"
			align="center">
			<template slot-scope="scope">
				<span>{{ scope.row.goods }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="商家"
			width="130"
			align="center">
			<template slot-scope="scope">
				<span>{{ scope.row.seller }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="收入/元"
			width="100"
			align="center">
			<template slot-scope="scope">
				<span style="color:#00d053">+{{ scope.row.income }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="数量/份"
			width="100"
			align="center">
			<template slot-scope="scope">
				<span style="color:#f56767">{{ scope.row.count }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="订单号"
			width="130"
			align="center">
			<template slot-scope="scope">
				<span>{{ scope.row.ordernum }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="客户姓名"
			width="120"
			align="center">
			<template slot-scope="scope">
				<span>{{ scope.row.name }}</span>
			</template>
			</el-table-column>
			<el-table-column label="订单状态" align="center" width="170">
			<template slot-scope="scope">
				<el-button type="primary">正在派单</el-button>
			</template>
			</el-table-column>
		</el-table>
		</div>
		
	</div>
</template>

<script>
export default {
  name: 'orderInfo',
  data () {
    return {
		tableData:[
			{date:"2018-09-28T09:11:36",goods:"牛肉汉堡",seller:"hamburgers",income:"12",count:"2",ordernum:"201809281001",name:"Alan"},
			{date:"2018-09-28T010:12:40",goods:"虾肉汉堡",seller:"hamburgers",income:"14",count:"2",ordernum:"201809281002",name:"李豪"},
			{date:"2018-09-28T11:01:09",goods:"牛肉汉堡",seller:"hamburgers",income:"13",count:"2",ordernum:"201809281003",name:"Jack"},
			{date:"2018-09-28T11:11:31",goods:"蟹黄汉堡",seller:"hamburgers",income:"12",count:"2",ordernum:"201809281004",name:"James"},
			{date:"2018-09-28T11:22:33",goods:"猪肉汉堡",seller:"hamburgers",income:"15",count:"2",ordernum:"201809281005",name:"Paul"},
			{date:"2018-09-28T12:44:56",goods:"牛肉汉堡",seller:"hamburgers",income:"13",count:"2",ordernum:"201809281006",name:"Tony"},
			{date:"2018-09-28T13:01:06",goods:"芝士汉堡",seller:"hamburgers",income:"14",count:"2",ordernum:"201809281007",name:"Ken"},
			{date:"2018-09-28T13:04:36",goods:"虾肉汉堡",seller:"hamburgers",income:"18",count:"2",ordernum:"201809281008",name:"Eric"},
			{date:"2018-09-28T13:12:36",goods:"牛肉汉堡",seller:"hamburgers",income:"20",count:"2",ordernum:"201809281009",name:"Hebe"}
		]
    }
  }
}
</script>

<style scoped>


</style>
