import axios from 'axios';
import Swiper from 'swiper';
import $ from 'jquery';
export default {
  name: 'Detail',
  data () {
    return {
      showFlag:false,
      detail:{},
      imgs:[],
      list:[],
      list1:[],
      list2:[],
      time:[],
      page:0  
    }
  },
  mounted(){
    //选项卡
    $("#detail .daohang li").click(function(){
        $(this).addClass("hover").siblings().removeClass('hover');
        $("#detail .main .chance").eq($(this).index()).show().addClass("show").siblings().removeClass("show").hide();
    });

    //评论选项卡
    $(".comview .comhead dl dd").click(function(){
      $(this).addClass("hover2").siblings().removeClass('hover2');
      $(".comview .combody .active").eq($(this).index()).show().addClass("show2").siblings().removeClass("show2").hide();
    })
   

  	//console.log(this.$route.params.fid)
  	var id = this.$route.params.fid;
  	axios.get(`/SER/GetkillGoods?user_id=290591&bh=${id}`)
  	.then((res)=>{
    //console.log(res);
    //console.log(res.data.info);
		var str = res.data.info;
    var str2 = res.data.imgs;
    this.imgs = JSON.parse(str2);
    //console.log(typeof(str));//string
		//console.log(JSON.parse(string)[0])
  		this.detail = JSON.parse(str)[0];
  	});
    //评论详情
    axios.get(`/SeR/GetGoodsCommentByorder?spid=${id}&current_page=${this.page + 1}&page_size=10&type=-1`)
    .then((res2)=>{
        //console.log(typeof(res2.data.data));//object
        //console.log(res2);
        console.log(res2.data.data);
        this.page ++;
        this.list1 = res2.data;
        this.list = this.list.concat(res2.data.data);

        var len = this.list.length;
        var arr = [];
        for(var i = 0;i < len;i++){
          if(this.list[i].pro_productuserCommentpic.length > 0){
            for(var j = 0;j<this.list[i].pro_productuserCommentpic.length;j++){
              this.list[i].img_path = this.list[i].pro_productuserCommentpic[j].Pic;
            }
          }
        }
        //console.log(arr);
        console.log(this.list);
    });
    //评论数量
    axios.get(`/h_user/good_comment_num?spid=${id}`)
    .then((res3)=>{
        //console.log(res3);
        //console.log(typeof(res3.data.data));
        this.list2 = res3.data.data;
    })
  },
  methods:{
    showNav:function(){
      this.showFlag = !this.showFlag;
    },
    goback:function(){
      window.history.go(-1);
    }
  }
}


