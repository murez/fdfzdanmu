// 全局量
var socket = io();// socket.io obj
var canfocus = true;// auto focus on slide ifream when not focus on danmu config
var winWidth,winHeight;

function initElementSize () {
      if (window.innerWidth)
            winWidth = window.innerWidth;
      else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
      // 获取窗口高度
      if (window.innerHeight)
            winHeight = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
      $("#fream").css("height",winHeight);
      $("#danmuconfig").css("width",winWidth);
}
function focusOnSlide() {
      if (canfocus)$("#fream").focus();
      setTimeout(focusOnSlide,1500);
};
$(function () {
      initElementSize();
      focusOnSlide();
      // banding danmu functions
      // change alpha
      $("#alphabar").change(function () {
            $("#alphatext").html($(this).val()+"%");
            $("#danmu").data("opacity",($(this).val())/100.0);
      })
      // danmu show config bar
      $(document).mousemove(function (e) {
            if(e.pageY>40){
                  $("#fream").focus();
                  $("#danmuconfig").fadeOut();
                  canfocus = true;
            }else{
                  $("#danmuconfig").fadeIn();
                  canfocus = false;
            }
      });


    var p1={ "text":"这个弹幕逼格好高啊" , "color":"green" ,"size":"2","position":"0","time":80};
    var p1____={ "text":"这个弹幕逼格好高啊" , "color":"green" ,"size":"2","position":"0","time":95};
    var a_danmu={ "text":"欢迎来到复旦附中青浦分校2017年第二届青春节 ~~~~开启弹幕系统~~~~ ~~开启完成~~ (゜-゜)つロ~  " , "color":"green" ,"size":"2","position":"0","time":90};
    var b_danmu={"text":"██████████████████████████████████████████████████████████","color":"black","size":"1","position":"1","time":20};
    var c_danmu={"text":"█████████ _____________████ _____________████ _____________████████████████████","color":"black","size":"1","position":"1","time":20};
    var d_danmu={"text":"█████████ _██████████ _██████████ _██████████████████████████","color":"black","size":"1","position":"1","time":20};
      $("#danmu").danmu({
            left: 0,    //区域的起始位置x坐标
            top: 20 ,  //区域的起始位置y坐标
            height: winHeight-20, //区域的高度
            width: winWidth, //区域的宽度
            zindex :100, //div的css样式zindex
            speed:30000, //弹幕速度，飞过区域的毫秒数
            sumtime:60*60*10 , //弹幕运行总时间
            default_font_color:"#000000", //弹幕默认字体颜色
            font_size_small:24, //小号弹幕的字体大小,注意此属性值只能是整数
            font_size_big:32, //大号弹幕的字体大小
            opacity:"0.9", //弹幕默认透明度
            top_botton_danmu_time:6000 //顶端底端弹幕持续时间
      });
    function FFF() {

        $('#danmu').danmu("add_danmu", a_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", c_danmu);
        $('#danmu').danmu("add_danmu", c_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", c_danmu);
        $('#danmu').danmu("add_danmu", c_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", d_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
        $('#danmu').danmu("add_danmu", b_danmu);
    }

    $('#danmu').danmu('danmu_start');

    FFF;
    $('#danmu').danmu("add_danmu", p1____);
    function warm_up()
    {

    }

      // socket io

      socket.on('broadcastdanmu', function(msg){
            console.log('get danmu'+msg);
            msg['time'] = $('#danmu').data("nowtime");
            $('#danmu').danmu("add_danmu",msg);
      });
    for (var i=0;i<cars.length;i++)
    {
        $('#danmu').danmu("add_danmu", p1);
    }
})