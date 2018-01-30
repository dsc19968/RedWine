<template>
  <div class="variety">
  	<!-- *******header******* -->
	<header>
		<div class="search">
			<span><img src="../assets/images/fangdajing.png"/></span>
			<input class="txt" type="text" value="茅台"/>
		</div>
	</header>
	
	<!-- *******section******* -->
	<section>
		<!-- *******白酒******* -->
			<ul>
				<li>白酒</li>
				<li>葡萄酒</li>
				<li>洋酒</li>
				<li>黄/啤</li>
				<li>清酒</li>
				<li>酒具周边</li>
			</ul>

			<div class="content">
				<!-- <dl class="c_content_01">	
					<dt class="ad">
						<div class="swiper-container">
						  <div class="swiper-wrapper">
						    <div class="swiper-slide" v-for="item in list">
						    	<img :src="'http://img0.gjw.com' + item.pic" >
						    </div>
						  </div>
						</div>
					</dt>
					<dd class="spirit_brand">
						<div class="sp_tit">
							<div class="sp_des"></div>
							<div class="sp_name">品牌<span>查看更多<b>▼</b></span></div>
						</div>
						<ol>
							<li v-for="item2 in list2">
								<img :src="'http://img0.gjw.com' + item2.info" alt="">
								<p>{{item2.name}}</p>
							</li>
						</ol>	
					</dd>
					<dd class="spirit_smell">
						<div class="sm_tit">
							<div class="sm_des"></div>
							<div class="sm_name">香型</div>
						</div>
						<ol>
							<li v-for="item3 in list3">
								{{item3.name}}
							</li>
						</ol>
					</dd>
					<dd class="spirit_add">
						<div class="ad_tit">
							<div class="ad_des"></div>
							<div class="ad_name">商品产地</div>
						</div>
						<ol>
							<li v-for="item4 in list4">
								{{item4.name}}
							</li>
						</ol>
					</dd>
					<dd class="spirit_price">
						<div class="pr_tit">
							<div class="pr_des"></div>
							<div class="pr_name">价格</div>
						</div>
						<ol>
							<li v-for="item5 in list5">
								{{item5.name}}
							</li>
						</ol>
					</dd>
				</dl> -->


				<!-- *******葡萄酒******* -->
				<!-- <dl class="c_content_02">	
					<dt class="ad">
						<div class="swiper-container">
						  <div class="swiper-wrapper">
						    <div class="swiper-slide" v-for="item in list">
						    	<img :src="'http://img0.gjw.com' + item.pic" >
						    </div>
						  </div>
						</div>
					</dt>
					<dd class="spirit_brand">
						<div class="sp_tit">
							<div class="sp_des"></div>
							<div class="sp_name">品牌<span>查看更多<b>▼</b></span></div>
						</div>
						<ol>
							<li v-for="item6 in list6">
								<img :src="'http://img0.gjw.com' + item6.info" alt="">
								<p>{{item6.name}}</p>
							</li>
						</ol>	
					</dd>
					<dd class="spirit_smell">
						<div class="sm_tit">
							<div class="sm_des"></div>
							<div class="sm_name">产国</div>
						</div>
						<ol>
							<li v-for="item7 in list7">
								{{item7.name}}
							</li>
						</ol>
					</dd>
					<dd class="spirit_add">
						<div class="ad_tit">
							<div class="ad_des"></div>
							<div class="ad_name">品种</div>
						</div>
						<ol>
							<li v-for="item8 in list8">
								{{item8.name}}
							</li>
						</ol>
					</dd>
					<dd class="spirit_price">
						<div class="pr_tit">
							<div class="pr_des"></div>
							<div class="pr_name">价格</div>
						</div>
						<ol>
							<li v-for="item9 in list9">
								{{item9.name}}
							</li>
						</ol>
					</dd>
				</dl> -->

				<!-- *******洋酒******* -->
				<!-- <dl class="c_content_03">	
					<dt class="ad">
						<div class="swiper-container">
						  <div class="swiper-wrapper">
						    <div class="swiper-slide" v-for="item in list">
						    	<img :src="'http://img0.gjw.com' + item.pic" >
						    </div>
						  </div>
						</div>
					</dt>
					<dd class="spirit_brand">
						<div class="sp_tit">
							<div class="sp_des"></div>
							<div class="sp_name">品牌<span>查看更多<b>▼</b></span></div>
						</div>
						<ol>
							<li v-for="item10 in list10">
								<img :src="'http://img0.gjw.com' + item10.info" alt="">
								<p>{{item10.name}}</p>
							</li>
						</ol>	
					</dd>
					<dd class="spirit_smell">
						<div class="sm_tit">
							<div class="sm_des"></div>
							<div class="sm_name">商品类型</div>
						</div>
						<ol>
							<li v-for="item11 in list11">
								{{item11.name}}
							</li>
						</ol>
					</dd>
					<dd class="spirit_price">
						<div class="pr_tit">
							<div class="pr_des"></div>
							<div class="pr_name">价格区间</div>
						</div>
						<ol>
							<li v-for="item12 in list12">
								{{item12.name}}
							</li>
						</ol>
					</dd>
				</dl> -->

				<!-- *******黄/啤******* -->
				<!-- <dl class="c_content_04">	
					<dt class="ad">
						<div class="swiper-container">
						  <div class="swiper-wrapper">
						    <div class="swiper-slide" v-for="item in list">
						    	<img :src="'http://img0.gjw.com' + item.pic" >
						    </div>
						  </div>
						</div>
					</dt>
					<dd class="spirit_brand">
						<div class="sp_tit">
							<div class="sp_des"></div>
							<div class="sp_name">黄酒品牌</div>
						</div>
						<ol>
							<li v-for="item13 in list13">
								<img :src="'http://img0.gjw.com' + item13.info" alt="">
								<p>{{item13.name}}</p>
							</li>
						</ol>	
					</dd>
					<dd class="spirit_smell">
						<div class="sm_tit">
							<div class="sm_des"></div>
							<div class="sm_name">啤酒品牌</div>
						</div>
						<ol>
							<li v-for="item14 in list14">
								<span>{{item14.name}}</span><br/>
								{{item14.name}}
							</li>
						</ol>
					</dd>
				</dl> -->

				<!-- *******清酒******* -->
				<!-- <dl class="c_content_05">	
					<dt class="ad">
						<div class="swiper-container">
						  <div class="swiper-wrapper">
						    <div class="swiper-slide" v-for="item in list">
						    	<img :src="'http://img0.gjw.com' + item.pic" >
						    </div>
						  </div>
						</div>
					</dt>
					<dd class="spirit_brand">
						<div class="sp_tit">
							<div class="sp_des"></div>
							<div class="sp_name">黄酒品牌</div>
						</div>
						<ol>
							<li v-for="item15 in list15">
								<img :src="'http://img0.gjw.com' + item15.info" alt="">
								<p>{{item15.name}}</p>
							</li>
						</ol>	
					</dd>
					<dd class="spirit_price">
						<div class="pr_tit">
							<div class="pr_des"></div>
							<div class="pr_name">价格区间</div>
						</div>
						<ol>
							<li v-for="item16 in list16">
								{{item16.name}}
							</li>
						</ol>
					</dd>
				</dl> -->

				<!-- *******酒具周边******* -->
				<dl class="c_content_05">	
					<dd class="spirit_brand">
						<ol>
							<li v-for="item17 in list17">
								<img :src="'http://img0.gjw.com' + item17.info" alt="">
								<p>{{item17.name}}</p>
							</li>
						</ol>	
					</dd>
				</dl>
			</div>


	<!-- *******footer******* -->	
	<common_footer></common_footer>
	</section>
  </div>
</template>

<script src="../assets/js/Variety.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/Variety.scss">

</style>
