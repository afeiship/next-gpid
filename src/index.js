import nx from '@jswork/next';

nx.gpid = function (inUrl) {
  var url = inUrl || location.href || '';
  var filename = url.substring(url.lastIndexOf('/') + 1);
  return filename.split('.')[0];
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.gpid;
}

export default nx.gpid;
