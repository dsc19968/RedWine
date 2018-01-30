import Swiper from 'swiper';
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'Variety',
  data () {
    return {
      	list:[],
        list2:[],
        list3:[],
        list4:[],
        list5:[],
        list6:[],
        list7:[],
        list8:[],
        list9:[],
        list10:[],
        list11:[],
        list12:[],
        list13:[],
        list14:[],
        list15:[],
        list16:[],
        list17:[]
    }
  },
  mounted(){
      //选项卡切换
      $("section ul li").click(function(){
          $(this).addClass("hover").siblings().removeClass('hover');
          $("section .content dl").eq($(this).index()).show().siblings().hide();
      });

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
        //console.log(JSON.parse(res2.data.info));
        this.list3 = JSON.parse(res2.data.info).香型_2;
        this.list4 = JSON.parse(res2.data.info).商品产地_3;
        this.list5 = JSON.parse(res2.data.info).价格_4;
    });
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=葡萄酒")
    .then((res3)=>{
        //console.log(JSON.parse(res3.data.info));
        this.list6 = (JSON.parse(res3.data.info).品牌_1).splice(0,9);
        this.list7 = JSON.parse(res3.data.info).产国_2;
        this.list8 = JSON.parse(res3.data.info).品种_3;
        this.list9 = JSON.parse(res3.data.info).价格_5;
    });
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=洋酒")
    .then((res4)=>{
        //console.log(JSON.parse(res4.data.info));
        this.list10 = (JSON.parse(res4.data.info).品牌_1).splice(0,9);
        this.list11 = JSON.parse(res4.data.info).商品类型_2;
        this.list12 = JSON.parse(res4.data.info).价格区间_3;
    });
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=黄%2F养%2F啤")
    .then((res5)=>{
        //console.log(JSON.parse(res5.data.info));
        this.list13 = (JSON.parse(res5.data.info).黄酒品牌).splice(0,9);
        this.list14 = JSON.parse(res5.data.info).啤酒品牌;
    });
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=清酒")
    .then((res6)=>{
        //console.log(JSON.parse(res6.data.info));
        this.list15 = (JSON.parse(res6.data.info).品牌_1).splice(0,9);
        this.list16 = JSON.parse(res6.data.info).价格区间_2;
    });
    axios.get("/SER/GetAllTypeBandAndAttr?c_no=酒具周边")
    .then((res7)=>{
        //console.log(JSON.parse(res7.data.info));
        this.list17 = JSON.parse(res7.data.info).品牌_1;
    })
  },
  methods:{
    show:function(){
      this.Flag = !this.Flag;
    }
  }
}

//广告轮播图
setTimeout(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,//可选选项，自动滑动
		loop:true
	});
},1000)




