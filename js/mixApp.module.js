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

  selectApp = function (appName){
    //切换app后先将上一个app的数据清除，
    //再初始化下一个app。
    //===============================
    var app;
    if(currentApp){
      currentApp.params = null;
    }
    if(appName){
      app = moduleAppMap[appName]?moduleAppMap[appName]: moduleAppMap.paint;
    }else{
      app = moduleAppMap.paint;
    }

    app.init();

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

  moduleAppListInit = function (appMap){
    var appNode;
    for(var i in moduleAppMap){
      appNode = document.createElement('button');
      appNode.innerHTML = moduleAppMap[i].name;
      appNode.className = "btn btn-primary";
      appNode.onclick = function(){
        alert('clicked')
      }
      moduleDomMap.$appList.append(appNode);
    }
  };
  //=========一般方法区域结束=========

  //=========事件处理方法============
  //=====事件处理方法区域结束========

  //===========公共方法==============
  init = function (appMap,moduleDomMap){

    setMap(appMap,moduleDomMap);
    
    currentApp = selectApp();

    moduleListInit(currentApp);
    moduleFuncInit(currentApp);
    moduleMainInit(currentApp);
    moduleToolsInit(currentApp);
    moduleAppListInit();
  };

  return {init: init};
  //=======公共方法区域结束==========
})();
