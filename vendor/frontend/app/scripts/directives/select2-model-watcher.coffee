angular.module('app.directives', [])
  .directive 'select2ModelWatcher', ->
    restrict:'A',
    require: '?ngModel',
    link: (scope, element, attr, ngModel) ->
      sel = element.select2()

      ngModel.$render = ->
        sel.val ngModel.$viewValue
        setTimeout -> sel.trigger "change"
