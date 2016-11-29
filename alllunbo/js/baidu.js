$(function(){
    var clientH=$(window).height();
    var flag=true;
    var num=0;
    $(".content").mousedown(function(e){
        e.preventDefault();
    })
    $(".content").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup","#fullpages",function(){

        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;

        }
        flag=false;
        $("#fullpages").css("marginTop",-num*clientH);
    })




    touch.on("body","swipedown","#fullpages",function(){

        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        flag=false;
        $("#fullpages").css("marginTop",-num*clientH);
    })

    $("#fullpages")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })



})