<template>
  	
    <div class="bottom">
	    <div class="bottom_nav">
	    	<router-link to="/">
	    		<span class="iconfont icon-shouye"></span>
	    		<i>首页</i>
	    	</router-link>
	    	<router-link to="/variety">
	    		<span class="iconfont icon-fenlei"></span>
	    		<i>分类</i>
	    	</router-link>	
	    	<router-link to="/cart">
	    		<span class="iconfont icon-gouwuche"></span>
	    		<i>购物车</i>
	    	</router-link>	
	    	<router-link to="/self">
	    		<span class="iconfont icon-wode"></span>
	    		<i>我的</i>
	    	</router-link>	
	    </div>
	</div>    
  
</template>

<script>
	export default{
		name:"common_footer",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss" src="../assets/scss/common_Footer.scss">

</style>