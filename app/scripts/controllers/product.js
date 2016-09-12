'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeoman',)
  .controller('product', function () {
   		var hui_logo=document.getElementById('hui_logo');
	     hui_logo.style.transform="scale("+1.4+")";
	     setTimeout(function(){
	     	hui_logo.style.transform="scale("+1.0+")";
	     },200);
  });
