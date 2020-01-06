<template>
	<view class="content">
		 <cmd-nav-bar style="border:none;box-shadow:none;"  back   :fixed="true"    font-color="#fff"  background-color=" linear-gradient(to right,#7BAFFA, #8FC1FE);" ></cmd-nav-bar>
		<view class="header"  style="margin-top: 100upx;">
			<image src="../../static/img/2/1.png" style="width: 161upx; height: 161upx;"></image>
		</view>
		
		<view class="list">
			<view class="list-call" >
				
				<input class="biaoti" v-model="phoneno" type="number" maxlength="11" placeholder="手机号" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="登录密码" :password="!showPassword" />
				<image class="img" :src="showPassword?'/static/shilu-login/op.png':'/static/shilu-login/cl.png'" @tap="display"></image>
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="uname" type="text" maxlength="32" placeholder="请输入真实姓名" />
			</view>
			<view class="list-call">
					<input type="text"  class="biaoti addreses"   @tap="openAddres" placeholder="请选择地区" :value="pickerText" style="width: 100%; height: 60upx;"/>
				    <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
			</view>
			<view class="list-call" >
				<view class="uni-title uni-common-pl" style="font-size: 32upx;color:#808080 ;text-indent:0.5em"  >请选择学校</view>
				<view class="uni-list">
				    <view class="uni-list-cell">				              
				     <view class="uni-list-cell-db">
				        <picker @change="schoolChange" :value="indexs" :range="schoolList">
				          <view class="uni-input" style="font-size: 32upx;"   >{{schoolList[indexs]}}</view>
				        </picker>
				     </view>
					</view>
				</view>
				<!-- <image class="img" src="/static/shilu-login/4.png"></image> -->
				<!-- <input class="biaoti" v-model="invitation" type="text" maxlength="12" placeholder="邀请码" /> -->
			</view>	
			<view class="list-call" v-if="flags==1">
				<view class="uni-title uni-common-pl" style="font-size: 32upx; color:#808080 ;text-indent:0.5em" >请选择教师</view>
				<view class="uni-list">
				    <view class="uni-list-cell">
				              
				     <view class="uni-list-cell-db">
				        <picker @change="bindPickerChange" :value="index" :range="array">
				          <view class="uni-input" style="font-size: 32upx; ">{{array[index]}}</view>
				        </picker>
				     </view>
					</view>
				</view>
				<!-- <image class="img" src="/static/shilu-login/4.png"></image> -->
				<!-- <input class="biaoti" v-model="invitation" type="text" maxlength="12" placeholder="邀请码" /> -->
			</view>	
			<view class="list-call"  v-if="flags==1">
				<view class="uni-title uni-common-pl" style="font-size: 32upx; color:#808080 ;text-indent:0.5em">请选择班级</view>
				<view class="uni-list">
				    <view class="uni-list-cell">
				     <view class="uni-list-cell-db">
				        <picker @change="classChange" :value="key" :range="classList">
				          <view class="uni-input" style="font-size: 32upx; width:50% height:32upx ;">{{classList[key]}}</view>
				        </picker>
				     </view>
					</view>
				</view>
			</view>						
		</view>
		
		<view class="dlbutton"  @tap="bindLogin" >
			<text>注册</text>
		</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	// var tha,js;
	export default {
		components: {cmdNavBar,simpleAddress},
		onLoad(options){
			// tha = this;
			const flags = JSON.parse(options.flag); // 字符串转对象
			 console.log(flags)
			 this.flags=flags
			 console.log(this.flags)
			
		},
		onUnload(){
			// clearInterval(js)
			this.second = 0;
		},
		data() {
			return {
				//控制是老师登录还是学生登录
				flags:'',
				//手机号 
				phoneno:'',
				// 密码
				password:'',
				// 真实姓名
				uname:'',
				code:'',
				invitation:'',
				xieyi:true,
				showPassword:false,
				second:0,
				cityPickerValueDefault: [0, 0, 1],
				// 选择的地区
				pickerText: '',
				 title: 'picker',
				 // 选择教师
				 array: [''],
				 // 选择教师当前的索引号
				 index: 0,
				 // 请选择班级
				 classList:[''],
				 // 当前选择班级的索引号
				 key:0,
				 // 选择学校
				 schoolList:[''],
				 indexs:0
			};
		},
		computed:{
			yanzhengma(){
				if(this.second==0){
					return '获取验证码';
				}else{
					if(this.second<10){
						return '重新获取0'+this.second;
					}else{
						return '重新获取'+this.second;
					}
				}
			}
		},
		methods: {
			goback(){
				uni.navigateBack({
				    delta: 1
				});
			},
			// 选择学校
			schoolChange(e){
				console.log(e)
					// this.array=['zhang','lisi','wangwu']
				 console.log('picker发送选择改变，携带值为', e.target.value)
				this.indexs = e.target.value
				this.array=['zhang','lisi','wangwu']
				
			},
			// 选择老师
			bindPickerChange: function(e) {e
			console.log()
				// this.array=['zhang','lisi','wangwu']
			      console.log('picker发送选择改变，携带值为', e.target.value)
			      this.index = e.target.value
				 this.classList=['1班','2班','3班'] 
				  
			 },
			 // 选择班级
			 classChange: function(e) {
			       console.log('picker发送选择改变，携带值为', e.target.value)
			       this.key = e.target.value
			  },
			  addreschange(e){
				  console.log(e)
				  this.pickerText=e.target.value
			  },
			  // 地区
			  openAddres() {
			        this.$refs.simpleAddress.open();
			   },
			   // 选择地区点击确定按钮后发生的事件
			    onConfirm(e) {
					console.log(e)
					this.schoolList=['南京大学','三联学校','安徽大学']
					
			         // this.pickerText = JSON.stringify(e.label)
					var reg = /^[\'\"]+|[\'\"]+$/g;
					var str = JSON.stringify(e.label);
					this.pickerText=JSON.stringify(e.label).replace(reg,"");
			    },
			display() {
			    this.showPassword = !this.showPassword
			},
			xieyitong(){
				this.xieyi = !this.xieyi;
			},
			// 注册按钮
		    bindLogin() {
				// 学生登录
				if(this.flags==1){
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				console.log(this.phoneno)
				if (!myreg.test(this.phoneno)) {
					 uni.showToast({
					  icon: 'none',
					  title: '手机号不正确'
					});
				return;
				}
				
		        if (this.password.length < 6) {
		            uni.showToast({
		                icon: 'none',
		                title: '密码不正确'
		            });
		            return;
		        }
				console.log(this.uname)
				if (this.uname.trim() =='') {
		            uni.showToast({
		                icon: 'none',
		                title: '请输入姓名'
		            });
		            return;
		        }				
				if (this.pickerText.trim() == '') {
				    uni.showToast({
				        icon: 'none',
				        title: '请选择地区'
				    });
				    return;
				}
				// 选择学校
				console.log(this.schoolList[this.indexs])				
				// 选择的教师
				console.log(this.array[this.index])
				// 选择的班级
				console.log(this.classList[this.key])
				
				
				// 注册成功后给出提示信息
				uni.showToast({ icon: 'none',
				title: '注册成功',
				})
				// 注册成功后清空内容
				this.phoneno=''
				this.password=''
				this.pickerText=''
				this.uname=''
				this.schoolList=['']
				this.indexs=''
				this.schoolList[this.indexs]=''
				this.array=['']
				this.index=''
				this.array[this.index]=''
				this.classList=['']
				this.key=''
				this.classList[this.key]=''
				// uni.request({
				//     url: 'http://***/reg.html',
				//     data: {
				// 		phoneno:this.phoneno,
				// 		password:this.password,
				// 		address:this.pickerText,
				// 		invitation:this.invitation
				// 	},
				// 	method: 'POST',
				// 	dataType:'json',
				//     success: (res) => {
				// 		if(res.data.code!=200){
				// 			uni.showToast({title:res.data.msg,icon:'none'});
				// 		}else{
				// 			uni.showToast({title:res.data.msg});
				// 			setTimeout(function(){
				// 				uni.navigateBack();
				// 			},1500) 
				// 		}
				//     }
				// });
				
			// 教师登录
			}else{
			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
			console.log(this.phoneno)
			if (!myreg.test(this.phoneno)) {
				 uni.showToast({
				 icon: 'none',
				 title: '手机号不正确'
			});
			return;
			}
				
			if (this.password.length < 6) {
			 uni.showToast({
			 icon: 'none',
			  title: '密码不正确'
			 });
			 return;
			}
			
			if (this.pickerText.trim() == '') {
			 uni.showToast({
			 icon: 'none',
			 title: '请选择地区'
			 });
				return;
			}
			console.log(this.uname)
			if (this.uname.trim() =='') {
		        uni.showToast({
		        icon: 'none',
		        title: '请输入姓名'
		     });
		    return;
		     }				
			// 选择学校
			console.log(this.schoolList[this.indexs])	
			// 注册成功后给出提示信息
			uni.showToast({ icon: 'none',
			title: '注册成功',
			})
			// 注册成功后清空内容
			this.phoneno=''
			this.password=''
			this.pickerText=''
			this.uname=''
			this.schoolList=['']
			this.indexs=''
			this.schoolList[this.indexs]=''
			this.array=['']
			this.index=''
			this.array[this.index]=''
			this.classList=['']
			this.key=''
			this.classList[this.key]=''	
				
			}
				
		    }
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content:center;
	}
	.header {
		width:161upx;
		height:161upx;
		/* background:rgba(63,205,235,1); */
		background: linear-gradient(to top,#63A0F1,#AED0FE);
		box-shadow:0upx 5upx 5upx 0upx rgba(0,0,0,0.5);
		border-radius:50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}
	.header image{
		width:161upx;
		height:161upx;
		border-radius:50%;
	}
	
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 40upx;
		height: 40upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}
	.yzm {
		color: #000;
		font-size: 24upx;
		line-height: 64upx;
		padding-left: 10upx;
		padding-right: 10upx;
		width:auto;
		height:64upx;
		border:1upx solid #95BCEF;
		border-radius: 50upx;
	}
	.yzms {
		color: #999999 !important;
		border:1upx solid #999999;
	}
	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width:470upx;
		height:100upx;
		/* background:linear-gradient(-90deg,rgba(63,205,235,1),rgba(188,226,158,1)); */
		background: linear-gradient(to top,#63A0F1,#AED0FE);
		box-shadow:0upx 0upx 13upx 0upx rgba(164,217,228,0.2);
		border-radius:50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}
	.dlbutton-hover {
		background:linear-gradient(-90deg,rgba(63,205,235,0.9),rgba(188,226,158,0.9));
	}
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi image{
		width: 40upx;
		height: 40upx;
	}
</style>
