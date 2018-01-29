import Swiper from 'swiper';
import axios from 'axios';
export default {
  name: 'Variety',
  data () {
    return {
      	list:[],
        list2:[],
        list3:[]
    }
  },
  mounted(){
  	axios.get("/SER/GetFenleiAdvert")
  	.then((res)=>{
  		//console.log(res);
  		this.list = JSON.parse(res.data.advert);
  		//console.log(this.list);
  	});
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=白酒")
    .then((res2)=>{
        //console.log(res2);
        //console.log(res2.data.info);
       //console.log((JSON.parse(res2.data.info).品牌_1).splice(0,9));
        this.list2 = (JSON.parse(res2.data.info).品牌_1).splice(0,9);
        console.log(JSON.parse(res2.data.info).香型_2);
        this.list3 = JSON.parse(res2.data.info).香型_2;
    });
  }
}

//广告轮播图
setTimeout(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,//可选选项，自动滑动
		loop:true
	});
},1000)