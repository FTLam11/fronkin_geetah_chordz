// 6 string guitars only
// write functions to validate input (chars.length is [6,13), first char cannot be 'b' or '#', no lower case letters except b, invalid chars) 
// suggest tuning/chord to note parser for exercism.io

function Tuning(tuning) {
  this.tuning =  tuning;
  this.notes = this.parse(this.tuning);
};

Tuning.prototype.tuningToArr = function() {
  return this.tuning.split('');
};

Tuning.prototype.parse = function() {
  var tuningArr = this.tuningToArr();

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i] == "#") {
      tuningArr[i - 1] = tuningArr[i - 1] + "#";
    } else if (tuningArr[i] == "b") {
      tuningArr[i - 1] = tuningArr[i - 1] + "b";
    }
  };

  return tuningArr.filter(function(char) {
    return ((char != "#") && (char != "b"));
  });  
};

Tuning.prototype.intervals = function() {

}

var standard = new Tuning('EADGBE');
var eb = new Tuning('EbADGBE');
var americanFootball = new Tuning('FACGCE');
var algernonCadwallader = new Tuning('DAEAC#E');
var lute = new Tuning('EADF#BE');
