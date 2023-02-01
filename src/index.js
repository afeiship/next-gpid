(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.gpid = function (inUrl) {
    var url = inUrl || location.href || '';
    var filename = url.substring(url.lastIndexOf('/') + 1);
    return filename.split('.')[0];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.gpid;
  }
})();
