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
		height: 300upx;
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
	height: 180upx;
	border-radius: 10upx;
	margin-left: 5%;
	padding-top: 20upx;
}
.listitem{
	text-align: center;
	margin: 0 auto;
	width: 20%;
}

</style>
