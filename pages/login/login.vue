<template>
	<view class="logins">	
	  <!-- 弹窗模板 -->
	   <uni-pop ref="uniPop"></uni-pop>
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
					<input type="text" v-model="username" placeholder="请输入账号"  maxlength="11" @blur="inputUsername" >	
				</view>
				<view class="input">
					<input type="password" v-model="psw" placeholder="请输入密码"  @blur="inputPwd">	
				</view>
				<view class="input input1">
					<input type="text" placeholder="请输入验证码"  class="ipt"   v-model="verifyNum" @blur="inputNum" />
					<view class="yanzhengma " @click="refreshCode" >	
						{{this.identifyCode}}
					</view>
				</view>
				<view class="input input2">
					<text @tap="findPwd" class="text">忘记密码</text>
					<text @tap="goReg" class="zhuce" style="color:#95BCEF">立即注册</text>	
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
					<image src="../../static/img/2/2.png"  style="width: 100%;height:202upx ;" @tap="thirdLogin('qq')"></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/3.png"  style="width: 100%; height:202upx ;" @tap="thirdLogin('wechat')" ></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/4.png"  style="width: 100%;height:202upx;"  @tap="thirdLogin('weibo')"></image>
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
					<input type="text" v-model="uname" placeholder="请输入账号"  @blur="inputUname" maxlength="11">	
				</view>
				<view class="input">
					<input type="password" v-model="unamepsw" placeholder="请输入密码" @blur="inputPsw">	
				</view>
				<view class="input input1">
					<input type="text" placeholder="请输入验证码"   v-model="verifyNum" class="ipt"  @blur="inputNum" />
					<view class="yanzhengma " @click="refreshCode" >
						{{this.identifyCode}}
					</view>
				</view>
				<view class="input input2">
					<text @tap="findPwd" class="text">忘记密码</text>
					<text @tap="goReg" class="zhuce" style="color:#95BCEF">立即注册</text>	
				</view>
				<!-- 登录提交 -->
				<button class="submit"  @tap="tecLogin">登录</button>
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
					<image src="../../static/img/2/2.png"   style="width: 100%;height:202upx ;" @tap="thirdLogin('qq')"></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/3.png"  style="width: 100%; height:202upx ;" @tap="thirdLogin('wechat')" ></image>
				</view>
				<view class="items">
					<image src="../../static/img/2/4.png"  style="width: 100%; height:202upx ;"  @tap="thirdLogin('weibo')"></image>
				</view>
			</view>		
		</view> 		
	</view>
	
