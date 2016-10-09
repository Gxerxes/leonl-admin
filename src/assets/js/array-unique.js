Array.prototype.unique1 = function () {
  var a = [],
    o = {},
    n = this.length;

    for (var i=0; i<n; ++i) {
      o[this[i]] = this[i];
    }
    for (var i in o) {
      a.push(o[i]);
    }
    return a;
};

Array.prototype.unique2 = function () {
  var a = [],
    n = this.length;
    for (var i=0; i<n; ++i) {
      for (var j=i+1; j<n; ++j) {
        if(this[i]===this[j]) j = ++i;
      }
      a.push(this[i]);
    }
  return a;
};

Array.prototype.unique3 = function () {
  return this.filter(function (s, i, a) {
    return i===a.lastIndexOf(s);
  })
};
