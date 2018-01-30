<template>
  <div class="hello" style="padding-bottom: 60px;">
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
  				<div><img src="http://img0.gjw.com/appImage/201612/02/20161221622270_all.jpg"/></div>
  				<p>西班牙 法比纳 马标一号 干红葡萄酒 750ml</p>
  				<strong>￥35.5</strong>
  				<del>￥58.00</del>
  			</li>
  			<li>
  				<div><img src="http://img0.gjw.com/appcomimage/201701/03/201701031333292758_mid.jpg"/></div>
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
	<!--floor-->
	<div class="floor">
		<div class="floor-top">
			<h3>
				<img src="http://img0.gjw.com/appcomimage/201612/19/201612191547333154.jpg"/>
			</h3>
		</div>
		<div class="floor_1">
			<div><img src="http://img0.gjw.com/appimage/201801/29/201801291044252236.jpg"/></div>
			<div><img src="http://img0.gjw.com/appimage/201801/29/201801290959378242.jpg"/></div>
			<div><img src="http://img0.gjw.com/appimage/201801/29/201801291044566738.jpg"/></div>
			<div><img src="http://img0.gjw.com/appimage/201801/29/201801291045190615.jpg"/></div>
			<div><img src="http://img0.gjw.com/appimage/201801/29/201801290959552841.jpg"/></div>
		</div>
	</div>
	<!--floor_2-->
	<div class="floor">
		<div class="floor-top">
			<h3>
				<img src="http://img0.gjw.com/appcomimage/201612/19/201612191547559065.jpg"/>
			</h3>
		</div>
		<div class="floor_2-footer">
			<div>
				<img src="http://img0.gjw.com/appimage/201801/29/201801291045447539.jpg"/>
			</div>
			<div>
				<div>
					<img src="http://img0.gjw.com/appimage/201801/29/201801291045569404.jpg"/>
				</div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291046099199.jpg"/></div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291046225361.jpg"/></div>
			</div>
		</div>
	</div>

    <!--adv-->
		<div class="adv"><img src="http://img0.gjw.com/appimage/201801/29/201801291013434599.jpg"/>
		</div>
	<!--floor_2-->
	<div class="floor">
		<div class="floor-top">
			<h3>
				<img src="http://img0.gjw.com/appcomimage/201612/19/201612191638519607.jpg"/>
			</h3>
		</div>
		<div class="floor_2-footer">
			<div>
				<img src="http://img0.gjw.com/appimage/201801/29/201801291000219443.jpg"/>
			</div>
			<div>
				<div>
					<img src="http://img0.gjw.com/appimage/201801/29/201801291003477207.jpg"/>
				</div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291005544013.jpg"/></div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291007576904.jpg"/></div>
			</div>
		</div>
	</div>
	<!--floor_2-->
	<div class="floor">
		<div class="floor-top">
			<h3>
				<img src="http://img0.gjw.com/appcomimage/201612/19/201612191702066438.jpg"/>
			</h3>
		</div>
		<div class="floor_2-footer">
			<div>
				<img src="http://img0.gjw.com/appimage/201801/29/201801291008337421.jpg"/>
			</div>
			<div>
				<div>
					<img src="http://img0.gjw.com/appimage/201801/29/201801291010324336.jpg"/>
				</div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291012012695.jpg"/></div>
				<div><img src="http://img0.gjw.com/appimage/201801/29/201801291013074628.jpg"/></div>
			</div>
		</div>
	</div>
	<!--floor-5-->
	<div class="floor-5">
		<div>
			<h3><img src="http://img0.gjw.com/appcomimage/201612/19/201612191705164500.jpg"/></h3>
		</div>
		<!--5lou-->
		<ul class="twoColumn">
			<li v-for="item in info">
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
      fastKill:[],
      info:[],
      page:0
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
//获取5楼数据
//		axios.get('SER/GetHot?_index=1')
//				.then((res)=>{
//					console.log(res.data.info)
//					this.info = JSON.parse(res.data.info);
//		
//				})
		this.getData();
		this.loadMore();
	},
	methods:{
		getData(){
			axios.get(`SER/GetHot?_index=${this.page + 1}`)
			.then((res)=>{
				if(res.data.state == 0){
					return;
				}
//				console.log(res.data.info)
				var string = res.data.info;
				this.page++;
				var oData = JSON.parse(string);
				// console.log(oData)
				this.info = this.info.concat(oData);
			})
		},
		loadMore(){
			var that = this;
			let clientHeight = document.documentElement.clientHeight;
			document.onscroll = function(){
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//				document.title = document.body.scrollHeight + ":" + (scrollTop + clientHeight);
				if((scrollTop + clientHeight) >= document.body.scrollHeight * 0.8){
					that.getData();
//					console.log(that);
				}
			}
		}
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
/*---------floor-------------*/
.floor{
	width: 100%;
	height: 2.17rem;
}
.floor-top{
	width: 100%;
	height: 0.57rem;
	padding: 1px;
}
.floor div:nth-child(2){
	width: 100%;
	height: 1.6rem;
	display: flex;
	flex-wrap: wrap;
}
.floor_1 div:nth-child(1), .floor_1 div:nth-child(2){
	width: 1.6rem;
	height: 0.8rem;
	padding: 1px;
}
.floor_1 div:nth-child(3),.floor_1 div:nth-child(4),.floor_1 div:nth-child(5){
	width: 1.06rem;
	height: 0.79rem;
	padding: 1px;
}
/*----floor_2----------*/
.floor_2-footer{

}
.floor_2-footer>div:nth-child(1){
	width: 1.28rem;
	height: 1.6rem;
	padding: 1px;
	
}
.floor_2-footer>div:nth-child(2){
	width: 1.92rem;
	height: 1.6rem;
}
.floor_2-footer>div:nth-child(2) div:nth-of-type(1){
	width: 1.92rem;
	height: 0.8rem;
	padding: 1px;
}
.floor_2-footer>div:nth-child(2) div:nth-of-type(2){
	width: 0.96rem;
	height: 0.8rem;
	padding: 1px;
}
.floor_2-footer>div:nth-child(2) div:nth-of-type(3){
	width: 0.96rem;
	height: 0.8rem;
	padding: 1px;
}
.adv{
	width: 100%;
	height: 0.64rem;
	padding: 1px;
}
.twoColumn{
	width: 100%;
	background:#E9E9E9;
	padding-left: 2%;
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
</style>
