angular.module('yeoman')
    .controller('about', function () {
        var contact_img=document.getElementById('about-img');
        contact_img.style.transform="scale("+1.4+")";
        setTimeout(function(){
            contact_img.style.transform="scale("+1.0+")";
        },200);

    });
