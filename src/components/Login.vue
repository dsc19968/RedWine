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
			  			<input type="text" placeholder="请输入手机号码">
		  			</div>
		  			<div class="error">
		  				<img src="../assets/images/gwc_guanbi.png">
		  			</div>
				</li>
				<li class="clear pwd">
  				<div class="log_pwd">
		  			<i class="iconfont icon-wode"></i>
		  			<input type="text" placeholder="请输入密码">
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
			<button class="login_btn">登录</button>
		</div>
		<div class="log_quick">
			<a href="#">手机号快捷登录</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss" src="../assets/scss/Login.scss">

</style>
