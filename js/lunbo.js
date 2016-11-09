
$(function(){
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
     var t=setInterval(yid,2000);
    win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		t=setInterval(yid,2000);
	} 

	jtr.onclick=function(){
			yid();
		}
	// jtl.onclick=function(){		
	// 		yidL();			
	// 	} 	

     function yid(){
     	animate(img,{left:-aw},function(){
     		var first=firstChild(img);
     	img.appendChild(first);
     	img.style.left=0;
     	})
     	
     }
     // function yidl(){
     //     var first=firstChild(img);
     // 	var last=lastChild(img);
     // 	animate(img,{left:aw},function(){
     // 		
     // 	img.insertBefore(last,first);
     // 	img.style.left=-aw+"px";

     // 	})
     	
     // }


    
})