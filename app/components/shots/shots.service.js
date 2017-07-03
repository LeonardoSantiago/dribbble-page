'use strict'

angular.module('projeto-front-end').service('ShotService', function ($http) {
  var endPointUrl = 'https://api.dribbble.com/v1'
  var OAUTH_TOKEN = '28689fae8dff3291f3d24ae561fb2e8b552bb6f30002741c4de36b07c9439c27'

  this.listShots = function () {
    return $http.get(endPointUrl + '/shots?page=1&per_page=20&access_token=' + OAUTH_TOKEN)
  }

  this.getShot = function (shotId) {
    return $http.get(endPointUrl + '/shots/' + shotId + '?access_token=' + OAUTH_TOKEN)
  }

  this.likeAShot = function (shotId) {
    return $http.get(endPointUrl + '/shots/' + shotId + '/like?access_token=' + OAUTH_TOKEN)
  }

  this.listShotsByPage = function (page) {
    return $http.get(endPointUrl + '/shots?page=' + page + '&per_page=20&access_token=' + OAUTH_TOKEN)
  }
})
