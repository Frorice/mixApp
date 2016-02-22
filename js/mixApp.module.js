/*
 *mixApp.module.js
 *module模块
 *应用面板模板
 *负责页面渲染，初始化应用界面及监听用户操作以做出改变。
 */
mixApp.module = (function(){
  //======模块作用域变量配置=========
  var 
    moduleDomMap = {},
    moduleAppMap = {},
    currentApp = {},//保存当前app
    //方法
    //=================
    init,setMap,selectApp,
    moduleToolsInit,moduleMainInit,
    moduleListInit,moduleFuncInit,
    moduleAppListInit;
  //===模块作用域变量配置区域结束====

  //============一般方法==============
  setMap = function (appMap,DomMap){
    moduleAppMap = appMap;
    moduleDomMap = DomMap;
    
  };

  selectApp = function (app){
    var app = app || moduleAppMap.paint;
    return app;
  };

  moduleListInit = function (app){
    if(app.params.list instanceof HTMLElement){
      moduleDomMap.$list.append(app.params.list);
    }
  };

  moduleFuncInit = function (app){
    if(app.params.func instanceof HTMLElement){
      moduleDomMap.$func.append(app.params.func);
    }
  };

  moduleMainInit = function (app){
    console.log(app.params)
    if(app.params.main.panel instanceof HTMLElement){
      moduleDomMap.$main.append(app.params.main.panel);
    }

    if(app.params.main.styleSheet instanceof HTMLElement){
      moduleDomMap.$main.append(app.params.main.styleSheet);
    }
  };

  moduleToolsInit = function (app){
    if(app.params.tools instanceof HTMLElement){
      moduleDomMap.$tools.append(app.params.tools);
    }
  };

  moduleAppListInit = function (app){
    if(app.params.appList instanceof HTMLElement){
      moduleDomMap.$appList.append(app.params.appList);
    }
  };
  //=========一般方法区域结束=========

  //=========事件处理方法============
  //=====事件处理方法区域结束========

  //===========公共方法==============
  init = function (appMap,moduleDomMap){

    setMap(appMap,moduleDomMap);
    //切换app后先将上一个app的数据清除，
    //再初始化下一个app。
    //===============================
    currentApp = selectApp();
    currentApp.params = null;
    currentApp.init();
    moduleListInit(currentApp);
    moduleFuncInit(currentApp);
    moduleMainInit(currentApp);
    moduleToolsInit(currentApp);
    moduleAppListInit(currentApp);
  };

  return {init: init};
  //=======公共方法区域结束==========
})();
