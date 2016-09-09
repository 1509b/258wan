'use strict';

/*
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl */
angular.module('yeoman')
  .controller('case', function () {
  	var pCp=document.getElementsByClassName("case-p");
  	var pZh=document.getElementsByClassName("zhou-first");
  	var pSp=document.getElementsByClassName("case-span");
  	var pImg=document.getElementsByClassName("case-img");
  	var pCl=document.getElementsByClassName("case-last")[0];
  	var pA=document.getElementsByClassName("case-a")[0];
  	for(var i=0;i<pZh.length;i++){
  		pZh[i].index=i;
  		pZh[i].onmouseover=function(){
  			for(var i=0;i<pSp.length;i++){
  				pSp[i].style.opacity=0.4;
  				pCp[i].style.background="";
  				pCp[i].style.color="#dcddde";
  				pCp[i].style.border="solid 1px #a7b0b5";
  				pImg[i].style.transform="scale(1)"
  			}
  			   pSp[this.index].style.opacity=0;
  			   pSp[this.index].style.zIndex=2;
  			   pCp[this.index].style.background="#7bc91e";
  			   pCp[this.index].style.color="white";
  			   pCp[this.index].style.border="none";
  			   pImg[this.index].style.transform="scale(1.2)"
  		}
  		pZh[i].onmouseout=function(){
  			pSp[this.index].style.opacity=0.4;
  			   pCp[this.index].style.background="";
  			   pCp[this.index].style.color="#dcddde";
  			   pCp[this.index].style.border="solid 1px #a7b0b5";
  			   pImg[this.index].style.transform="scale(1)"
  		}
  	}
    pCl.onmouseover=function(){
    	pA.style.color="white";
    	pA.style.transition="1s"
    }
    pCl.onmouseout=function(){
    	pA.style.color="#89949e";
    	pA.style.transition="1s"
    }
  })