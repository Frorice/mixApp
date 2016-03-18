/*
 *mixApp.js
 *应用入口
 */
var mixApp = (function (){
  
  //传入应用容器
  //调用shell的模块初始化方法以加载应用模块
  //=======================================
  var initApp = function ($container){
   
    mixApp.shell.initModule($container,mixApp.app,mixApp.module);
  };

  //暴露应用初始化接口
  //==================
  return {initApp: initApp};
})();