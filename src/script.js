(function () {
  'use strict';
  function extract(_string) {
    let _str = _string;
    if(_str.match(/\d+/g) != null) {
      let da = _str.match(/\d+/g);
      da.map(function(e, i) {
        console.log(`[${i}] => (${e}) ${typeof e}`);
      });
      return true;
    } else {
      console.log(`[${0}] => (${-1}) ${typeof '-1'}`);
      return false;
    }
  }
  var words = 'Out of 100 children, 25 children are grade A children, 15 are grade B children and the remaining 60 are grade C.';
  extract(words);
}());
