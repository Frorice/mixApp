var paint = (function (){
    //====变量区====
    //4对象对应4个面板模块，其中main对象包含该应用的<style>节点对象。
    var 
      name = 'paint',
      params={
        main : {
          styleSheet:null,
          panel:null
        },
        list : {},
        func : {},
        tools : {}
    };

    //私有变量
    //================
    var bgColor = 
    ["#000000","#999999","#cc66ff","#ff0000","#ff9900","#ffff00","#008000","#00ccff","#ffffff"],
    col = "#000000";
    //==变量区结束==========

    //====初始化变量====
    params.main.styleSheet = (function(){
      var styleSheet = document.createElement('link');
      styleSheet.rel = 'styleSheet';
      styleSheet.href = './app/paint.css';

      return styleSheet;
    })();

    params.main.panel = (function (){
      var can = document.createElement('canvas');
      can.id = 'cav';
      can.width = '555';
      can.height = '321';
      var x = 0;
      var y = 0;
    
      var ctx = can.getContext("2d");

      can.onmousedown = function (e){
        e.preventDefault();
        
        //白色橡皮擦
        if(col == "rgb(255, 255, 255)")
          ctx.lineWidth = 100;
        else
          ctx.lineWidth = 2;

        ctx.strokeStyle = col;

        x = e.offsetX || e.layerX;;
        y = e.offsetY || e.layerY;
      
        ctx.beginPath();
        ctx.moveTo(x,y);

        can.onmousemove = function(e){
          
          var nx = e.offsetX || e.layerX;//ff为事件绑定元素最近的设置了position除static外的父节点（包括自身）的layerX，layerY
          var ny = e.offsetY || e.layerY;

          ctx.lineTo(nx,ny);
          ctx.stroke();
        }
      }

      can.onmouseup = function (){

        can.onmousemove = "";

      }


      return can;
    })();

    params.tools = (function (){
      var tools = document.createElement('div');
      tools.id = 'bk'
      var bk;
      for(var i=1;i<bgColor.length;i++){

        bk = document.createElement("span");
        bk.setAttribute("class","bk");
        bk.style.backgroundColor = bgColor[i];
        bk.onclick = function(){
          col = this.style.backgroundColor;
        }
        tools.appendChild(bk);
      }

      return tools;
    })();
    //==初始化变量结束==

    //===========公共方法==============
    init = function (){
      this.params = params;
    };
    //=======公共方法区域结束==========

    return {name:name,params:null,init:init}
})();

mixApp.app.registApp(paint);
