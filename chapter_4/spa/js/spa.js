/*
 * spa.js
 * ルート名前空間モジュール
*/
/*jslint        browser: true, continue: true,
  devel : true, indent : 2,    maxerr  : 50,
  newcap: true, nomen  : true, plusplus: true,
  regexp: true, sloppy : true, vars    : false,
  white : true
*/
/*global $, spa */

var spa = (function () {
  var initModule = function ( $container ) {
    // ここでハウスキーピング処理を行う
    
    // シェルを構成する必要があれば、まず spa.shell.configModule を呼び出す
    
    spa.shell.initModule( $container );
  };
  
  return { initModule : initModule };
} ());