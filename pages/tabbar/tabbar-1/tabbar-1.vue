<template>
	<view class="content">
		 <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item uni-bg-red">
								<image style="width:100%;height:300upx;" src="https://2fz1.me/img/phaser.jpg"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-green">
								<image  style="width:100%;height:300upx;" src="https://2fz1.me/img/css3.png"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-blue">
								<image  style="width:100%;height:300upx;" src="https://2fz1.me/img/nodemodules.jpg"></image>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
		</view>
		
		<view class="adlist">
			<view class="listitem listitem1">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:35rpx;">新闻</view>
			</view>
			<view class="listitem listitem2">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:35rpx;">突破</view>
			</view>
			<view class="listitem listitem3">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:35rpx;">集锦</view>
			</view>
			<view class="listitem listitem4">
				<view><image style="width:100upx;height:100upx;" src="../../../static/img/qa.png"></image></view>
				<view style="font-size:35rpx;">竞赛</view>
			</view>
		</view>
		
		<view class="zblist">
			<view class="head">
				<view class="title">直播</view>
				<view class="more">...</view>
			</view>
			<view class="zblb">
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/kc1.jfif"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/kc2.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/kc3.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/kc4.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
			</view>
		</view>
		
		
		<view class="zblist" style="margin-top: 50upx;">
			<view class="head">
				<view class="title">推荐</view>
				<view class="more">...</view>
			</view>
			<view class="zblb">
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/zb1.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/zb2.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/zb3.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
				<view class="zblblist">
					<view><image  class="zbimg"  src="../../../static/img/zb4.jpg"></image></view>
					<view class="title1" >名师指导在线直播</view>
					<view class="title2" >28人转发</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		 // background: ['red', 'color2', 'color3'],
         indicatorDots: true,
         autoplay: true,
         interval: 2000,
         duration: 500
		};
	},
	onLoad() {},
	methods: {
		 changeIndicatorDots(e) {
		            this.indicatorDots = !this.indicatorDots
		        },
		        changeAutoplay(e) {
		            this.autoplay = !this.autoplay
		        },
		        intervalChange(e) {
		            this.interval = e.target.value
		        },
		        durationChange(e) {
		            this.duration = e.target.value
		        }
	}
};
</script>

<style>
	page{
		background: #EDF0FF;
	}
.content {
	width: 100%;
}
.uni-padding-wrap{
		width:90%;
		height: 10%;
		margin-left: 5%;
		/* background: red; */
}
.page-section-spacing{
	width: 100%;
}
.swiper-item{
	width: 1000rpx;
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
	margin-top: 20upx;
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
}
.head{
	display: flex;
	position: relative;
}
.title{
	font-size: 30upx;
	display: block;
	border-left: 10upx #90B7FF solid;
	margin: 20px 10px;
	padding-left: 10px;
/* 	height: 30px;
	line-height:30px; */
}
.more{
	position: absolute;
	right: 0;
	height: 30px;
	line-height:30px;
	margin-top: 3%;
	margin-right: 30upx;
}
.zbimg{
	display: block;
	width:100%;
	height: 200upx;
	border: 1px #007AFF solid;
	border-radius: 10px;
}
.title1{
	font-size: 26upx;
	color: #007AFF;
	height: 40upx;
	line-height: 40upx;
	margin-top: 10upx;
	text-align: left;
}
.title2{
	font-size: 20upx;
	height: 40upx;
	line-height: 40upx;
	text-align: left;
}
.zblb{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: flex-start;
	height: 700upx;
	margin-top: -50upx;
}
.zblblist{
	width: 45%;
	text-align: center;
	margin-top: 30upx;
	height: 300upx;
}
</style>
