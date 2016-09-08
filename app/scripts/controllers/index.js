'use strict';

/*
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl */
angular.module('yeoman')
  .controller('b', function () {
     var time=null;
     var timer=null;
    
     chan.onmouseover=function(){
//   	clearInterval(time)
     	ulf.className="xulf"
     }
     chan.onmouseout=function(){
//   	clearInterval(time)
//   	time=setInterval(function(){
     	   ulf.className="ulf"
     	
//   },1000)
     	
     }
     xin.onmouseover=function(){
     
//   	clearInterval(timer)
//   	timer=setInterval(function(){
//   		ult.style.display="block"
//   	    ult.style.top="100px"
//   	},1000)
		ult.className="ulton"
     	
     }
     xin.onmouseout=function(){
     	ult.className="ult"
     	
     }
 
	 var oIs=document.getElementById("index-ser");
	 var oN=document.getElementById("index-div");
	 oIs.onmouseover=function(){
	 	oN.className="index-div";
	 }
	 oIs.onmouseout=function(){
	 	oN.className="index-hover";
	 }
   
  });