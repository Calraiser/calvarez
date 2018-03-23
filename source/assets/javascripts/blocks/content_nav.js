$(document).ready(function(){

  var $menu    = $('.sidebar-menu'),
      $submenu = $('.sidebar-submenu');

  $menu.find('a').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $submenu.toggleClass('active');
  })

});
