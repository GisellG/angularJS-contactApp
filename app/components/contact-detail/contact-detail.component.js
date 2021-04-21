(function() {
    'use strict';

    ContactDetailController.$inject = ['$http', '$routeParams'];

    function ContactDetailController($http, $routeParams) {
        
        /* jshint validthis: true */
        var vm = this;

        $http.get('https://reqres.in/api/users/' + $routeParams.contactId)
        .then(function successCallback(response) {

            vm.contact = response.data.data;

        }, function failedCallback(response) {
            console.error(response);
        });

    }

    angular.
        module('contactDetail').
        component('contactDetail', {
            templateUrl: 'components/contact-detail/contact-detail.template.html',
            controller: ContactDetailController,
            controllerAs: 'vm'
        });
})();