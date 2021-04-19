(function() {
    'use strict';

    angular
        .module('contactApp')
        .component('contactList', {
            templateUrl: 'components/contact-list/contact-list.template.html',
            controller: ['$http', function ContactListController($http) {              
              
                /* jshint validthis: true */
                var vm = this;

                vm.orderProp = 'id';

                $http.get('https://jsonplaceholder.typicode.com/users')
                  .then(function successCallback(response) {

                    console.log(response);
                    vm.contacts = response.data;

                  }, function failedCallback(response) {
                    console.error(response);
                  })              

            }],
            controllerAs: 'vm'
        });
})();