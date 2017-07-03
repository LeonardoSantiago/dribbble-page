'use strict'

angular.module('projeto-front-end').controller('ShotCtrl', function (ShotService, $stateParams) {
  var vm = this

  ShotService.getShot($stateParams.shotId).then(function (res) {
    vm.shot = res.data
  }, function () {
    alert('Erro ao buscar Shot')
  })

  vm.likeAShot = function () {
    ShotService.likeAShot(vm.shot.id).then(function () {}, function () {
     alert('Erro ao dar like')
    })
  }
})
