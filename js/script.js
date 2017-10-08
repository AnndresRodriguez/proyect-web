$(document).ready(function(){


	$('.carousel').carousel();

	$('.producto-mussi').hide();
	$('.producto-bossi').hide();
	$('.producto-velez').hide();
	$('.producto-nautica').hide();
	$('.producto-oakley').hide();
	$('.producto-mh').hide();
	$('.producto-puma').hide();
	$('.producto-adiddas').hide();


	$('.btn-mussi').click(function(){

		$('.body').hide();
		$('.producto-mussi').show();

	});


	$('.btn-bossi').click(function(){

		$('.body').hide();
		$('.producto-bossi').show();

	});

	$('.btn-velez').click(function(){

		$('.body').hide();
		$('.producto-velez').show();

	});

	$('.btn-nautica').click(function(){

		$('.body').hide();
		$('.producto-nautica').show();

	});

	$('.btn-oakley').click(function(){

		$('.body').hide();
		$('.producto-oakley').show();

	});


	$('.btn-mh').click(function(){

		$('.body').hide();
		$('.producto-mh').show();

	});

	$('.btn-puma').click(function(){

		$('.body').hide();
		$('.producto-puma').show();

	});

	$('.btn-adiddas').click(function(){

		$('.body').hide();
		$('.producto-adiddas').show();

	});


	$('.btn-volver-inicio').click(function(){

		$('.producto-mussi').hide();
		$('.producto-bossi').hide();
		$('.producto-velez').hide();
		$('.producto-nautica').hide();
		$('.producto-oakley').hide();
		$('.producto-mh').hide();
		$('.producto-puma').hide();
		$('.producto-adiddas').hide();
		$('.body').show();


	});


	
	
	



})