(function () {
    'use strict';

    angular.module('ngeoSchemaModule')
        .controller('toolbar', ['$scope', 'frame2', function ($scope, frame2) {
            var vm = this;
            vm.frame = frame2;
    }]);
})();
