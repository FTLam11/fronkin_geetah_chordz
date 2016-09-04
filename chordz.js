// 6 string guitars only
// case insensitive, tuning with Bflat, check tuning length > 6

function Tuning(tuning) {
  this.notes = this.tuneMe(tuning);
};

Tuning.prototype.indexOfSharpFlat = function(tuning) {
  var indices = [];
  var sharpFlatRegEx = /[^a-z^A-z]/;
  var tuningArr = tuningToArr(tuning);

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i].match(sharpFlatRegEx) != null) {
      indices.push(i);
    }
  };

  return indices;
};

Tuning.prototype.tuningToArr = function(argument) {
  return tuning.split('');
};

Tuning.prototype.tuneMe = function(tuning) {
  var indices = indexOfSharpFlat(tuning);
  var tuning = tuningToArr(tuning);

  for (var i = 0; i < indices.length; i++) {
    tuning[indices[i] - 1] = tuning[indices[i] - 1] + tuning[indices[i]];
    tuning.splice(indices[i], 1);
  };

  return tuning;
};

var key = "e";

var standard = new Tuning('eadgbe');
var americanFootball = new Tuning('facgce');
var algernonCadwallader = new Tuning('daeac#e');
