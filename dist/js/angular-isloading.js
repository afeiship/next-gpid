(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('isloading', ['$http', function ($http) {
      return {
        restrict: 'A',
        scope: {
          loading: '='
        },
        link: function (scope, elem) {
          scope.$watch(function () {
            return $http.pendingRequests.length > 0;
          }, function (inValue) {
            scope.loading = inValue;
          });
        }
      };
    }]);

})();
