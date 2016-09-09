'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeoman')
  .controller('contact', function () {
     var contact_banner=document.getElementById('con_banner');
     contact_banner.style.transform="scale("+1.4+")";
     setTimeout(function(){
     	contact_banner.style.transform="scale("+1.0+")";
     },200);
     
  });
