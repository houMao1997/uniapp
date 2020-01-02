<template>
	<view class="logins">	
	
	<prompt :visible.sync="promptVisible"  @confirm="clickPromptConfirm" mainColor="#e74a39">
	  <!-- 这里放入slot内容-->
	</prompt>
	<view class="page_login" v-if="flag==1" >
		<view class="login">
			<view class="headers">
				<view class="head-img">
					<image src="../../static/img/2/1.png"  style="width: 150upx;height: 150upx;"></image>
				</view>
			</view>
			<view class="login_form">
				<view class="input">
					<input type="text" v-model="username" placeholder="请输入账号">	
				</view>
				<view class="input">
					<input type="password" v-model="psw" placeholder="请输入密码">	
				</view>
				<view class="input input1">
					<input type="text" placeholder="请输入验证码"  class="ipt"/>
					<view class="yanzhengma"> </view>
				</view>
				<view class="input input2">
					<text @tap="findPwd" class="text">忘记密码</text>
					<text @tap="goReg" class="zhuce">立即注册</text>	
				</view>
				<!-- 登录提交 -->
				<button class="submit"  @tap="login">登录</button>
			</view>
			<!--  点击切换教师登录-->
			<view class="xian"></view>
			<view class="changes" @tap="change" >
				点击切换教师账号
				
			</view>
			
		</view>
		<!-- 第三方登录 -->
		<view class="quick_login_list">
			<view class="xian1"></view>
			<view class="changes changes1">
				第三方登录
			</view>
			<view class="login_lists">
				<view class="items">
					<image src="../../static/img/2/2.png"  style="width: 100%; height:150upx ;" @tap="thirdLogin('qq')"></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/3.png"  style="width: 100%; height:150upx ;" @tap="thirdLogin('wechat')" ></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/4.png"  style="width: 100%; height:150upx ;"  @tap="thirdLogin('weibo')"></image>
				</view>
			</view>		
		</view> 		
	</view>
	<!-- 切换教师登录框 -->
	<view class="page_login" v-if="flag==2">
		<view class="login">
			<view class="headers">
				<view class="head-img">
					<image src="../../static/img/2/1.png"  style="width: 150upx;height: 150upx;"></image>
				</view>
			</view>
			<view class="login_form">
				<view class="input">
					<input type="text" v-model="username" placeholder="请输入账号">	
				</view>
				<view class="input">
					<input type="password" v-model="psw" placeholder="请输入密码">	
				</view>
				<view class="input input1">
					<input type="text" placeholder="请输入验证码"  class="ipt"/>
					<view class="yanzhengma"> </view>
				</view>
				<view class="input input2">
					<text @tap="findPwd" class="text">忘记密码</text>
					<text @tap="goReg" class="zhuce">立即注册</text>	
				</view>
				<!-- 登录提交 -->
				<button class="submit"  @tap="login">登录</button>
			</view>
			<!--  点击切换学生登录-->
			<view class="xian"></view>
			<view class="changes" @tap="changes" >
				点击切换学生账号			
			</view>		
		</view>
		<!-- 第三方登录 -->
		<view class="quick_login_list">
			<view class="xian1"></view>
			<view class="changes changes1">
				第三方登录
			</view>
			<view class="login_lists">
				<view class="items">
					<image src="../../static/img/2/2.png"  style="width: 100%; height:150upx ;" @tap="thirdLogin('qq')"></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/3.png"  style="width: 100%; height:150upx ;" @tap="thirdLogin('wechat')" ></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/4.png"  style="width: 100%; height:150upx ;"  @tap="thirdLogin('weibo')"></image>
				</view>
			</view>		
		</view> 		
	</view>
	
