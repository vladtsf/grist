angular.module('app.services')
  .service "Grist", ($http) ->

    @id = null

    @create = (attrs) =>
      req = $http.post('/api/1/grist', attrs)

      req.success (res) =>
        @id = res.id
