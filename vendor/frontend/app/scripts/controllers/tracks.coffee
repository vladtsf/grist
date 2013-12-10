# angular.module('app.controllers', [])

angular.module('app.controllers')
.controller 'TracksCtrl', ($scope, $location, $resource, $rootScope) ->
  $scope.tracks = $resource '/api/music/tracks'
  $scope.tracks.get()