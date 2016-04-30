(function () {
    'use strict';
    
    angular.module('ngeoSchemaModule')
        .controller("frame", ["$scope", "frame2", function ($scope, frame2) {
        var vm = this;
        vm.frame = frame2;
    }]);
    
    angular.module('ngeoSchemaModule')
        .factory('frame2', [function () {
        var value = false;  
        return {
            getValue: function () {
                return value;
            },
            toggleSidebar: function () {
                value = !value;
            }
        };
    }]);
})();