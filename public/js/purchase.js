    $(document)
    .ready(function() {

      // Start of Web App
      $('.menu').css('border','none');
      $('#About-Enerjoy').hide();
      $('#Buy-Enerjoy').show();
      $('#hiddenMenu').show();

      // Global Nav start
      $('.home').click(function() {
       $('.menu').css('border','none');
       $('#About-Enerjoy').show();
       $('#Buy-Enerjoy').hide();
     });

      $('.purchase').click(function() {
       $('.menu').css('border','none');
       $('#About-Enerjoy').hide();
       $('#Buy-Enerjoy').show();
       $('#hiddenMenu').show();
     });

      $('.contact').click(function() {
        $('#About-Enerjoy').css('display','none');
        $('#Buy-Enerjoy').css('display','none');
        $('.menu').css('border','none');
        $('#hiddenMenu').show();
      });
      // Global Nav end

		// thumbnail modal START
		// initial state
		$('#myModal-aloeVera').hide();
		$('#myModal-noni').hide();
		$('#myModal-turmeric').hide();
		$('#myModal-coffee').hide();
		$('#myModal-green-tea').hide();
		$('#myModal-honey').hide();
		$('#myModal-ginkgo-biloba').hide();
		$('#about-page-link1').addClass('active');
		
		// On-Click
		
		// Global Navigation highlighting active link START
		$('#buy-page-link1').addClass('active');
		$('#about-page-link1').removeClass('active');

		// thumbnail modal END
		
      // fix menu when passed
      $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');
    });