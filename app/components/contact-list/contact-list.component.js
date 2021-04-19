(function() {
    'use strict';

    angular
        .module('contactApp')
        .component('contactList', {
            templateUrl: 'components/contact-list/contact-list.template.html',
            controller: function ContactListController() {
                this.contacts = [
                    {
                        name: 'Leanne Graham',
                        email: 'Sincere@april.biz'
                      }, {
                        name: 'Ervin Howell',
                        email: 'Shanna@melissa.tv'
                      }, {
                        name: 'Clementine Bauch',
                        email: 'Nathan@yesenia.net'
                      }
                ];
            }
        });
})();