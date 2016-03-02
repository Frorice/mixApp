var snake = (function(){
  //====变量区====
  //4对象对应4个面板模块，其中main对象包含该应用的<style>节点对象。
  var 
    name = 'snake',
    params={
      main : {
        styleSheet:null,
        panel:null
      },
      list : {},
      func : {},
      tools : {}
  };
  



  params.main.panel = (function (){
     
    //游戏过程
      { var map = new Array(32);
        var speed = 100;
        var  map1;
        var Map = initMap();
        var food=[Math.round(Math.random() * 31), Math.round(Math.random() * 31)];
        map[food[0]][food[1]].style.backgroundColor = "green";
        Snake.prototype.move = move;
        var snake = new Snake();
        var start = document.createElement('button');
        start.innerHTML = "开始";
        start.className = "btn btn-primary";
        start.onclick = startmove;
        params.tools = start;
      }


      //创建地图
      function initMap(){ 
        var Map = document.createElement('div'); 
        for(var i=0;i<31;i++){
          map1 = new Array(58);
          for(var j=0;j<57;j++){
            var cell;
            cell=document.createElement("div");
            cell.style.backgroundColor = "black"; 
            cell.style.width = "10px"; 
            cell.style.height = "10px"; 
            cell.style.position = "absolute"; 
            cell.style.left = "" + (j * 10) + "px"; 
            cell.style.top = "" + (i * 10) + "px"; 
            cell.style.overflow = "hidden";
            Map.appendChild(cell);
            map1[j] = cell; 
          }       
          map[i] = map1;
          //用一个二维数组将基本元素储存
        }
        return Map;
      }
      //随机生成食物
      function createfood(){
        var tempfood; 
        var tempelement; 
        out : 
        while(true) 
        { 
          tempfood = [Math.round(Math.random() * 31), Math.round(Math.random() * 30)]; 
          tempelement = map[tempfood[0]][tempfood[1]]; 
          for(var i in snake.body) 
          { 
            if(snake.body[i] == tempelement) 
            { 

              continue out; //如果食物出现在蛇身上则继续生成新的
            } 

            break out; 
          } 
        } 
        food = tempfood; 
        map[food[0]][food[1]].style.backgroundColor = "green"; 
      }
      //移动
      function move() {
        switch(this.direction){
          case 0   : this.head[1]-=1;break;
          case 1   : this.head[0]+=1;break;
          case 2   : this.head[1]+=1;break;
          case 3   : this.head[0]-=1;break;
        }
        if(this.head[0] < 0 || this.head[0] > 49 || this.head[1] < 0 || this.head[1] > 99) {
          return false;
        }else if(map[this.head[0]][this.head[1]] == map[food[0]][food[1]]){
          map[food[0]][food[1]].style.backgroundColor = "white";
          this.body.unshift(map[food[0]][food[1]]);
          createfood();
          return true;
        }else if(map[this.head[0]][this.head[1]].style.backgroundColor == "white"){
          if(map[this.head[0]][this.head[1]] == this.body.pop()){//撞到尾巴没关系
            this.body.unshift(map[this.head[0]][this.head[1]]);
            return true;
          }
          return false;
        }
        map[this.head[0]][this.head[1]].style.backgroundColor = "white";
        this.body.pop().style.backgroundColor = "black";
        this.body.unshift(map[this.head[0]][this.head[1]]);
        return true;
      }




      function Snake () {

        this.body = new Array(); 
        this.head = [20, 20]; 
        map[20][20].style.backgroundColor = "white"; 

        this.body.push(map[20][20]); 

        this.direction = 0;
      }


      function startmove() 
      { 
        Map.focus();
        if(snake.move()) 
        { 
          setTimeout(startmove, speed); 
        } 

      } 
      
      Map.tabIndex = -1;
      Map.onkeydown = turnorstop; 
      //键盘控制
      function turnorstop(event) {

        if(window.event != undefined) { 

          switch(parseInt(window.event.keyCode)) { 
            case 37 : 
            if(snake.direction!="2") 
              snake.direction = 0; 
            break; 
            case 38 : 
            if(snake.direction!=1) 
              snake.direction = 3; 
            break; 
            case 39 : 
            if(snake.direction!=0) 
              snake.direction = 2; 
            break; 
            case 40 : 
            if(snake.direction!=3) 
              snake.direction = 1; 
            break; 
          } 

        } else { 

          switch(parseInt(event.which)) { 
            case 37 : 
            if(snake.direction!=2) 
              snake.direction = 0; 
            break; 
            case 38 : 
            if(snake.direction!=1) 
              snake.direction = 3; 
            break; 
            case 39 : 
            if(snake.direction!=0) 
              snake.direction = 2; 
            break; 
            case 40 : 
            if(snake.direction!=3) 
              snake.direction = 1; 
            break; 
          } 
        } 
      } 
      return Map;
  })();

  init = function (){
    this.params = params;
  };

  return {name:name,params:null,init:init};
})();

mixApp.app.registApp(snake);