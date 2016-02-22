/*
 *mixApp.shell.js
 *shell模块
 *应用控制器
 *负责数据绑定及管理应用
 */
mixApp.shell = (function (){
  //======模块作用域变量配置=========
  var
    stateMap  ={
      $container: null,
      app:null,
      module:null
    },
    configMap = {},
    moduleDomMap = {},
    appMap = {},

    //方法
    //=================
    initModule, setMap;
  //===模块作用域变量配置区域结束====

  //=========应用管理方法============
  setMap = function (){
    var $container = stateMap.$container,
        apps = stateMap.apps;
    moduleDomMap = {
      $tools: $container.find('.left-tools'),
      $main:  $container.find('.left-main-module'),
      $list:  $container.find('.left-list'),
      $func:  $container.find('.right-func'),
      $appList: $container.find('.right-app-list')
    };
    appMap = stateMap.app.appMap;
  }
  //=====应用管理方法区域结束========

  //=========事件处理方法============

  //=====事件处理方法区域结束========

  //===========公共方法==============

  //接收应用容器，子应用模块，面板模块三个参数
  //==============================================
  initModule = function ($container,app,module){
    stateMap.$container = $container;
    stateMap.app = app;
    stateMap.module = module; 
    setMap();
    stateMap.module.init(appMap,moduleDomMap);
  }

  return {initModule: initModule};
  //=======公共方法区域结束==========
})();
