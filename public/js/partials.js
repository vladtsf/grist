angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/index.html', [
'',
'<form ng-controller="GristCtrl" class="b-grist-create-form">',
'  <div class="row">',
'    <select select2-model-watcher ng-options="lex for lex in lexers" ui-select2 ng-model="lexer" placeholder="Guess" class="col-md-3 b-grist-create-form__lexer"></select>',
'    <div class="col-md-9"><span><a href="javascript:void(0);" ng-click="$parent.lexer = null">Guess</a></span><span ng-repeat="lex in popularLexers">&nbsp;|&nbsp;<a href="javascript:void(0);" ng-click="$parent.lexer = lex">{{lex}}</a></span><span class="b-grist-create-form__action-hint">(press Ctrl-J to select from keyboard)</span></div>',
'  </div>',
'  <div class="row">',
'    <div class="col-md-12">',
'      <textarea name="source" class="form-control b-grist-create-form__source"></textarea>',
'    </div>',
'  </div>',
'  <div class="row">',
'    <div class="col-md-3">',
'      <button type="submit" class="btn btn-lg btn-primary">Create</button><span class="b-grist-create-form__action-hint">(or press Ctrl-Enter)</span>',
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
}]);