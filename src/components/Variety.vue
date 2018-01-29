<template>
  <div class="variety">
  	<!-- *******header******* -->
	<header>
		<div class="search">
			<span><img src="../assets/images/fangdajing.png"/></span>
			<input type="text" value="茅台"/>
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

		<dl class="c_content">	
			<dt class="ad">
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in list">
				    	<img :src="'http://img0.gjw.com' + item.pic" >
				    </div>
				  </div>
				</div>
			</dt>
			<dd class="spirit">
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
			<dd class="grape">
				<div class="gr_tit">
					<div class="gr_des"></div>
					<div class="gr_name">香型</div>
				</div>
				<ol>
					<li v-for="item3 in list3">
						{{item3.name}}
					</li>
				</ol>
			</dd>
		</dl>	
	

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
