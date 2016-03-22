var bezier = (function(){

  //====变量区====
  //4对象对应4个面板模块，其中main对象包含该应用的<style>节点对象。
  var 
    name = 'bezier',
    params={
      main : {
        styleSheet:null,
        panel:null
      },
      list : {},
      func : {},
      tools : {}
  };

  params.main.panel = (function(){
    var can = document.createElement("canvas");
    var ctx = can.getContext("2d");
    var Point = function (x,y){
      this.x = x;
      this.y = y;
    }

    var cPt = [];

    can.id = 'can';
    can.width = '555';
    can.height = '321'; 
    can.style.border = '1px solid black';

    function createControlPt(x,y){
      if(cPt.length < 4){
        cPt.push(new Point(x,y));
      }
    }

    function drawPt(){

      for(var i = 0;i<cPt.length;i++){
        var c = "red";
        if(i<2){
          c = "green";
        }
        ctx.strokeStyle = c;
        ctx.lineWidth = 2;
        ctx.strokeRect(cPt[i].x-5,cPt[i].y-5,10,10);
      }
    }

    function isInRect(p1,p2,w,h){
      return p1.x>=p2.x-w&&p1.x<=p2.x+w&&p1.y>=p2.y-h&&p1.y<=p2.y+h;
    }

    function getIdxCpt(p){
      var idx = -1;
      for(var i = 0;i<cPt.length;i++){
        if(isInRect(p,cPt[i],5,5)){
          return i;
        }
      }
      return idx;
    }

    function drawBline(){
      ctx.strokeStyle = "gray";
      ctx.beginPath();
      ctx.moveTo(cPt[0].x,cPt[0].y);
      ctx.lineTo(cPt[2].x,cPt[2].y);
      ctx.stroke();
      ctx.moveTo(cPt[1].x,cPt[1].y);
      ctx.lineTo(cPt[3].x,cPt[3].y);
      ctx.stroke();
      
    }

    function drawBei(){
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(cPt[0].x,cPt[0].y);
      ctx.bezierCurveTo(cPt[2].x,cPt[2].y,cPt[3].x,cPt[3].y,cPt[1].x,cPt[1].y);
      ctx.stroke();
    }

    function draw(){
      drawPt();
      if(cPt.length>3){
        drawBline();
        drawBei();
      }
    }

    var selPt = new Point(-1,-1),sIdx;
    can.onmousedown = function (e){

      var x = e.offsetX,y = e.offsetY;
      selPt.x = x;
      selPt.y = y;
      createControlPt(x,y);
      draw();
      if(cPt.length>3){
        sIdx = getIdxCpt(selPt);
        if(sIdx>=0){
          can.onmousemove = function(e){
            cPt[sIdx].x = e.offsetX;
            cPt[sIdx].y = e.offsetY;
            ctx.clearRect(0,0,555,321);
            draw();
          }
        }
      } 
    }

    can.onmouseup = function (){
      this.onmousemove = null;
    }  

    return can;
  })();

  params.tools = (function(){
    var title = document.createElement("h2");
    title.innerHTML = "贝塞尔曲线";
    return title;
  })();
  init = function (){
    this.params = params;
  };

  return {name:name,params:null,init:init};
})();
  
mixApp.app.registApp(bezier);