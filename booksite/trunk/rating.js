
var $rating = $('.rating');
 
$rating.on('mouseover', function() {
    $(this).removeClass('show-current');
}).on('mouseleave', function() {
    $(this).addClass('show-current');
});
 
$('li', $rating).on('click', function() {
    alert('User selected ' + $(this).text());
});