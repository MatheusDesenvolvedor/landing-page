$(function(){
   
  $('nav.desktop a').hover(function(){
      $('nav.desktop li').removeClass('select');
      $(this).parent().addClass('select');
  })
  $('i').click(function(){
    $('nav.mobile ul').slideToggle();
  })

  $('nav a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;
    
    // animação do scrolltop;
    $('html,body').animate({'scrollTop':offSetTop});

  })

});

