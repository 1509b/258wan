'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
//angular.module("yeomanApp", ["ui.router"]).config(function($stateProvider){
//	    $stateProvider.state("main",{
//	  		url:"/main",
//	  		templateUrl:"views/main.html",
//	  		controller:"main",
//	  		abstract: true,
//	  	}).state("product",{
//	  		url:"/product",
//	  		templateUrl:"views/product.html",
//	  		controller:"product",
//	  		abstract: true,
//	  	}).state("news",{
//	  		url:"news",
//	  		templateUrl:'views/news.html',
//	  		controller:"news"
//	  	}).state("about",{
//	  		url:"about",
//	  		templateUrl:'views/about.html',
//	  		controller:"about"
//	  	}).state("case",{
//	  		url:"case",
//	  		templateUrl:'views/case.html',
//	  		controller:"case"
//	  	}).state("contact",{
//	  		url:"contact",
//	  		templateUrl:'views/contact.html',
//	  		controller:"contact"
//	  	})
//  });

 angular.module("yeoman",["ui.router"]).config(function($stateProvider){
            $stateProvider.state("main",{
                templateUrl:"../views/main.html",
                url:"/main"
            }).state("product",{
                url:"/product",
                templateUrl:"../views/product.html"
            }).state("family",{
                url:"/product/family",
                templateUrl:"../views/family.html"
            }).state("fever",{
                url:"/product/fever",
                templateUrl:"../views/fever.html"
            }).state("screen",{
                url:"/product/screen",
                templateUrl:"../views/screen.html"
            }).state("meeting",{
                url:"/product/meeting",
                templateUrl:"../views/meeting.html"
            }).state("news",{
                url:"/news",
                templateUrl:"../views/news.html"
            }).state("dynamic",{
                url:"/news/dynamic",
                templateUrl:"../views/dynamic.html"
            }).state("information",{
                url:"/news/information",
                templateUrl:"../views/information.html"
            }).state("about",{
                url:"/about",
                templateUrl:"../views/about.html"
            }).state("case",{
                url:"/case",
                templateUrl:"../views/case.html"
            }).state("contact",{
                url:"/contact",
                templateUrl:"../views/contact.html"
            })

        })
                .controller("b",function(){})
