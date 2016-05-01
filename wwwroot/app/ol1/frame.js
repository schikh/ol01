(function () {
    'use strict';
    
    angular.module('ngeoSchemaModule')
        .controller("frame", ["$scope", "frame2", function ($scope, frame2) {
        var vm = this;
        vm.frame = frame2;
    }]);
    
    angular.module('ngeoSchemaModule')
        .factory('frame2', [function () {
        var activeSidebarId = null;
        var value = false;  
        return {
            sidebarActivated: function () {
                return activeSidebarId != null;
            },
            sidebarActive: function (sidebarId) {
                return sidebarId == activeSidebarId;
            },
            toggleSidebar: function (sidebarId) {
                if (sidebarId == activeSidebarId)
                {
                    activeSidebarId = null;
                }
                else
                {
                    activeSidebarId = sidebarId;
                }
            }
        };
    }]);
})();