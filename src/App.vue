<template>
  <div id="app">
    <router-view />
  </div>  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	@import 'assets/font/iconfont.css';
	@import 'assets/css/reset.css';
	html,body{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	html{
		font-size:31.25vw;
	}
#app {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
/*.content{
	flex: 1;
}*/


</style>
