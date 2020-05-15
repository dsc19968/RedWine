<template>
  <div class="register">
  	<!--head区-->
  	<header>
  		<div class="head">
  			<router-link to="/login" class="icon l">
  				<i>></i>
  			</router-link>
  			<h3 class="l">注册</h3>
  		</div>
  	</header>
  	<!--banner区-->
  	<div class="banner">
  		<img src="../assets/images/jiu3.jpg">
  	</div>
  	<!--register_info-->
  	<div class="register_info">
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
  			<li class="clear code">
  				<div class="reg_code">
		  			<i class="iconfont icon-wode"></i>
		  			<input type="text" placeholder="请输入验证码" disabled="disabled">
	  			</div>
	  			<div class="get_code">
	  				<p>获取验证码</p>
	  			</div>
  			</li>
  			<li class="clear pwd">
  				<div class="reg_pwd">
		  			<i class="iconfont icon-wode"></i>
		  			<input type="password" placeholder="请输入密码" id="reg_pwd" v-model="pwd">
	  			</div>
	  			<div class="pwd_pic">
	  				<img src="../assets/images/dl_mima_off@2x.png" class="off">
	  				<img src="../assets/images/dl_mima_on@2x.png" class="on">
	  			</div>
  			</li>
  			<li class="clear pwd">
  				<div class="con_pwd">
		  			<i class="iconfont icon-wode"></i>
		  			<input type="password" placeholder="请输入确认密码" id="reg_conpwd">
	  			</div>
	  			<div class="con_pic">
	  				<img src="../assets/images/dl_mima_off@2x.png" class="off">
	  				<img src="../assets/images/dl_mima_on@2x.png" class="on">
	  			</div>
  			</li>
  		</ul>
  	</div>
  	<!--注册按钮-->
  	<div class="reg_bottom">
  		<div class="reg_agree">
  			<input type="radio" checked="checked">
  			<label>同意</label>
  			<a href="#">《购酒网用户协议及服务条款》</a>
  		</div>
  		<div class="regbtn">
  			<button class="reg_btn" id="reg_btn">注册</button>
  		</div>
  	</div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from 'axios';
import qs from "qs";
export default {
  name: 'Register',
  data () {
    return {
      username:"",
      pwd:""
    }
  },
  mounted(){
  	var that = this;
  	$("#reg_btn").click(function(){
  		axios.post("/api/register_ajax",qs.stringify({
  			username:that.username,
  			pwd:that.pwd
  		}))
  		.then(function(res){
  			if(res.data.code == 1){
  				alert(res.data.message);
  				location.href = "/#/login";
  			}else{
  				alert(res.data.message);
  			}
	  	})
  	})
  }
}
</script>

<style scoped lang="scss" src="../assets/scss/Register.scss">

</style>
