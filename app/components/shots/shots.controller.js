'use strict'

angular.module('projeto-front-end').controller('ShotsCtrl', function (ShotService, $state) {
  var vm = this
  vm.page = 1
  vm.busy = false


  vm.listShots = new Array

  vm.loadMore = function () {

    if (vm.busy) return
    vm.busy = true

    ShotService.listShotsByPage(vm.page).then(function (res) {
      console.log(vm.listShots)
      for(var i = 0; i < res.data.length; i++) {
        vm.listShots.push(res.data[i])
      }
      vm.page ++
      vm.busy = false
    }, function () {
     alert('Erro ao buscar lista de Shots')
   })
 }

  vm.openShot = function (shotId) {
    console.log('Entrei aqui')
    $state.go('shot', {
      shotId: shotId
    })
  }
})
