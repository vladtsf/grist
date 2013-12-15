angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/index.html', [
'',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'',
'<ul class="nav navbar-nav">',
'  <li ng-class="getClass(\'/\')"><a ng-href="/">Home</a></li>',
'  <li><a ng-href="/">About</a></li>',
'  <li><a ng-href="/">Contact</a></li>',
'</ul>',
'<ul class="nav navbar-nav navbar-right">',
'  <li><a ng-href="/">Default</a></li>',
'  <li><a ng-href="/">Static top</a></li>',
'  <li><a ng-href="/">Fixed top</a></li>',
'</ul>',''].join("\n"));
}]);