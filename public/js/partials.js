angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/index.html', [
'',
'<form class="b-grist-create-form">',
'  <div class="row">',
'    <select name="lexer" ui-select2="{ allowClear: true}" ng-model="select2" placeholder="Guess" class="col-md-3 b-grist-create-form__lexer">',
'      <option></option>',
'      <option value="JavaScript">JavaScript</option>',
'      <option value="CoffeeScript">CoffeeScript</option>',
'      <option value="Ruby">Ruby</option>',
'      <option value="PHP">PHP</option>',
'      <option value="C#">C#</option>',
'    </select>',
'    <div class="col-md-9"> Guess | Text | Python | JavaScript | Ruby | CSS | HTML | Django/Jinja (press Ctrl-J to select from keyboard)</div>',
'  </div>',
'  <div class="row">',
'    <div class="col-md-12">',
'      <textarea name="source" class="form-control b-grist-create-form__source"></textarea>',
'    </div>',
'  </div>',
'  <div class="row">',
'    <div class="col-md-3">',
'      <button type="submit" class="btn btn-lg btn-primary">Create</button>(or press Ctrl-Enter)',
'    </div>',
'  </div>',
'</form>',''].join("\n"));
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
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial1.html', [
'',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial2.html', [
'',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/todo.html', [
'',''].join("\n"));
}]);