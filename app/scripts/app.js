'use strict'

const angular = require('angular')

angular.module('projeto-front-end', ['infinite-scroll', 'ui.bootstrap', 'ui.router'])
.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('shots')

  $locationProvider.html5Mode(true)

  $stateProvider.state('shots', {
    url: '/shots',
    template: require('../components/shots/shots.html'),
    controller: 'ShotsCtrl',
    controllerAs: '$ctrl'
  })
})
