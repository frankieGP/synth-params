$(document).ready(function() {
	$('.stop').hide();

  $('.play').click(function() {
      $(this).hide();
      $(this).next('.stop').show();  $(this).closest('div').find('audio[id^="audio"]').get(0).play();
  });


  $('.stop').click(function() {
      $(this).prev('.play').show();
      $(this).hide();
  	  $(this).closest('div').find('audio[id^="audio"]').get(0).pause();
  });






  $("#analog-bass").on('click', function() {
    $( ".osc1-tail" ).addClass( "osc1-bass", 1000 );
    $( ".osc2-tail" ).addClass( "osc2-bass", 1000 );
    $( ".freq-tail" ).addClass( "freq-bass", 1000 );
    $( ".res-tail" ).addClass( "res-bass", 1000 );
    $( ".amount-tail" ).addClass( "amount-bass", 1000 );
    $( ".rate-tail" ).addClass( "rate-bass", 1000 );

    $( ".slider-AA" ).addClass( "a-attack-bass", 1000 );
    $( ".slider-AD" ).addClass( "a-decay-bass", 1000 );
    $( ".slider-AS" ).addClass( "a-sustain-bass", 1000 );
    $( ".slider-AR" ).addClass( "a-release-bass", 1000 );

    $( ".slider-FA" ).addClass( "f-attack-bass", 1000 );
    $( ".slider-FD" ).addClass( "f-decay-bass", 1000 );
    $( ".slider-FS" ).addClass( "f-sustain-bass", 1000 );
    $( ".slider-FR" ).addClass( "f-release-bass", 1000 );


    $( ".osc1-tail" ).removeClass( "osc1-digital", 1000 );
    $( ".osc2-tail" ).removeClass( "osc2-digital", 1000 );
    $( ".freq-tail" ).removeClass( "freq-digital", 1000 );
    $( ".res-tail" ).removeClass( "res-digital", 1000 );
    $( ".amount-tail" ).removeClass( "amount-digital", 1000 );
    $( ".rate-tail" ).removeClass( "rate-digital", 1000 );

    $( ".slider-AA" ).removeClass( "a-attack-digital", 1000 );
    $( ".slider-AD" ).removeClass( "a-decay-digital", 1000 );
    $( ".slider-AS" ).removeClass( "a-sustain-digital", 1000 );
    $( ".slider-AR" ).removeClass( "a-release-digital", 1000 );

    $( ".slider-FA" ).removeClass( "f-attack-digital", 1000 );
    $( ".slider-FD" ).removeClass( "f-decay-digital", 1000 );
    $( ".slider-FS" ).removeClass( "f-sustain-digital", 1000 );
    $( ".slider-FR" ).removeClass( "f-release-digital", 1000 );
  });




  $("#digital-bass").on('click',function() {
    $( ".osc1-tail" ).addClass( "osc1-digital", 1000 );
    $( ".osc2-tail" ).addClass( "osc2-digital", 1000 );
    $( ".freq-tail" ).addClass( "freq-digital", 1000 );
    $( ".res-tail" ).addClass( "res-digital", 1000 );
    $( ".amount-tail" ).addClass( "amount-digital", 1000 );
    $( ".rate-tail" ).addClass( "rate-digital", 1000 );

    $( ".slider-AA" ).addClass( "a-attack-digital", 1000 );
    $( ".slider-AD" ).addClass( "a-decay-digital", 1000 );
    $( ".slider-AS" ).addClass( "a-sustain-digital", 1000 );
    $( ".slider-AR" ).addClass( "a-release-digital", 1000 );

    $( ".slider-FA" ).addClass( "f-attack-digital", 1000 );
    $( ".slider-FD" ).addClass( "f-decay-digital", 1000 );
    $( ".slider-FS" ).addClass( "f-sustain-digital", 1000 );
    $( ".slider-FR" ).addClass( "f-release-digital", 1000 );



    $( ".osc1-tail" ).removeClass( "osc1-bass", 1000 );
    $( ".osc2-tail" ).removeClass( "osc2-bass", 1000 );
    $( ".freq-tail" ).removeClass( "freq-bass", 1000 );
    $( ".res-tail" ).removeClass( "res-bass", 1000 );
    $( ".amount-tail" ).removeClass( "amount-bass", 1000 );
    $( ".rate-tail" ).removeClass( "rate-bass", 1000 );

    $( ".slider-AA" ).removeClass( "a-attack-bass", 1000 );
    $( ".slider-AD" ).removeClass( "a-decay-bass", 1000 );
    $( ".slider-AS" ).removeClass( "a-sustain-bass", 1000 );
    $( ".slider-AR" ).removeClass( "a-release-bass", 1000 );

    $( ".slider-FA" ).removeClass( "f-attack-bass", 1000 );
    $( ".slider-FD" ).removeClass( "f-decay-bass", 1000 );
    $( ".slider-FS" ).removeClass( "f-sustain-bass", 1000 );
    $( ".slider-FR" ).removeClass( "f-release-bass", 1000 );
  });

});



    // var $this = $(this),
    //     audio = $this.children('audio')[0];
    //     audio.play();
