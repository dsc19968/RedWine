<template>
  <div class="hello">
  	<div class="top">
			<mt-search
			  v-model="value"
			  cancel-text="取消"
			  placeholder="搜索">
			</mt-search>
  	</div>
  	<div class="slide">
	  	<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="item in list">
	        <img :src="item" />
	      </mt-swipe-item>
			</mt-swipe>
  	</div>
  	<!--导航-->
  	<div class="nav">
  	<ul>
  		<li>
  			<em>白</em>
  			<i>白酒</i>
  		</li>
  		<li>
  			<em>特</em>
  			<i>特卖会</i>
  		</li>
  		<li>
  			<em>红</em>
  			<i>葡萄酒</i>
  		</li>
  		<li>
  			<em>洋</em>
  			<i>洋酒</i>
  		</li>
  		<li>
  			<em>黄</em>
  			<i>黄酒</i>
  		</li>
  		<li>
  			<em>清</em>
  			<i>清酒</i>
  		</li>
  		<li>
  			<em>老酒</em>
  			<i>年份酒</i>
  		</li>
  		<li>
  			<em>高端</em>
  			<i>高端收藏</i>
  		</li>
  	</ul>
  	</div>
  	<!--倒计时-->
  	<div class="time">
  		<div>手机秒杀</div>
  		<div>距结束</div>
  		<div>00:00:00</div>
  		<div>
  			<router-link to="/">更多&gt;</router-link>
  		</div>
  	</div>
  	<!--slideArea-->
  	<div class="slideArea">
  		<ul class="slide_nav">
  			<li>
  				<div><img src="http://img0.gjw.com/appimage/201706/23/201706230951251318_mid.jpg"/></div>
  				<p>西班牙 法比纳 马标一号 干红葡萄酒 750ml</p>
  				<strong>￥35.5</strong>
  				<del>￥58.00</del>
  			</li>
  			<li>
  				<div><img src="http://img0.gjw.com/appimage/201706/23/201706230951251318_mid.jpg"/></div>
  				<p>西班牙 法比纳 马标一号 干红葡萄酒 750ml</p>
  				<strong>￥35.5</strong>
  				<del>￥58.00</del>
  			</li>
  			<li>
  				<div><img src="http://img0.gjw.com/appimage/201706/23/201706230951251318_mid.jpg"/></div>
  				<p>西班牙 法比纳 马标一号 干红葡萄酒 750ml</p>
  				<strong>￥35.5</strong>
  				<del>￥58.00</del>
  			</li>
  		</ul>
  	</div>
  	<!--banner-->
  	<div class="banner">
  	<img src="http://img0.gjw.com/appimage/201801/19/201801191617510412.jpg"/>
  	</div>

    <!-- footer -->
    <common_footer></common_footer>
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[
      	"http://img0.gjw.com/appimage/201801/03/201801031109433746.jpg",
      	"http://img0.gjw.com/appimage/201801/02/201801021627093872.jpg",
      	"http://img0.gjw.com/appimage/201801/19/201801190955471701.jpg",
      ],
      value:"茅台",
      fastKill:[]
    }
  },
  mounted(){
//		axios.get('SER/GetHot?_index=1')
//		.then((res)=>{
//			console.log(res.data.banner);
//			this.list = res.data;
//		})
			//获取滑动轮播数据
//			axios.get('SER/GetSeckill?type=0&index=1')
//			.then((res)=>{
//				console.log(res.data.info);
//				this.fastKill = res.data;
//			})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
	position: fixed;
	z-index: 9;
	width: 100%;
	height: 0.3rem;
	opacity: 0.5;
	top: 0.3rem;
}
.slide{
	width: 100%;
	height: 1.65rem;
	border-bottom: 1px solid #000;
}
.nav{
	width: 100%;
	height: 1.7rem;
	position: relative;
}
.nav:after{
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background: #000;
	transform: scaleY(0.5);
}
.nav ul{
	display: flex;
	flex-wrap: wrap;
}
.nav ul li{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	margin-top: 0.25rem;
}
.nav ul li em{
	display: block;
	width: 36px;
	height: 36px;
	background: #BD2C00;
	text-align: center;
	line-height: 36px;
	color: #FFFFFF;
}
.time{
	width: 100%;
	height: 0.48rem;
}
.time>div{
	float: left;
	margin: 0.15rem 0;
}
.time div:nth-of-type(1){
	padding: 0 6px;
	border-left: 2px solid #BD2C00;
	margin-left: 0.16rem;
}
.time div:nth-last-of-type(1){
	float: right;
}
.slideArea{
	width: 100%;
	height: 1.58rem;
}
.slide_nav{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
}
.slide_nav li{
	width: 20%;
	text-align: center;
}
.slide_nav li p{
	text-align: center;
	font-size: 10px;
	color: #999;
	width: 80%;
	height: 0.32rem;
	text-overflow: ellipsis;
	overflow: hidden;
	/*white-space: nowrap;*/
}
.slide_nav li strong{
	color: red;
}
.slide_nav li del{
	color: #999;;
}
.slide_nav li div{
	width: 80px;
	height: 80px;
}
img{
	width: 100%;
	height: 100%;
}
.banner{
	width: 100%;
	height: 0.7rem;
}
.mint-search{
  height:0.44rem;
}
</style>
