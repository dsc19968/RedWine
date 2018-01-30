<template>
  <div class="cart">
  	<!-- 头部 -->
  	<div class="head">
  		<h3>购物车</h3>
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
}
</style>
