$(function(){
    $("img.lazy").lazyload({
    effect : "fadeIn"
});
	// 导航选项卡
// 	var mst;
//           jQuery(".nav .item").hover(function () {
//               var curItem = jQuery(this);
//               mst = setTimeout(function () {//延时触发
//                   curItem.find(".pro").addClass('proc');
//                   curItem.find(".block").fadeIn();
//                   mst = null;
//               }, 20);
//           }, function () {
//               if (mst != null) clearTimeout(mst);
//               jQuery(this).find(".pro").removeClass('proc');
//               jQuery(this).find(".block").fadeOut();
//           });
// }
	// 搜索框
	var searcht=getChilds($(".search")[0])[0];
    searcht.onclick=function(){
        this.value="";
    }
    searcht.onblur=function(){
        this.value="包月流量包";
    }

    var haoma=getChilds($(".haoma")[0])[0];
    haoma.onclick=function(){
        this.value="";
    }
    haoma.onblur=function(){
        this.value="请输入手机号码";
    }
    //head 
    var log=$(".login");
	 var lk=$(".lk");
	 for(i=0;i<lk.length;i++){
	 	log[i].index=i;
	 	log[i].onmouseover=function(){
	 		lk[this.index].style.display="block";
	 	}
	 	log[i].onmouseout=function(){
	 		lk[this.index].style.display="none";
	 	}
	 }

     var phone=$(".phone");
	 var ma=$(".ma");
	 for(i=0;i<ma.length;i++){
	 	phone[i].index=i;
	 	phone[i].onmouseover=function(){
	 		ma[this.index].style.display="block";
	 	}
	 	phone[i].onmouseout=function(){
	 		ma[this.index].style.display="none";
	 	}
	 }

	 var city=$(".city")[0];
    var dropdown=$(".dropdown-menu")[0]
    var body=$("body")[0];
    city.onclick=function(){
    	dropdown.style.display="block";
    }
    body.onclick=function(e){
       var e=e||window.event;
       var obj=e.target||e.srcElement;
       if(obj.className!="city"){
          $(".dropdown-menu")[0].style.display="none"
       }
    } 

    // 导航
	 var item=$(".item");
	 var list=$(".list");
	 for(var i=0;i<item.length;i++){
	 	item[i].index=i;
	 	item[i].onmouseover=function(){
	 		list[this.index].style.display="block";
	 	}
	 	item[i].onmouseout=function(){
	 		list[this.index].style.display="none";
	 	}
	 }
    //轮播图
	//  var middle=$(".middle")[0];
	// var imgs=$("a",$(".imgbox")[0]);
	// var lis=$("li",$(".imglist")[0]);
	// var btnL=$(".btnL")[0];
	// var btnR=$(".btnR")[0];
	// imgs[0].style.zIndex=10;
	// // lis[0].ClassName="hot";
	// lis[0].style.background="#0085d0";
	// var now=0;
	// var t=setInterval(move,2000);
	// middle.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// middle.onmouseout=function(){
	// 	t=setInterval(move,2000);
	// }
	// for(var i=0;i<lis.length;i++){
	// 	lis[i].index=i;
	// 	lis[i].onclick=function(){
	// 	for(var i=0;i<imgs.length;i++){
	// 		// imgs[i].style.zIndex=5;
	// 		animate(imgs[i],{opacity:0});
	// 	    lis[i].style.background="";
	// 	}

	// 	// lis[this.index].ClassName="hot";
	// 	lis[this.index].style.background="#0085d0";
	// 	// imgs[this.index].style.zIndex=10;
	// 	animate(imgs[this.index],{opacity:1});
	// 	now=this.index;	
	// 	}
	// }
	// // move 函数
	// function move(){
	// 	now++;
	// 	if(now==imgs.length){
	// 		now=0;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		// imgs[i].style.zIndex=5;
	// 		animate(imgs[i],{opacity:0});
	// 		// lis[i].ClassName="";
	// 		lis[i].style.background="";
	// 	}
	// 	lis[now].style.background="#0085d0";
	// 	// imgs[now].style.zIndex=10;
	// 	animate(imgs[now],{opacity:1});
		
	// }	

	// function moveL(){
	// 	now--;
	// 	if(now<0){
	// 		now=imgs.length-1;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		// imgs[i].style.zIndex=5;
	// 		animate(imgs[i],{opacity:0});
	// 		lis[i].style.background="";
	// 	}
	// 	lis[now].style.background="#0085d0";
	// 	// imgs[now].style.zIndex=10;
	// 	animate(imgs[now],{opacity:1});
	// }
	// // btnL btnR
	// btnR.onclick=function(){
	// 	move();
	// }
	// btnL.onclick=function(){
	// 	moveL()
	// }
	
	
	// function moveL(){
	// 	now--;
	// 	if(now<0){
	// 		now==imgs.length-1;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		imgs[i].style.zIndex=5;
	// 		lis[i].className.remove("hot");
	// 	}
	// 	imgs[now].style.zIndex=10;
	// 	lis[now].className.add("hot");
	// }
    


// 无缝轮播
    var middle=$(".middle")[0];
	var imgs=$("a",$(".imgbox")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnL=$(".btnL")[0];
	var btnR=$(".btnR")[0];
	var mw=parseInt(getStyle(middle,"width"));
	for(var i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.left=mw+"px";
	}
	 lis[0].classList.add("hot");
	// now  记录当前窗口图片
	// next 记录下一张

	// 1.下一张就位 2.动画 imgs[now] left----mw,imgs[next]
    var now=0;
    var next=0
    var t=setInterval(move,2000);
    middle.onmouseover=function(){
		clearInterval(t);
	}
	middle.onmouseout=function(){
		t=setInterval(move,2000);
	}
	// 选项卡

	// for(var i=0;i<lis.length;i++){
	// 	lis[i].index=i;
	// 	lis[i].onclick=function(){
	// 		// next----this.index
	// 	   imgs[this.index].style.left=mw+"px";
	// 	   lis[now].classList.remove("hot");
	// 	   lis[this.index].classList.add("hot");
	// 	   animate(imgs[now],{left:-mw});
	// 	   animate(imgs[this.index],{left:0});
	// 	   next=this.index;
	// 	   now=this.index;
	//   }
	// }


	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			// next----this.index
			if(now>this.index){
			  imgs[this.index].style.left=-mw+"px";
			  animate(imgs[now],{left:mw});
		      animate(imgs[this.index],{left:0});	
			}else if(now<this.index){
              imgs[this.index].style.left=mw+"px";
              animate(imgs[now],{left:-mw});
		      animate(imgs[this.index],{left:0});
			}else{
				return;
			}
		   
		   lis[now].classList.remove("hot");
		   lis[this.index].classList.add("hot");
		  
		   next=this.index;
		   now=this.index;
	  }
	}
    
    // btnL btnR
    var flag=true;
	btnR.onclick=function(){
		if (flag){
			move();
			flag=false;
		}
	}
	btnL.onclick=function(){
		if (flag){
			moveL();
			flag=false;
		} 
		
	}	
    

    function move(){
		next++;
		if(next==imgs.length){
			next=0
		}
		imgs[next].style.left=mw+"px";
		lis[now].classList.remove("hot");
		lis[next].classList.add("hot");
		animate(imgs[now],{left:-mw});
		animate(imgs[next],{left:0},function(){flag=true});
		now=next;
	}	
	 function moveL(){
		next--;
		if(next<0){
			next=imgs.length-1
		}
		imgs[next].style.left=-mw+"px";
		lis[now].classList.remove("hot");
		lis[next].classList.add("hot");
		animate(imgs[now],{left:mw});
		animate(imgs[next],{left:0},function(){flag=true});
		now=next;
	}

	// 中 节点轮播
   var img=$(".imgB")[0];
   var as=$("a",img);
   var aw=parseInt(getStyle(as[0],"width"))+parseInt(getStyle(as[0],"margin-right"));
   var jtl=$(".jtl")[0];
   var jtr=$(".jtr")[0];
   // 动态设置imgBox宽度
   img.style.width=aw*as.length+"px";
   /*右--左，先动画后扒图
     1.img  left:-aw
     2.img.appendChild(firstChild)
     3.img.style.left=0;*/
     var m=setInterval(yid,2000);
    img.onmouseover=function(){
		clearInterval(m);
	}
	img.onmouseout=function(){
		m=setInterval(yid,2000);
	} 

	jtr.onclick=function(){
			yid();
		}
	jtl.onclick=function(){		
			yidL();			
		} 	

     function yid(){
     	animate(img,{left:-aw},function(){
     	var first=firstChild(img);
     	img.appendChild(first);
     	img.style.left=0;
     	})
     	
     }
     function yidL(){
        var first=firstChild(img);
     	var last=lastChild(img);
     	img.insertBefore(last,first);
     	img.style.left=-aw+"px";
      	animate(img,{left:0});
     }
     // 公告
  var lb=$(".notice")[0];
  var lt=$(".right")[0];
  var rt=$(".left")[0];
  var imgeBox=$(".nonei")[0];
  var imgeone=$("div",imgeBox);
   
   nodeLunbo(imgeBox,lt,rt);
    
    function nodeLunbo(imgBox,left,right){
    var lunbo=imgBox.parentNode;
    var imgone=getChilds(imgBox)[0];

    var lunbo=obj;
    var left=left;
    var right=right;
    var imgBox=imgBox;
    var width=parseInt(getStyle(imgone,"width"));
    var t=setInterval(move,2000);
    var n=2;
    function move(){
      animate(imgBox,{left:-width*n},600,function(){
        for(var i=1;i<n;i++){
          var imgFirst=getFirst(imgBox);
          imgBox.appendChild(imgFirst);
        }
        imgBox.style.left="0px";
      });
    }
    left.onclick=function(){
      for(var i=1;i<=n;i++){
        var last=getLast(imgBox);
        var First=getFirst(imgBox);
        insertBefore(last,First);
      }
      imgBox.style.left=-width*n+"px";
      animate(imgBox,{left:0},600)
    }
    right.onclick=function(){
      move();
    }
  }
  var obj=$(".lunbo");
  for(var i=0;i<obj.length;i++){
    nodeLunbo(obj[i]);
  }
 })