</view>
</template>
<script>
	import uniPop from '../../components/uni-popup/uni-popup.vue'
	import Prompt from '@/components/zz-prompt/index.vue'
	// import Sidentify from "../../components/identify.vue";
	// ,Sidentify
	export default {
    components: {Prompt,uniPop},
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				// 随机数
				identifyCodes: "1234567890",
				// 生成的验证码值
				identifyCode:'',
				// 自己输入的验证码
				verifyNum:"",
				// 
				value:'',
				// 控制弹框的显示与隐藏
				promptVisible: false,
				 // 学生账号
				username: '',
				// 学生密码
				psw: '',
				//老师账号
				uname:'',
				// 老师密码
				unamepsw:'',
				// 文本框类型
				pwdType: 'password',
				// 控制是学生登录还是教师登录
				flag:1,
				// flages:0				
			}
		},
		methods: {
			// 学生账号文本框失去焦点事件
			inputUsername(e) {
				this.username = e.target.value
			},
			// 学生密码文本框失去焦点事件
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			// 教师账号文本框失去焦点事件
			inputUname(){
				this.uname = e.target.value
			},
			// 教师账号文本框失去焦点事件
			inputPsw() {
			this.unamepsw=e.target.value
			},
			//验证码文本框失去焦点事件
			inputNum(e){
				console.log(e)
				console.log(this.identifyCode)
				this.verifyNum=e.target.value
			},
			// 
			delUser() {
				this.username = ''
			},
			// 切换文本框类型的事件
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			// 学生账号登录事件
			login() {
				if (this.username.length < 11||this.username.trim() ==0 ){
					  uni.showToast({
							 icon: 'none',
							 title: '账号不正确'
						});
						return;
				}
				if (this.psw.length < 6) {
					 uni.showToast({
						icon: 'none',
						title: '密码不正确'
					 });
					 return;
				}
			console.log('username:' + this.username + ',pwd:' + this.userpwd)
				 if (this.identifyCode !== this.verifyNum) {
				        uni.showToast({ icon: 'none',
				        title: '验证码不正确',
					});
				        this.verifyNum = "";
				        this.refreshCode();
				        // this.btnLogin = false;
				    return false;
			   }
				// console.log('username:' + this.username + ',pwd:' + this.userpwd)
				uni.switchTab({
				    url: '/pages/tabbar/tabbar-1/tabbar-1'
				});
				this.username=''
				this.psw=''
				this.verifyNum=''
			},
			//教师账号登录
			tecLogin(){
					if (this.uname.length < 11||this.uname.trim==0 ){
							uni.showToast({
							 icon: 'none',
							 title: '账号不正确'
							});
						return;
					}
					if (this.unamepsw.length < 6) {
						 uni.showToast({
						 icon: 'none',
						title: '密码不正确'
					});
					return;
					}
					// 
					if (this.identifyCode !== this.verifyNum) {
				        uni.showToast({ icon: 'none',
				        title: '密码不正确',
					});
				        this.verifyNum = "";
				        this.refreshCode();
				        // this.btnLogin = false;
				        return false;
				      }					
					uni.switchTab({
					 url: '/pages/tabbar/tabbar-1/tabbar-1'
					});
			},
			// 修改密码
			findPwd() {
				uni.navigateTo({
					url:'/pages/find-pwd/find-pwd'
				})
			},
			// 注册
			goReg() {
				uni.navigateTo({
					url:'/pages/reg/reg'
				})
			},
			// 第三方登录
			thirdLogin(type) {
				console.log(type)
			},
			//切换为老师事件 
			change(){
				 // this.$refs.popup.open()
				 this.promptVisible=true	
			},
			// 切换为学生登陆
			changes(){
				 this.promptVisible=false
				 this.flag===1?this.flag=2:this.flag=1	
			},
			// 弹框点击确定按钮后发生的事件
			clickPromptConfirm(val) {
			      // console.log(123)
				  console.log(val)
				  this.flag===1?this.flag=2:this.flag=1	
				  this.promptVisible=false		 			  
			  },
			  //生成随机验证码
			refreshCode() {
			      this.identifyCode = "";
			      this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				console.log(123)
		     for (let i = 0; i < l; i++) {
		        this.identifyCode += this.identifyCodes[
		         this.randomNum(0, this.identifyCodes.length)
				  ];
		    }
			  console.log(this.identifyCode)
			},
			randomNum(min,max){
			  return Math.floor(Math.random() * (max - min) + min);
			},			
		},
		onLoad(){
			
			 this.identifyCode = "";
			 this.makeCode(this.identifyCodes, 4),
			 // this.identifyCode(this.drawPic()),
			 this.randomNum() 
		}
	}
</script>

<style lang="scss" scoped>

page {
		height: auto;
		min-height: 100%;
		background-color: #64A1F1;
		// display: none;
		// background: linear-gradient(to top,#63A0F1,#AED0FE)
}
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
		// background-color: #87CEEB;
		background: linear-gradient(to top,#63A0F1,#AED0FE);
		.login{
			width:86% ;
			height: 840upx;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 100upx;
			border-radius: 5%;
			border-top: 1px solid transparent;
			box-shadow:0upx 5upx 5upx 0upx rgba(0,0,0,0.47);
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
	uni-page-head{
		display: none!important;
		.uni-page-head{
			display: none!important;
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
		line-height: 60upx;
		margin-left: 10%;
		border: 1px solid #95BCEF;
		box-sizing: border-box;
		display: inline-block;
		float: right;
		text-align: center;
		background: url(../../static/img/ganraotu.jpg);
		// background: url(../../static/img/6.jpg);
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
	background-color: #71A8F3;
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
	// height: 101rpx;
	// height: 140upx;
	// background-color: pink;
	display: flex;
	.items{
		width: 33.33%;
	}
}

uni-page-head{
	display: none;

}
</style>
