import axios from 'axios';
import Swiper from 'swiper';
import $ from 'jquery';
export default {
  name: 'Detail',
  data () {
    return {
      showFlag:false,
      detail:{},
      imgs:[]
    }
  },
  mounted(){
    //选项卡
    $("#detail .daohang li").click(function(){
        $(this).addClass("hover").siblings().removeClass('hover');
        $("#detail .main .chance").eq($(this).index()).show().siblings().hide();
    });
   

  	//console.log(this.$route.params.fid)
  	var id = this.$route.params.fid;
  	axios.get(`/SER/GetkillGoods?user_id=290591&bh=${id}`)
  	.then((res)=>{
//  console.log(res);
//  console.log(res.data.info);
		var str = res.data.info;
    var str2 = res.data.imgs;
    this.imgs = JSON.parse(str2);
    //console.log(str2);
		//console.log(JSON.parse(string)[0])
  		this.detail = JSON.parse(str)[0];
  	})
  },
  methods:{
    showNav:function(){
      this.showFlag = !this.showFlag;
    },
    goback:function(){
      window.history.go(-1)
    },
	  addToCart:function(){
		//启动action
		//dispatch("action的名字")
		this.$store.dispatch("addToCart",this.detail);
		alert("添加成功");
		console.log(this.detail)
		}
  }
}


