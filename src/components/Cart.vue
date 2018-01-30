<template>
  <div class="cart">
  	<!-- 头部 -->
  	<div class="head">
  		<h3>购物车</h3>
  		<div class="edit">编辑</div>
  	</div>
  	<div class="cartEmpty">
  		<div class="goShoping">
  			<div><img src="../assets/images/wdsc_gwc.png"/></div>
  		</div>
  	</div>
    <common_footer></common_footer>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart{
	width: 100%;
	height: 100%;
}
.head{
	width: 100%;
	height:42px;
	border-bottom: 1px solid #ddd;
	background: #FFFFFF;
}
h3{
	width: 2.04rem;
	height: 42px;
	text-align: center;
	font-size: 16px;
	line-height: 42px;
	float: left;
}
.edit{
	width: 0.48rem;
	height: 42px;
	float: right;
	text-align: center;
	line-height: 42px;
	font-size: 14px;
	color: #9F9F9F;
	margin-right: 15px;
}
/*没有商品时*/
.cartEmpty{
	width: 100%;
	height: 100%;
}
.goShoping{
	width: 100%;
	height: 2.4rem;
	background: red;
}
.goShoping div:nth-child(1){
	width: 100%;
	height: 54px;
}
.goShoping div:nth-child(1) img{
	width: 50px;
	height: 50px;
}
</style>
