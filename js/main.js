var $menu = $(".menu");
var $lien = $(".menu li");
var $chap = $(".wrapper > div:not(.menu)");
var navPos = $menu.offset().top;

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var $docH = $(document).height();
	var $windH = $(window).height();
    if(scrollTop > navPos){
            $menu.addClass('fixed');
            $("#home").css({paddingTop : 80});
        }
        else {
            $menu.removeClass('fixed');
            $("#home").css({paddingTop : 30});
        }
       //section couleur
   $chap.each(function(){
        if(scrollTop > $(this).offset().top - 50){
          $("a.selected").removeClass("selected");
        
       $("a[href='#"+ $(this).attr("id")+"']").addClass("selected");
      }
    });

   if (scrollTop + $windH == $docH){
       $("a.selected").removeClass("selected");
       $(".menu li:last-child a").addClass("selected");
      }
    });

//scrollspy
 $('.menu a').click(function(){
    var attribut = $(this).attr("href");
  $('html, body').animate( { scrollTop: $(attribut).offset().top }, "slow" );
  return false; 
});
    
   

