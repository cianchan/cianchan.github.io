// imagesLoaded & filterizr
$('.filtr-container').imagesLoaded( function() {
  // images have already loaded, instantiate Filterizr
  var filterizr = $('.filtr-container').filterizr(
      options = {
         animationDuration: 0.25,
         filter: '1', // Initial filter
         layout: 'packed',
      }
    );
});




// tabs toggle class
$('.filter__button').on('click', function(){
	$('.filter__button').removeClass('filter__button--active');
	$(this).addClass('filter__button--active');
});