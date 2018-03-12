// filterizr
$(function() {
    //Initialize filterizr with default options
    $('.filtr-container').filterizr(
      options = {
         animationDuration: 0.25,
         filter: '1', // Initial filter
      	 layout: 'sameSize',
      }
    );
});


// tabs toggle class
$('.filter__button').on('click', function(){
	$('.filter__button').removeClass('filter__button--active');
	$(this).addClass('filter__button--active');
});