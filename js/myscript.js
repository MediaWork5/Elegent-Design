/*glopal $, alert, console*/

$(function(){

    'use strict';

    $("nav a, .intro .thebox a, footer .container > div:nth-child(1) a").on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $("#" + $(this).data('scroll')).offset().top - 40
        }, 1000);
    });
    
    $("header li a").on("click", function () {
        //$(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $("header a").removeClass('active');
        $(this).addClass('active');
    });
    

     /****** nav ******/
     $("nav > .container > .row > div:nth-child(2) > div").on("click", function(){

        var menu_div = $("nav > .container > .row > div:nth-child(1)");
        if($(menu_div).css("display") == "none") {
            $("nav > .container > .row > div:nth-child(2) > div:hover > span:nth-child(2)").animate({
                left: 0
            },300);
            menu_div.show(300);
        }
        else {
            menu_div.hide(300);
            $("nav > .container > .row > div:nth-child(2) > div:hover > span:nth-child(2)").animate({
                left: -4
            },300);
        }
    })
    $(window).resize(function(){
        var sw = $(window).innerWidth();
        if(sw > 750) {
            $("nav > .container > .row > div:nth-child(1)").show();
        }
        else {
            $("nav > .container > .row > div:nth-child(1)").hide();
        }
    });
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
    });
    
    scrollButton.click(function(){
            
        $("html, body").animate({ scrollTop: 0}, 2000);

    });
    
    

    
    
          
    
});