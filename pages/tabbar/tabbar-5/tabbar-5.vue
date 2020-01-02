<template>
	<view class="content">
		<view style="width: 100%;height:300upx;background: skyblue;"></view>
		<view class="personal">
			<image style="width: 200upx;height:200upx;border-radius: 50%;margin-top: -15%;border: 5px #fff solid;" src="../../../static/img/kc1.jpg"></image>
			<view>Lyy</view>
			<view>一个努力的英语学习者</view>
			<view class="adlist">
				<view class="listitem listitem1">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
					<view style="font-size:30rpx;">数据分析</view>
				</view>
				<view class="listitem listitem2">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
					<view style="font-size:30rpx;">考试记录</view>
				</view>
				<view class="listitem listitem3">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
					<view style="font-size:30rpx;">图表统计</view>
				</view>
			</view>
		</view>
		
		<!--我的收藏  -->
		
			<!-- <view class="listitem listitem1 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">数据分析</view>
			</view>
			<view class="listitem listitem2 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">考试记录</view>
			</view>
			<view class="listitem listitem3 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">图表统计</view>
			</view>
			<view class="listitem listitem1 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">数据分析</view>
			</view>
			<view class="listitem listitem2 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">考试记录</view>
			</view>
			<view class="listitem listitem3 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">图表统计</view>
			</view>
			<view class="listitem listitem1 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">数据分析</view>
			</view>
			<view class="listitem listitem2 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">考试记录</view>
			</view>
			<view class="listitem listitem3 item">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:30rpx;">图表统计</view>
			</view> -->
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		background: #EDF0FF;
	}
	.content {
		/* text-align: center; */
		/* height: 400upx; */
		/* margin-top: 200upx; */
	}
	.personal{
		width: 100%;
		height: 40%;
		background: #fff;
		text-align: center;
		margin-top: -40px;
		width:90%;
		margin-left: 5%;
	}
	.adlist{
		width: 100%;
		display: flex;
		text-align: center;
		background: #FFFFFE;
		height: 20%;
		border-radius: 10upx;
		padding-top: 20upx;
		margin-top: 20upx;
		padding-bottom: 30upx;
		
	}
	.listitem{
		text-align: center;
		margin: 0 auto;
		width: 20%;
	}	
		
	.item1{
		width: 33.33%;
		height: 100upx;
		background-color: red;
	}
	.shoucang{
		width:90% ;
		margin: 0 auto;
		/* height:200upx ; */
		background-color: pink;
	}
</style>
