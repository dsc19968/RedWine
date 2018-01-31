<template>
  <div class="login">
  	<!--head区-->
  	<header>
  		<div class="head">
  			<router-link to="/self" class="icon l"><i>></i></router-link>
  			<h3 class="l">登录</h3>
  			<span class="icon l message" >
  				<router-link to="/register">
  				<i>注册</i>
  				</router-link>
  			</span>
  		</div>
  	</header>
  	<!--banner区-->
  	<div class="banner">
  		<img src="../assets/images/jiu3.jpg">
  	</div>
  	<!--登录信息-->
  	<div class="login_info">
			<ul>
				<li class="clear phone">
					<div class="phone_num">
			  			<i class="iconfont icon-wode"></i>
			  			<input type="text" placeholder="请输入手机号码" id="phone_num" v-model="username">
		  			</div>
		  			<div class="error">
		  				<img src="../assets/images/gwc_guanbi.png">
		  			</div>
				</li>
				<li class="clear pwd">
  				<div class="log_pwd">
		  			<i class="iconfont icon-wode"></i>
		  			<input type="password" placeholder="请输入密码" id="log_pwd" v-model="pwd">
	  			</div>
	  			<div class="pwd_pics">
	  				<img src="../assets/images/dl_mima_off@2x.png" class="off">
	  				<img src="../assets/images/dl_mima_on@2x.png" class="on">
	  			</div>
  			</li>
			</ul>
		</div>
		<div class="forget">
			<a href="#">忘记密码?</a>
		</div>
		<div class="log_btn">
			<button class="login_btn" id="login_btn">登录</button>
		</div>
		<div class="log_quick">
			<a href="#">手机号快捷登录</a>
		</div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from 'axios';
import qs from "qs";
export default {
  name: 'Login',
  data () {
    return {
      username:"",
      pwd:""
    }
  },
  mounted(){
  	var that = this;
  	$("#login_btn").click(function(){
  		axios.post("/api/login_ajax",qs.stringify({
  			username: that.username,
  			pwd:that.pwd
  		}))
  		.then(function(res){
  			console.log(res);
  			if(that.username != "" && res.data.codeStaus == 1 ){
  				alert(res.data.message)
  				location.href = "/#/self";
  			}else{
  				alert(res.data.message)
  			}
  		})
  	})
  }
}
</script>

<style scoped lang="scss" src="../assets/scss/Login.scss">

</style>
