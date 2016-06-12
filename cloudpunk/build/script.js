var b = true;

$.fn.inView = function() {
  var viewport = {};
  viewport.top = $(window).scrollTop();
  viewport.bottom = viewport.top + $(window).height();
  var bounds = {};
  bounds.top = this.offset().top;
  bounds.bottom = bounds.top + this.outerHeight();
  return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
};

function check() {
  var uss = ($('#lscrew').inView());
  if (uss === false) {
    $("#lscrew").css("visibility", "hidden");
    $("#rscrew").css("visibility", "hidden");
    $("#ltear").css("visibility", "visible");
    $("#rtear").css("visibility", "visible");
    b = false;
  }
}

if (b === true) {
  $(window).scroll(function() {
    check();
  });
}
