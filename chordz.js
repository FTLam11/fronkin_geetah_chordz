// 6 string guitars only
// write functions to validate input
// suggest tuning/chord to note parser for exercism.io

function Tuning(tuning) {
  this.tuning =  tuning;
  this.notes = this.parse(this.tuning);
};

Tuning.prototype.tuningToArr = function(tuning) {
  return tuning.split('');
};

Tuning.prototype.parse = function(tuning) {
  var tuningArr = this.tuningToArr(tuning);

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i] == "#") {
      tuningArr[i - 1] = tuningArr[i - 1] + "#";
    } else if (tuningArr[i] == "b") {
      tuningArr[i - 1] = tuningArr[i - 1] + "b";
    }
  };

  return tuningArr.filter(function(char) {
    return char != ("#" || "b");
  });  
};

var key = "e";

var standard = new Tuning('EADGBE');
var eb = new Tuning('EbADGBE');
var americanFootball = new Tuning('FACGCE');
var algernonCadwallader = new Tuning('DAEAC#E');
