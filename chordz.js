function indexSharpFlat(tuning) {
  var indices = [];
  var regEx = /[^a-z^A-z]/;
  var tuningArr = tuningToArr(tuning);

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i].match(regEx) != null) {
      indices.push(i);
    }
  };

  return indices;
};

function tuningToArr(tuning) {
  return tuning.split('');
};

function Tuning(tuning) {
  this.notes = this.tuneMe(tuning);
};

Tuning.prototype.tuneMe = function(tuning) {
  var indices = indexSharpFlat(tuning);
  var tuning = tuningToArr(tuning);

  for (var i = 0; i < indices.length; i++) {
    tuning[indices[i] - 1] = tuning[indices[i] - 1] + tuning[indices[i]];
    tuning.splice(indices[i], 1);
  };

  return tuning;
};

//

var key = "e";

var standard = new Tuning('eadgbe');
var americanFootball = new Tuning('facgce');
var algernonCadwallader = new Tuning('daeac#e');
