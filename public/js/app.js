'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'partials', 'ui.select2', 'ui.bootstrap']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider;
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
;angular.module('app.controllers').controller('GristCtrl', function($scope, $location, $resource, $rootScope, $http, lexers, popularLexers, Grist) {
  $scope.lexer = null;
  $scope.lexers = lexers;
  $scope.popularLexers = popularLexers;
  $scope.grist = null;
  return $scope.create = function($event) {
    $scope.grist = Grist.create({
      lexer: $scope.lexer,
      source: $scope.source
    });
    return false;
  };
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
;angular.module('app.services').service("Grist", function($http) {
  var _this = this;
  this.id = null;
  return this.create = function(attrs) {
    var req;
    req = $http.post('/api/1/grist', attrs);
    return req.success(function(res) {
      return _this.id = res.id;
    });
  };
});
;angular.module('app.services').factory("lexers", function() {
  return window.appConfig.lexers;
});
;angular.module('app.services').factory("popularLexers", function() {
  return ["Text only", "Python", "JavaScript", "Ruby", "CSS", "HTML", "Django/Jinja"];
});
;
//# sourceMappingURL=app.js.map