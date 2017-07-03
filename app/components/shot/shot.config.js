'use strict'

angular.module('projeto-front-end').config(function ($stateProvider) {
  $stateProvider.state('shot', {
    url: '/shot/:shotId',
    template: require('./shot.html'),
    controller: 'ShotCtrl',
    controllerAs: '$ctrl',
    params: {
      shotId: null
    }
  })
})
