(function(){
    'use strict';

    angular
        .module('contactApp')
        .config(['$stateProvider',
        function ($stateProvider) {
          var helloState = {
              name: 'hello',
              url: '/hello',
              template: '<h3>Hello world!</h3>'
          }

          var aboutState = {
              name: 'about',
              url: '/about',
              template: '<h3>About</h3>'
          }

          $stateProvider.state(helloState);
          $stateProvider.state(aboutState);
        }
      ])

})();