</view>
</template>
<script>
	import Prompt from '@/components/zz-prompt/index.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		
    components: {Prompt},
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				value:'',
				 promptVisible: false,
				username: '',
				psw: '',
				pwdType: 'password',
				flag:1,
				// flages:0				
			}
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				// console.log('username:' + this.username + ',pwd:' + this.userpwd)
				uni.switchTab({
				    url: '/pages/tabbar/tabbar-1/tabbar-1'
				});
			},
			findPwd() {
				uni.navigateTo({
					url:'/pages/find-pwd/find-pwd'
				})
			},
			goReg() {
				uni.navigateTo({
					url:'/pages/reg/reg'
				})
			},
			thirdLogin(type) {
				console.log(type)
			},
			change(){
				 // this.$refs.popup.open()
				 this.promptVisible=true
				
			},
			changes(){
				 this.promptVisible=false
				 this.flag===1?this.flag=2:this.flag=1	
			},
			 clickPromptConfirm(val) {
			      console.log(123)
				  this.flag===1?this.flag=2:this.flag=1	
				  this.promptVisible=false
				 			  
			  }
	
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	
	// $logo-padding: 60px;
	// $form-border-color: rgba(214, 214, 214, 1);
	// $text-color: #B6B6B6;
	prompt{
		background-color: #fff!important;
	}
	ipts{
		width:50%;
		height:40upx;
		background-color:pink;
		}
	body,html,
	.page_login {
		padding: 10px;
		background-color: #87CEEB;
		.login{
			width:86% ;
			height: 840upx;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 100upx;
			border-radius: 5%;
			border-top: 1px solid transparent;
			.headers{
				width: 150upx;
				height: 150upx;
				padding: 10upx;
				// background-color: #fff;
				border: 2px solid #fff;
				border-radius: 50%;
				margin:0 auto;
				margin-top: -85upx;
				margin-bottom: 80upx;
				.head-img{
					width: 100%;
					height: 100%;
					background-color: #fff;
					border-radius: 50%;
				}
			}
		}
	}
		
	.input{
		width: 80%;
		height: 60upx;
		border: 1px solid #ccc;
		margin: 0 auto;
		border-radius: 30upx;
		margin-bottom: 50upx;
		
	input{
		 width: 100%;
		 height: 100%;
		 border:0;
		 // color: ;
		 text-align: center;
	}
		
	.ipt{
		width: 50%;
		// margin:0
		// background-color: pink;
	}
		
	.yanzhengma{
		width: 40%;
		height: 60upx;
		margin-left: 10%;
		border: 1px solid #CCCCCC;
		box-sizing: border-box;
		display: inline-block;
		float: right;
		
	}
	}
		
	.input1{
		border: none ;
		.ipt{
			float: left;
			width: 50%;
			// background-color: pink;
			border-radius: 30upx;
			border: 1px solid #CCCCCC;
			box-sizing: border-box;
			}
		
	}
		
	.input2{
		border: none;
		color: #ccc;
		font-size: 14px;
		.text{ 
			float: left;
		}
		.zhuce{ 
			float: right;
		}
		}
			
		.submit{
			width: 80%;
			height: 100upx;
			border: 1px solid #448BF4;
			margin: 0 auto;
			border-radius: 50upx;
			margin-bottom: 50upx;
			color: #448BF4;
			
		}
.xian{ 
	width: 100%;
	height: 1px;
	// border: 1px silid #448BF4;
	background-color:#448BF4;
}
	
.changes{
	width: 40%;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	margin: 0 auto ;
	margin-top: -30upx;
	background-color: #fff;
	color: #448BF4;
	font-size: 14px;
	// align-items: center;
}
.changes1{
	margin-top: -70upx;
	background-color: #87CEEB;
	color: #fff;
	width: 30%;
}
.quick_login_list{
	width: 86%;
	margin: 0 auto;
	
	}
	.xian1{
		width: 100%;
		margin-bottom: 40upx;
		height: 1px;
		margin-top: 40upx;
		// border: 1px silid #448BF4;
		background-color:#fff;
	}
.login_lists{
	width: 100%;
	height: 140upx;
	// background-color: pink;
	display: flex;
	.items{
		width: 33.33%;
	}
}
</style>
