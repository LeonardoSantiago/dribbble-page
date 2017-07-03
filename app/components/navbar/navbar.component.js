'use strict'

angular.module('projeto-front-end')
.component('navbar', {
  template: require('./navbar.html'),
  controller: 'navbarCtrl',
  controllerAs: '$ctrl'
})
