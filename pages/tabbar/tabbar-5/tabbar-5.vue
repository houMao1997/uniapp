<template>
	<view class="content">
		 <cmd-nav-bar style="border: none;box-shadow: none;" :fixed="true" right-text="设置"   title="个人中心"  @rightText="settings()" font-color="#fff" background-color=" linear-gradient(to right,#7BAFFA, #8FC1FE);"></cmd-nav-bar>
		<view style="width: 100%;height:300upx; background-image: linear-gradient(to right,#7BAFFA, #8FC1FE);"></view>
		<view class="personal">
			<image style="width: 200upx;height:200upx;border-radius: 50%;margin-top: -15%;border: 5px #fff solid;" src="../../../static/img/kc1.jpg"></image>
			<view style="font-size: 40upx;color: #90B7FF;">Lyy</view>
			<view  style="font-size: 30upx;color: #ccc;margin-top: 15upx;">一个努力的英语学习者</view>
			<view class="adlist">
				<view class="listitem listitem1">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
					<view style="font-size:25rpx;color: #959595;">数据分析</view>
				</view>
				<view class="listitem listitem2">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
					<view style="font-size:25rpx;color: #959595;">考试记录</view>
				</view>
				<view class="listitem listitem3">
					<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
					<view style="font-size:25rpx;color: #959595;">图表统计</view>
				</view>
			</view>
		</view>

		<view>
			<view class="zblist" style="margin-top:30upx;">
				<view class="zblb" >
					<uni-grid :column="3" :show-border="false"  :square="true" style="text-align: center;margin: 20px auto;">
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					       <view class="title1" >我的收藏</view>
					    </uni-grid-item>
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					        <view class="title1" >历史考试</view>
					    </uni-grid-item>
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					       <view class="title1" >我的下载</view>
					    </uni-grid-item>
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					        <view class="title1" >我的预约</view>
					    </uni-grid-item>
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					        <view class="title1" >在线直播</view>
					    </uni-grid-item>
					    <uni-grid-item>
					       <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
					        <view class="title1" >我的钱包</view>
					    </uni-grid-item>
						<uni-grid-item>
						    <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
						    <view class="title1" >我的购买</view>
						</uni-grid-item>
						<uni-grid-item>
						   <view><image  class="zbimg"  src="../../../static/img/qq.png"></image></view>
						    <view class="title1" >主题皮肤</view>
						</uni-grid-item>
						<!-- <uni-grid-item>
						    <view><image  class="zbimg"  src="../../../static/img/my1.png"></image></view>
						    <view class="title1" >我的收藏</view>
						</uni-grid-item> -->
					</uni-grid>					
				</view>
			</view>

		</view>
		
		<view class="adlist1">
			<view class="listitem listitem1">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
				<view style="font-size:30rpx;">意见反馈</view>
			</view>
			<view class="listitem listitem2">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
				<view style="font-size:30rpx;">在线客服</view>
			</view>
			<view class="listitem listitem3">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qq.png"></image></view>
				<view style="font-size:30rpx;">商务合作</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {uniGrid,uniGridItem,cmdNavBar},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onNavigationBarButtonTap(val) {
		                console.log(val.index);
		                if (val.index == 1) {
		                    console.log("第一个按钮");
		                };
		
		                if (val.index == 0) {
		
		                                console.log("第二个按钮");
		
		                }
		
		},
		methods: {
			settings(){
				console.log(123)
			}
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
		border-radius: 10px;
		box-shadow: 2px 2px 2px 1px #ccc;
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

.adlist{
	width: 90%;
	display: flex;
	text-align: center;
	background: #FFFFFE;
	height: 20%;
	border-radius: 10upx;
	margin-left: 5%;
	padding-top: 20upx;
	
}
.adlist1{
	width: 90%;
	display: flex;
	text-align: center;
	height: 20%;
	border-radius: 10upx;
	margin-left: 5%;
	padding-top: 20upx;
	margin-top: 20upx;
	padding-bottom: 40upx;
}

.listitem{
	text-align: center;
	margin: 0 auto;
	width: 20%;
}
.zblist{
	width: 90%;
	background: #fff;
	margin-left: 5%;
	margin-top: 20upx;
	border-radius: 10px;
	box-shadow:  2px 2px 2px 1px #ccc;;
	border: 1px #ccc solid;
}
/* .zblb{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	height: 700upx;
	text-align: center;
	width: 100%;
	padding-left: 50upx;
	flex-direction: row;
}
.zblblist{
	width: 30%;
	margin-top: 30upx;
} */
.title1{
	font-size: 30upx;
	color: #505050;
	height: 40upx;
	line-height: 40upx;
	margin-top: 10upx;
	text-align: center; 
}
.zbimg{
 	display: block;
	width:100upx;
	height: 100upx; 
	/* border-radius: 10px;
	text-align: right; */
	text-align: center;
	margin-left: 26%;
} 
</style>
