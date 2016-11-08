$(function(){
    //透明度变化
    //$(".lunbo>a").hide().eq(0).show();
    //var num=0;
    //function move(){
    //    num++;
    //   if(num>=$(".lunbo>a").length){
    //        num=0;
    //    }
    //    $(".lunbo>a").fadeOut(100).eq(num).fadeIn(300);
    //}
    //var t=setInterval(move,2000);

    var banner=$(".banner>a");
    var w=document.documentElement.clientWidth;
    for(i=1;i<banner.length;i++){
        //alert(1);
        banner.eq(i).css("left",w+"px")
    }
    var num=0;
    var next=0;
    function move(){
        next++;
        if(next>=banner.length){
            next=0;
        }
        $(".banner>a").eq(num).css("left",0);
        $(".banner>a").eq(next).css("left",w);
        $(".banner>a").eq(num).animate({left:"-"+w});
        $(".banner>a").eq(next).animate({left:0});
        num=next;
    }
    var t=setInterval(move,2000);

})