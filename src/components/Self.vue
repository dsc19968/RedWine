<template>
  <div class="self">
  	<!--head区-->
  	<header>
  		<div class="head">
  			<router-link to="/" class="icon l">
  				<i class="iconfont icon-wode"></i>
  			</router-link>
  			<h3 class="l">我的信息</h3>
  			<router-link to="/login" class="icon l message" >
  				<i class="iconfont icon-xiaoxi"></i>
  			</router-link>
  		</div>
  	</header>
  	<!--登录注册-->
  	<div class="lr_area" v-if="flag">
  		<router-link to="/login">
	  		<span class="circle">
	  			<i class="iconfont icon-wode"></i>
	  			<b>登录/注册</b>
	  		</span>
  		</router-link>
  	</div>
  	<div class="lr_area2" v-if="flag2">
	  		<span class="circle2"></span>
	  		<div class="userinfo">
	  			<i>用户名：{{$store.state.username}}</i>
	  			<b>会员称号：普通会员</b>
	  		</div>
  	</div>
  	<!--收藏累计区-->
  	<div class="count_area">
  		<div class="collect">
  			<span>0</span>
  			<p>商品收藏</p>
  		</div>
  		<div class="footprint">
  			<span>0</span>
  			<p>浏览足迹</p>
  		</div>
  	</div>
  	<!--section-->
  	<section>
  		<!--订单区-->
  		<div class="order">
  			<div class="my-order">
  				<h3>我的订单</h3>
  				<span>查看全部订单&nbsp;&nbsp;&nbsp;></span>
  			</div>
  			<div class="ready_area">
  				<div class="payment">
  					<i class="iconfont icon-fenlei"></i>
  					<span>待付款</span>
  				</div>
  				<div class="delivery">
  					<i class="iconfont icon-fenlei"></i>
  					<span>待发货</span>
  				</div>
  				<div class="received">
  					<i class="iconfont icon-fenlei"></i>
  					<span>待收货</span>
  				</div>
  				<div class="evaluated">
  					<i class="iconfont icon-fenlei"></i>
  					<span>待评价</span>
  				</div>
  			</div>
  		</div>
  		<!--资产区-->
  		<div class="assets">
  			<div class="my-assets">
  				<h3>我的资产</h3>
  				<span>查看明细&nbsp;&nbsp;&nbsp;></span>
  			</div>
  			<div class="assets_area">
  				<div class="balance">
  					<i>0.00</i>
  					<span>账户余额</span>
  				</div>
  				<div class="coupon">
  					<i>0</i>
  					<span>优惠券</span>
  				</div>
  				<div class="integral">
  					<i>0</i>
  					<span>积分</span>
  				</div>
  			</div>
  		</div>
  		<!--售后-->
  		<div class="service">
  			<div class="my_service">
  				<h3>我的售后</h3>
  				<span>></span>
  			</div>
  			<div class="advice">
  				<h3>意见反馈</h3>
  				<span>></span>
  			</div>
  			<div class="tel">
  				<h3>客服热线</h3>
  				<i>400-722-1919</i>
  				<span>></span>
  			</div>
  		</div>
  		<div class="blank">
  			<button class="exit" id="exit">退出</button>
  		</div>
  	</section>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'Self',
  data () {
    return {
      flag: true,
      flag2: false
    }
  },
  mounted(){
  	console.log(this.$store.state);
  	if(this.username != ""){
  		this.flag = false;
  		this.flag2 = true;
  	}
    $("#exit").click(function(){
      location.href = "/#/login";
    })
  }
}
</script>

<style scoped lang="scss" src="../assets/scss/Self.scss">

</style>
