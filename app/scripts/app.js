'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
    .module('yeomanApp', ['ui.router']).config(function($stateProvider){
  	    $stateProvider.state("main",{
	  		url:"main",
	  		templateUrl:'../views/main.html',
	  		controller:"main"
	  	}).state("about",{
	  		url:"about",
	  		templateUrl:'../views/about.html',
	  		controller:"about"
	  	})
    });


