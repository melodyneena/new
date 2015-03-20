$(function(){
	var num=0;
	var btn=$('.img-btn a');
	var len=btn.length; //长度
	var autoTime;  //自动播放变量
	var space={}; //命名空间
	$('.img-btn a').hover(function(){
		clearInterval(autoTime);
		num=btn.index(this);  //获取当前索引
		space.showimg(num);
		},function(){
			space.time(num);
			});
	$('.pre,.next').hover(function(){
		clearInterval(autoTime);
		},function(){
			num=space.getNum();
			space.time(num);
		});
	$('.pre').click(function(){
		num=space.getNum();
		num===0?space.showimg(len-1):space.showimg(num-1); //超过长度返回最后一张图
		});
	$('.next').click(function(){
		num=space.getNum();
		num===len-1?space.showimg(0):space.showimg(num+1); //超过长度返回第一张图
		});
	space.time=function(num){            //自动播放
		autoTime=setInterval(function(){
			space.showimg(num);
			num++;
			if(num>=len){     //超过长度返回第一张图
				num=0;
				}
			},3000);
		};
	space.showimg=function(i){         //显示焦点图
		var img_con=$('.img-con a');
		var img_btn=$('.img-btn a');
		img_btn.eq(i).addClass('img-btn-checked').siblings('a').removeClass('img-btn-checked');
		img_con.css('display', 'block').eq(i).stop(true,false).fadeIn(400).siblings('a').hide();
		}
	space.getNum=function(){      //获取当前索引
		for(var i=0; i<len; i++){
			if(btn.eq(i).hasClass('img-btn-checked')){
				return i;
				}
			}
		};	
	space.time(num);

	});

//qiehuan
function __show(val1){
	$("#_show1").hide();
	$("#_show2").hide();
	$("#_show3").hide();
	$("#_show4").hide();
	$("#_show" + val1).show();
}
function __showa(val1){
	$("#_showa1").hide();
	$("#_showa2").hide();
	$("#_showa3").hide();
	$("#_showa4").hide();
	$("#_showa5").hide();
	$("#_showa" + val1).show();
}

//视频
// $('body').on('click','a[rel^=video]',function(){
// 	var $img = $(this).find('img');
// 	var src = $img.attr('video'),
// 	vw = $img.attr('vw'),
// 	vh = $img.attr('vh'),
// 	ww = document.documentElement.clientWidth,
// 	wh = document.documentElement.clientHeight,
// 	width,height;
// 	console.log(src);
// 	if (src) {
// 		if (vw/wh >= ww/wh) {
// 			width = ww*0.6;
// 			height = width*vh/vw;
// 		}
// 		else{
// 			height = wh*0.8;
// 			width = height*vw/vh;
// 		}
// 		$("<div id='videoboxOverlay' class='videoboxOverlay' style='display: block;top:0;position:fixed; left:0;width:100%;height:100%;z-index:10000;'></div><div id='videobox' class='videobox' style='display: block; width:"+ww+"px;height:"+wh+"px;position:fixed;top:"+(wh-height)/2+"px;left:0;z-index:100000'><div class='lb-outerContainer' style='position:relative;width:"+(width+8)+"px;height:"+(height+8)+"px;margin:0 auto;'><a class='lb-close' style='position:absolute;top:-30px;right:0;'></a><div class='lb-container' style='width:"+width+"px;height:"+height+"px;margin:0 auto;'><iframe class='lb-image' src='"+src+"' width="+width+" height="+height+" frameborder=0 allowfullscreen></iframe><div class='lb-loader'></div></div></div></div>").appendTo('body');
// 		//$('#lb-outerContainer').animate({width:width,height:height});
// 	}
// })
// $('body').on("click","a.lb-close",function(){
// 	$('#videoboxOverlay,#videobox').hide();
// });
// vedio show and hide
    function vedioFun(a){
        $(a).click(function() {     
            $('.video-sourse').removeClass('disN');
            $('.video-sourse-wrap').html("<iframe id='myvideo' frameborder='0' allowfullscreen='' src='http://v.qq.com/iframe/player.html?vid=o0142c77i70&tiny=0'></iframe><div class='videoback'>X</div>");
            $('.videoback').click(function() {
                // $('.video-sourse').addClass('disN').attr('src','');      
                $('.video-sourse-wrap').html('').parent('.video-sourse').addClass('disN');      
            });
        });
    }
    
    vedioFun('.video');
    vedioFun('.cover-right');  
//媒体
 $(function () {
	gundong();
    function gundong() {
        var box = $("#hz_list");
        var owidth = box.children("li").eq(0).outerWidth();
        var num = box.children("li").length;
        var i = 0;
        var timer = null;
        var time = 20;

        if (num > 7) {
            box.append(box.html());
            box.css("width", 2 * owidth * num + "px");
            timer = setInterval(gdAnimate, time);
            box.hover(function () {
                clearInterval(timer);
                timer = null;
            }, function () {
                timer = setInterval(gdAnimate, time);
            });
        }
        function gdAnimate() {
            i = i > owidth * num ? 0 : i + 1;
            box.css("left", -i + "px");
        }
    }




})
  