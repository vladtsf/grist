angular.module('app.controllers')
  .controller 'GristCtrl', ($scope, $location, $resource, $rootScope, $http, lexers, popularLexers) ->
    $scope.lexer = null
    $scope.lexers = lexers
    $scope.popularLexers = popularLexers