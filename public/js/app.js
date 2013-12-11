'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials', 'ui.select2', 'ui.bootstrap']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/', {
      templateUrl: '/partials/index.html'
    }).otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true);
  }
]);
;angular.module('app.controllers', []);
;angular.module('app.controllers').controller('AppCtrl', [
  '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function(path) {
      return $scope.activeNavId = path || '/';
    });
    return $scope.getClass = function(id) {
      if ($scope.activeNavId.substring(0, id.length) === id) {
        return 'active';
      } else {
        return '';
      }
    };
  }
]);
;angular.module('app.controllers').controller('GristCtrl', function($scope, $location, $resource, $rootScope, $http, lexers, popularLexers) {
  $scope.lexer = null;
  $scope.lexers = lexers;
  return $scope.popularLexers = popularLexers;
});
;angular.module('app.controllers').controller('TracksCtrl', function($scope, $location, $resource, $rootScope) {
  $scope.tracks = $resource('/api/music/tracks');
  return $scope.tracks.get();
});
;angular.module('app.directives', ['app.services']);
;angular.module('app.directives', []).directive('select2ModelWatcher', function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attr, ngModel) {
      var sel;
      sel = element.select2();
      return ngModel.$render = function() {
        sel.val(ngModel.$viewValue);
        return setTimeout(function() {
          return sel.trigger("change");
        });
      };
    }
  };
});
;angular.module('app.filters', []);
;angular.module('app.services', []);
;angular.module('app.services').factory("lexers", function() {
  return window.appConfig.lexers;
});
;angular.module('app.services').factory("popularLexers", function() {
  return ["Text only", "Python", "JavaScript", "Ruby", "CSS", "HTML", "Django/Jinja"];
});
;
//# sourceMappingURL=app.js.map