angular.module('app.controllers')
  .controller 'GristCtrl', ($scope, $location, $resource, $rootScope, $http, lexers, popularLexers, Grist) ->
    $scope.lexer = null
    $scope.lexers = lexers
    $scope.popularLexers = popularLexers
    $scope.grist = null

    #
    # Create a grist
    #
    $scope.create = ( $event ) ->
      $scope.grist = Grist.create
        lexer: $scope.lexer
        source: $scope.source

      false
