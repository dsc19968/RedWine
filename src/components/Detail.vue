<template>
	<div class="detail">
		<h1>{{detail.id}}</h1>
		
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Detail',
  data () {
    return {
      detail:{}
    }
  },
  mounted(){
  	console.log(this.$route.params.fid)
  	var id = this.$route.params.fid;
  	axios.get(`/SER/GetkillGoods?user_id=290591&bh=${id}`)
  	.then((res)=>{
//		console.log(res.data.info);
		var string = res.data.info
		console.log(JSON.parse(string)[0])
  		this.detail = JSON.parse(string)[0];
  	})
  }
}
</script>

<style>
</style>