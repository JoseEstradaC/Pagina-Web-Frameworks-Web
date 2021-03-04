$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("nav ul li a[href^='#']").on('click', function (e) {
  // prevent default anchor click behavior
  e.preventDefault();
  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate(
    {
      scrollTop: $(hash).offset().top - 65,
    },
    700,
    function () {
      history.replaceState(null, '', e.originalEvent.target.hash);
    }
  );
});
