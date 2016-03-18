/*
 *mixApp.app.js
 *app模块
 *子应用模型
 *负责提供子应用功能
 */
mixApp.app = (function (){
  //======模块作用域变量配置=========
  var 
    appMap = {},

    //方法
    //=================
    registApp,deleteApp;
  //===模块作用域变量配置区域结束====

  //=========子应用管理方法==========
    
  //=====子应用管理方法区域结束======

  //=========事件处理方法============
  //=====事件处理方法区域结束========

  //===========公共方法==============
  
  //注册子应用
  //==========
  registApp = function (app){
    if(appMap[app.name]){
      console.info('该应用名已存在，请改名。');
    }else{
      appMap[app.name] = app;
    }   
  };

  deleteApp = function(appName){
    if(appMap[appName]){
      delete appMap[appName] 
    }else{
      console.error('此应用不存在！');
    }
  }

  return {registApp: registApp, deleteApp, appMap:appMap};
  //=======公共方法区域结束==========
})();
