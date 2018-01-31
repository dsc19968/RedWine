<template>
	<div id="detail">
		<!-- <h1>{{detail.id}}</h1> -->
    <!-- ******header****** -->
    <div class="header">
      <span class="direct" @click="goback()">&lt;</span>
      <ul class="daohang">
        <li class="hover">商品</li>
        <li>详情</li>
        <li>评价</li>
      </ul>
      <b><img src="../assets/images/foot.png"/></b>
      <i><img @click="showNav()" src="../assets/images/house.png"/></i>
    </div>
    <nav id="foot" v-if="showFlag">
        <common_footer></common_footer>
    </nav>

    <!-- ************ -->
    <ol class="main">
      <li class="good show chance">
        <div class="lunbo">
          <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in imgs">
                <img :src="'http://img0.gjw.com' + item.图片路径"/>
              </mt-swipe-item>
          </mt-swipe>
         </div> 
         <div class="detail_info">
            <p class="info_name">{{detail.品名}}</p>
            <h2 class="info_des">{{detail.描述}}</h2>
            <p class="info_price">{{"￥" + detail.本站价 + ".00"}}</p>
            <p class="info_promise">
              <span class="iconfont">&#xe631;</span><i>正品保障</i>
              <span class="iconfont">&#xf008a;</span><i>满百包邮</i>
              <span class="iconfont">&#xe65e;</span><i>破损就陪</i>
            </p>
         </div>
         <div class="interval"></div>
         <ul class="buySelect">
           <li class="amount">
             <div class="labelitem">数量</div>
             <div class="numcontrol">
               <div class="subtract">-</div>
               <input class="numshow" value="1"/>
               <div class="add">+</div>
             </div>
           </li>
           <li class="address">
             <div class="labelitem">送至</div>
             <div class="showcity">北京市 北京市 东城区</div>
             <div class="status">有货</div>
             <div class="more">&gt;</div>
           </li>
           <li class="warning">
             <div class="labelitem">提示</div>
             <div class="prompt">.</div>
           </li>
         </ul>
         <div class="interval"></div>
      </li>
      <li class="careful chance">2</li>
      <li class="commond chance">3</li>
    </ol>
		<ul class="detailbuy">
       <li class="gouwuche">
         <div class="iconfont">&#xe673;</div>
         <p>购物车</p>
       </li>
       <li class="shoucang">
         <div class="iconfont">&#xe602;</div>
         <p>收藏</p>
       </li>
       <li class="addcart" @click="addToCart(detail)">加入购物车</li>
       <li class="buynow">立即购买</li>
     </ul>
	</div>
</template>

<script src="../assets/js/Detail.js">

</script>

<style scoped lang="scss" src="../assets/scss/Detail.scss">
</style>