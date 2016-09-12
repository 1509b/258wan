'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeoman').controller('main', function() {
	var main_ban = document.getElementsByClassName("main_ban")[0];
	var main_ban_img = main_ban.getElementsByTagName("img");
	main_ban.style.width = main_ban_img.length * main_ban_img[0].clientWidth + "px";
	var hhh = document.body.clientWidth || document.documentElement.clientWidth;
	for(var i = 0; i < main_ban_img.length; i++) {
		main_ban_img[i].style.width = hhh + "px";
	}
	$(".main_jiantou span:first").stop().click(function() {
		$(".main_ban img:last").prependTo(".main_ban");
		$(".main_ban").css("left", -hhh);
		$(".main_ban").stop().animate({
			'left': 0
		}, 1000);
	});
	$(".main_jiantou span:last").stop().click(function() {
		$(".main_ban").stop().animate({
			'left': -hhh
		}, 1000, function() {
			$(".main_ban img:first").appendTo(".main_ban");
			$(".main_ban").css("left", 0);
		});
	});

	var timm = "";
	$(".main_banner").hover(function() {
		clearInterval(timm)
	}, function() {
		timm = setInterval(function() {
			$(".main_ban").stop().animate({
				'left': -hhh
			}, "4000", function() {
				$(".main_ban img:first").appendTo(".main_ban");
				$(".main_ban").css("left", 0);
			});
		}, 2500);
	}).trigger("mouseout");
    
   
	var main_keji = document.getElementsByClassName("main_keji_sp_one_img");
	var main_dis_img = document.getElementsByClassName("main_keji_sp_one_dis_img");
	var main_keji_sp_one_h6=document.getElementsByTagName("h6");
	for(var i = 0; i < main_keji.length; i++) {
		main_keji[i].index = i;
		main_keji[i].onmouseover = function() {
			main_keji_sp_one_h6[this.index].style.marginTop="40px";
			main_dis_img[this.index].style.transform="rotate(0deg) scale(2)";
		}
		main_keji[i].onmouseout = function() {
			main_keji_sp_one_h6[this.index].style.marginTop="10px";
			main_dis_img[this.index].style.transform="rotate(150deg) scale(0)";
		}
	}
	var main_product_lia=document.getElementsByClassName("main_product_lia");
	var main_product_hide=document.getElementsByClassName("main_product_hide");
	var rota_img=document.getElementsByClassName("rota_img");
	var main_product_img=document.getElementsByClassName("main_product_img");
	for(var n = 0; n < main_product_lia.length; n++) {
		main_product_lia[n].index=n;
		main_product_lia[n].onmouseover= function() {
			main_product_hide[this.index].style.transform="translateY(0px)";
			rota_img[this.index].style.transform="scale(1.1)";
			main_product_img[this.index].style.backgroundColor="#f9f9f9";
		}
		main_product_lia[n].onmouseout= function() {
			main_product_hide[this.index].style.transform="translateY(-260px)";
			rota_img[this.index].style.transform="scale(1)";
			main_product_img[this.index].style.backgroundColor="#FFFFFF";
		}
	}
});