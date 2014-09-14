var essotHomeApp = angular.module('essotHomeApp', []);



 essotHomeApp.config(['$httpProvider', function($httpProvider) {

          $httpProvider.defaults.useXDomain = true;



          /**

           * Just setting useXDomain to true is not enough. AJAX request are also

           * send with the X-Requested-With header, which indicate them as being

           * AJAX. Removing the header is necessary, so the server is not

           * rejecting the incoming request.

           **/

          delete $httpProvider.defaults.headers.common['X-Requested-With'];

      }

  ]);



essotHomeApp.controller('essotHomeController', function($scope, $http, $location) {



 $scope.tempo = 'ding';

});