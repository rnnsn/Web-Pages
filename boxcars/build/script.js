var diceRoll = 0;
var which = "l";
assignPips();
which = "r";
assignPips();

var vertical = 0;
var horizontal = 0;
var rotateDegree = 0;
var xCoord = 0;
var yCoord = 0;

function newRoll() {
  diceRoll = Math.floor(Math.random() * 12);
  assignPips();
  rotateDegree = Math.floor(Math.random() * 90);
  xCoord = Math.floor(Math.random() * 51);
  yCoord = Math.floor(Math.random() * 51);
  $("#" + which).attr("style", "-webkit-transform: rotate(" + rotateDegree + "deg);" + "-ms-transform: rotate(" + rotateDegree + "deg);" + "transform: rotate(" + rotateDegree + "deg);" + vertical + yCoord + "px;" + horizontal + xCoord + "px;");
}

function assignNum() {
  which = "l";
  vertical = "top:";
  horizontal = "left:";
  newRoll();
  which = "r";
  vertical = "bottom:";
  horizontal = "right:";
  newRoll();
}

function assignPips() {
  if (diceRoll == 0) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").removeClass("hidepip");
    $("#" + which + "e").addClass("hidepip");
    $("#" + which + "f").removeClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if (diceRoll == 1) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").removeClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").addClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").removeClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if ((diceRoll == 2) || (diceRoll == 3)) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").removeClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if ((diceRoll == 4) || (diceRoll == 5)) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").addClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if (diceRoll == 6) {
    $("#" + which + "a").addClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").removeClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").addClass("hidepip");
  }
  else if (diceRoll == 7) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").addClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").removeClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").addClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if (diceRoll == 8) {
    $("#" + which + "a").addClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").removeClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").addClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").removeClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").addClass("hidepip");
  }
  else if (diceRoll == 9) {
    $("#" + which + "a").removeClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").addClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").addClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").addClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").removeClass("hidepip");
  }
  else if ((diceRoll == 10) || (diceRoll == 11)) {
    $("#" + which + "a").addClass("hidepip");
    $("#" + which + "b").addClass("hidepip");
    $("#" + which + "c").addClass("hidepip");
    $("#" + which + "d").addClass("hidepip");
    $("#" + which + "e").removeClass("hidepip");
    $("#" + which + "f").addClass("hidepip");
    $("#" + which + "g").addClass("hidepip");
    $("#" + which + "h").addClass("hidepip");
    $("#" + which + "i").addClass("hidepip");
  }
}

$(window).on("orientationchange", function() {
  assignNum();
});

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

if (!isTouchDevice()) {
  window.onresize = function() {
    assignNum();
  };
}
