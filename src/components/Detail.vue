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

<<<<<<< HEAD
    <!-- ******body****** -->
=======
    <!-- ************ -->
>>>>>>> 5e6c79b51c1aaf3015f27083c58e1b56d78e225a
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
<<<<<<< HEAD
      <!-- *******详情******* -->
      <li class="careful chance">
        <p class="careful_pic" v-for="item in imgs">
            <img :src="'http://img0.gjw.com' + item.图片路径"/>
        </p>   
      </li>

      <!-- *******评价******* -->
      <li class="commond chance">
        <ul class="comview">
          <li class="comhead">
            <dl v-for="item2 in list2">
              <dd class="comall hover2"><h4>全部</h4><p>{{list1.total_num}}</p></dd>
              <dd class="comgood"><h4>好评</h4><p>{{item2.satisfied_num}}</p></dd>
              <dd class="commedium"><h4>中评</h4><p>{{item2.general_num}}</p></dd>
              <dd class="comsmall"><h4>差评</h4><p>{{item2.unsatisfied_num}}</p></dd>
              <dd class="comall"><h4>晒图</h4><p>{{item2.sunnum}}</p></dd>
            </dl>
          </li>
          <li class="combody">
            <ol>
              <!-- 全部评价 -->
              <li class="allcontent show2 active">
                <ul>
                  <li v-for="item in list">
                    <p class="commessage"><span>{{item.UserName}}</span><i>{{item.LevelName}}</i><b>{{item.CreateTime}}</b></p>
                    <ul class="star">
                      <li>
                        <img src="../assets/images/star.png" height="16" width="16"/>
                        <img src="../assets/images/star.png" height="16" width="16"/>
                        <img src="../assets/images/star.png" height="16" width="16"/>
                        <img src="../assets/images/star.png" height="16" width="16"/>
                        <img src="../assets/images/star.png" height="16" width="16"/>
                      </li> 
                    </ul>
                    <h5>{{item.Content}}</h5>
                    <div class="compic" v-if="item.img_path"><img width="80" height="80" :src="'http://img0.gjw.com/Show/' + item.img_path"/></div>
                  </li>
                </ul>
              </li>
              <!-- 好评 -->
              <!-- <li class="goodcontent active">good</li>
              <li class="medcontent active">medium</li>
              <li class="smallcontent active">small</li>
              <li class="piccontent active">picture</li> -->
            </ol>
          </li>
        </ul>
      </li>
=======
      <li class="careful chance">2</li>
      <li class="commond chance">3</li>
>>>>>>> 5e6c79b51c1aaf3015f27083c58e1b56d78e225a
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
<<<<<<< HEAD
       <li class="addcart">加入购物车</li>
=======
       <li class="addcart" @click="addToCart(detail)">加入购物车</li>
>>>>>>> 5e6c79b51c1aaf3015f27083c58e1b56d78e225a
       <li class="buynow">立即购买</li>
     </ul>
	</div>
</template>

<script src="../assets/js/Detail.js">

</script>

<style scoped lang="scss" src="../assets/scss/Detail.scss">
</style>