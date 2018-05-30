    $(document)
    .ready(function() {

      // Start of Web App
      $('.menu').css('border','none');
      $('#Buy-Enerjoy').show();
      $('#hiddenMenu').show();

      // Global Nav start
      $('.home').click(function() {
       $('.menu').css('border','none');
       $('#Buy-Enerjoy').show();
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
		$('#about-page-link1').click(function() {
				$('#about-page-link1').addClass('active');
				$('#buy-page-link1').removeClass('active');

     	});
		
		$('#buy-page-link1').click(function() {
				$('#about-page-link1').removeClass('active');
				$('#buy-page-link1').addClass('active');

     	});

		// Global Navigation highlighting active link END
		
		// Aloe Vera click
		$('#img-aloe-vera').click(function() {
				$('#myModal-aloeVera').show();
				$('#myModal-noni').hide();
				$('#myModal-turmeric').hide();
				$('#myModal-coffee').hide();
				$('#myModal-green-tea').hide();
				$('#myModal-honey').hide();
				$('#myModal-ginkgo-biloba').hide();
     	});
		// Noni click
		$('#img-noni').click(function() {
			$('#myModal-aloeVera').hide();
			$('#myModal-noni').show();
			$('#myModal-turmeric').hide();
			$('#myModal-coffee').hide();
			$('#myModal-green-tea').hide();
			$('#myModal-honey').hide();
			$('#myModal-ginkgo-biloba').hide();
     	});
		// Turmeric click
		$('#img-turmeric').click(function() {
			$('#myModal-aloeVera').hide();
			$('#myModal-noni').hide();
			$('#myModal-turmeric').show();
			$('#myModal-coffee').hide();
			$('#myModal-green-tea').hide();
			$('#myModal-honey').hide();
			$('#myModal-ginkgo-biloba').hide();
     	});
		// Coffee click
		$('#img-coffee').click(function() {
       		$('#myModal-aloeVera').hide();
			$('#myModal-noni').hide();
			$('#myModal-turmeric').hide();
			$('#myModal-coffee').show();
			$('#myModal-green-tea').hide();
			$('#myModal-honey').hide();
			$('#myModal-ginkgo-biloba').hide();
     	});
		// Green Tea click
		$('#img-green-tea').click(function() {
       		$('#myModal-aloeVera').hide();
			$('#myModal-noni').hide();
			$('#myModal-turmeric').hide();
			$('#myModal-coffee').hide();
			$('#myModal-green-tea').show();
			$('#myModal-honey').hide();
			$('#myModal-ginkgo-biloba').hide();
     	});
		// Honey click
		$('#img-honey').click(function() {
       		$('#myModal-aloeVera').hide();
			$('#myModal-noni').hide();
			$('#myModal-turmeric').hide();
			$('#myModal-coffee').hide();
			$('#myModal-green-tea').hide();
			$('#myModal-honey').show();
			$('#myModal-ginkgo-biloba').hide();
     	});
		// Ginkgo Biloba click
		$('#img-ginkgo-biloba').click(function() {
			$('#myModal-aloeVera').hide();
			$('#myModal-noni').hide();
			$('#myModal-turmeric').hide();
			$('#myModal-coffee').hide();
			$('#myModal-green-tea').hide();
			$('#myModal-honey').hide();
			$('#myModal-ginkgo-biloba').show();
     	});
		
		// Close Modals
		$('.closeModal').click(function() {
				$('#myModal-aloeVera').hide();
				$('#myModal-noni').hide();
				$('#myModal-turmeric').hide();
				$('#myModal-coffee').hide();
				$('#myModal-green-tea').hide();
				$('#myModal-honey').hide();
				$('#myModal-ginkgo-biloba').hide();
		});

		


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