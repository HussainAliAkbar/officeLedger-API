'use strict';

var fs = require('fs');
var path = require('path');

module.exports = () => {
  var _fns = {};
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file === 'index.js') {
      return;
    }
    var ext = path.extname(file);
    var basename = path.basename(file, ext);

    _fns[basename] = require('./' + file);
  });

  return _fns;
};
