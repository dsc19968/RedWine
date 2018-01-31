<template>
  <div class="cart">
  	<!-- 头部 -->
  	<div class="head">
  		<h3>购物车</h3>
  		<div class="edit">编辑</div>
  	</div>
  	<div class="cartEmpty" v-if="flag">
  		<div class="goShoping">
  			<div><img src="../assets/images/wdsc_gwc.png"/></div>
  			<p>购物车空空如也</p>
  			<div>
  				<router-link to="/">去逛逛</router-link>
  			</div>
  		</div>
  		<div class="like">
  			你可能喜欢
  		</div>
  		<!--可能喜欢-->
	  	<ul class="twoColumn">
				<li v-for="item in like">
					<router-link :to="{name:'Detail',params:{fid:item.id}}">
						<div class="picWrapper">
							<img :src="'http://img0.gjw.com' + item.图片路径"/>
						</div>
						<p class="twoColumn_txt">{{item.品名}}</p>
						<div class="discount">
							<i>{{item.优惠条件}}</i>
						</div>
						<div class="price">
							<strong>￥<i>{{item.本站价}}</i></strong>
							<del>￥<i>{{item.市场价}}</i></del>
						</div>
					</router-link>
				</li>
			</ul>
  	</div>
  	<!--购物车功能-->
  	<div class="cartList">
			<ul>
				<li class="list" v-for="item in $store.state.cart" >
					<div class="list-left"><input type="checkbox"/></div>
					<div class="list-right">
						<div class="list-img">
							<img :src="'http://img0.gjw.com' + item.图片路径"/>
						</div>
						<div class="list-info">
							<p>{{item.品名}}</p>
							<div>
								<i class="price">￥{{item.市场价}}</i>
								<div class="numController">
									<span class="minus">-</span><input class="num" type="text" value="1" /><span class="add">+</span>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
  	</div>
    <common_footer></common_footer>
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
  name: 'Cart',
  data () {
    return {
      like:[],
      flag:false
    }
  },
  mounted(){
  	console.log(this.$store.state.cart)
		axios.get('SER/GetHot?_index=1')
				.then((res)=>{
//					console.log(res.data.info)
					this.like = JSON.parse(res.data.info);	
				});
		if(this.$store.state.cart.length == 0){
			this.flag = true;
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
	background: #e9e9e9;
	padding-top: 70px;
}
.goShoping div:nth-child(1){
	width: 100%;
	height: 54px;
	text-align: center;
}
.goShoping div:nth-child(1) img{
	width: 50px;
	height: 50px;
}
.goShoping>p{
	width: 100%;
	text-align: center;
	font-size: 14px;
	padding: 10px 0;
}
.goShoping div:nth-child(3){
	width: 100%;
	text-align: center;
}
.goShoping div:nth-child(3) a{
	background: #cd0011;
	padding: 8px;
	border-radius: 5px;
	font-size: 14px;
	color: #FFFFFF;
}
.like{
	width: 100%;
	height: 34px;
	border-top:1px solid #ddd;
	border-bottom: 1px solid #ddd;
	text-align: center;
	font-size: 14px;
	line-height: 34px;
}
/*可能喜欢*/
.twoColumn{
	width: 100%;
	background:#E9E9E9;
	padding-left: 2%;
}
.twoColumn img{
	width: 100%;
	height: 100%;
}
.twoColumn li{
	float: left;
    background: #FFFFFF;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 48%;
    height: 1.9rem;
}
.picWrapper{
	width: 1.2rem;
	height: 1.2rem;
	margin-left: 15px;
}
.twoColumn_txt{
	width: 100%;
    color: #999;
    height: 32px;
}
.discount{
	width: 1.25rem;
	height: 0.2rem;
}
.discount i{
	color: #fff;
	background: rgb(250, 131, 34);
	border-radius: 2px;
	padding: 2;
}
.price strong {
	color: #ac2023;
	margin-right: 8px;
	font-weight: 600;
}
.price del{
	color: #999;
	font-size: 12px;
}
/*购物车列表*/
.cartList{
	width: 100%;
	height: 100%;
	padding-bottom: 92px;
}
.list{
	width: 100%;
	height: 1.01rem;
	padding: 10px;
	background: #fff;
}
.list-left{
	width: 30px;
	height: 0.8rem;
	text-align: center;
	float: left;
}
.list-left input{
	width: 16px;
	height: 16px;
	border-radius: 16px;
	border-radius: 50%;
	margin-top: 32px;
}
.list-right{
	width: 2.7rem;
	height: 0.8rem;
	float: left;
}
.list-img{
	width: 0.8rem;
	height: 0.8rem;
	float: left;
}
.list-img img{
	width: 100%;
	height: 100%;
}
.list-info{
	width: 1.9rem;
	height: 0.8rem;
	float: left;
}
.list-info>p{
	width: 1.9rem;
	height: 0.28rem;
	overflow: hidden;
	text-overflow: ellipsis;
}
.list-info>div{
	width: 1.9rem;
	height: 0.52rem;
}
.price{
	color: red;
}
.numController{
	width: 0.9rem;
	height: 0.48rem;
	float: right;
	padding-top: 15px;
}
.num{
	width: 38px;
	height: 18px;
	text-align: center;
}
.minus,.add{
	display: inline-block;
	width: 25px;
	height: 18px;
	background: #eee;
	text-align: center;
}
</style>
