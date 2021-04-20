(function(){
    'use strict';

    angular
        .module('contactApp')
        .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
              when('/contacts', {
                template: '<contact-list></contact-list>'
              }).
              when('/contacts/:contactId', {
                template: '<contact-detail></contact-detail>'
              }).
              otherwise('/contacts');
          }
      ])

})();