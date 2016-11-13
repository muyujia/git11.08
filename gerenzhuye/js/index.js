
//$(function(){
//    var banbox=$(".banbox")[0];
//    var inner=$(".inner");
//    var cw=document.documentElement.clientWidth;
//    var ch=document.documentElement.clientHeight;
//    banbox.style.width=cw+"px";
//    banbox.style.height=ch+"px";
//    for(var i=1;i<inner.length;i++){
//        inner[i].style.top=ch+"px";
//    }
//    var now=0;
//    var next=0;
//    var flag=true;
//    mouseWheel(banbox,function(){
//        if(!flag){return;}
//        flag=false;
//        next--;
//        if(next<=-1){
//            next=inner.length-1;
//        }
//        inner[next].style.top=-ch+"px";
//        animate(inner[now],{top:ch});
//        animate(inner[next],{top:0},function(){
//            flag=true;
//        });
//        now=next;
//    },function(){
//        if(!flag){return;}
//        flag=false;
//        next++;
//        if(next>=inner.length){
//            next=0;
//        }
//        inner[next].style.top=ch+"px";
//        animate(inner[now],{top:-ch});
//        animate(inner[next],{top:0},function(){
//            flag=true;
//        });
//        now=next;
//    })
//
//})