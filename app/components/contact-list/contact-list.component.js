(function() {
    'use strict';

    ContactListController.$inject = ['$http'];

    function ContactListController($http) {              
              
      /* jshint validthis: true */
      var vm = this;

      vm.orderProp = 'id';

      $http.get('https://reqres.in/api/users')
        .then(function successCallback(response) {

          console.log(response.data.data);
          vm.contacts = response.data.data;

        }, function failedCallback(response) {
          console.error(response);
        })              

    };

    angular
        .module('contactApp')
        .component('contactList', {
            templateUrl: 'components/contact-list/contact-list.template.html',
            controller: ContactListController,
            controllerAs: 'vm'
        });
})();