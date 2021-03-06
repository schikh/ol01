// (function () {
//     'use strict';

//     angular.module('ngeoSchemaModule')
//         .controller("frame", ["$scope", "frame2", function ($scope, frame2) {
//         var vm = this;
//         vm.frame = frame2;
//     }]);

//     angular.module('ngeoSchemaModule')
//         .factory('frame2', [function () {
//         var activeSidebarId = null;
//         var value = false;  
//         return {
//             sidebarActivated: function () {
//                 return activeSidebarId != null;
//             },
//             sidebarActive: function (sidebarId) {
//                 return sidebarId == activeSidebarId;
//             },
//             toggleSidebar: function (sidebarId) {
//                 if (sidebarId == activeSidebarId)
//                 {
//                     activeSidebarId = null;
//                 }
//                 else
//                 {
//                     activeSidebarId = sidebarId;
//                 }
//             }
//         };
//     }]);
// })();


(function () {
    'use strict';

    // angular.module('ngeoSchemaModule')
    //     .controller('frame', function ($scope) {
    //     });

    angular.module('ngeoSchemaModule')
        .directive('swTabstrip', function () {
            return {
                restrict: 'E',
                transclude: {
                    'map': 'swTabstripMap',
                    'sidebar': 'swTabstripSidebar'
                },
                scope: {},
                templateUrl: 'swTabstrip.html',
                controller: function ($scope) {
                    $scope.panes = [];
                    $scope.selectedPane = null;
                    $scope.anyPaneSelected = function () {
                        return $scope.selectedPane != null;
                    }
                    $scope.toggle = function (pane) {
                        if ($scope.selectedPane == pane) {
                            pane.selected = false;
                            $scope.selectedPane = null;
                        }
                        else {
                            if ($scope.selectedPane != null) {
                                $scope.selectedPane.selected = false;
                            }
                            pane.selected = true;
                            $scope.selectedPane = pane;
                        }
                    }
                    this.add = function (pane) {
                        pane.selected = false;
                        $scope.panes.push(pane);
                    }
                }
            }
        });

    angular.module('ngeoSchemaModule')
        .directive('swPane', function () {
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    title: '@'
                },
                templateUrl: 'swPane.html',
                require: '^swTabstrip',
                link: function (scope, el, attrs, tabstripCtrl) {
                    tabstripCtrl.add(scope);
                }
            }
        });



    angular.module('ngeoSchemaModule')
        .directive('swToolbar', function () {
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                templateUrl: 'swToolbar.html',
                controller: function ($scope) {
                    $scope.toolbarButtons = [];
                    $scope.selectedToolbarButton = null;
                    $scope.anyToolbarButtonSelected = function () {
                        return $scope.selectedToolbarButton != null;
                    }
                    $scope.toggle = function (toolbarButton) {
                        if ($scope.selectedToolbarButton == toolbarButton) {
                            toolbarButton.selected = false;
                            $scope.selectedToolbarButton = null;
                        }
                        else {
                            if ($scope.selectedToolbarButton != null) {
                                $scope.selectedToolbarButton.selected = false;
                            }
                            toolbarButton.selected = true;
                            $scope.selectedToolbarButton = toolbarButton;
                        }
                    }
                    this.add = function (toolbarButton) {
                        toolbarButton.selected = false;
                        $scope.toolbarButtons.push(toolbarButton);
                    }
                }
            }
        });

    angular.module('ngeoSchemaModule')
        .directive('swToolbarButton', function () {
            return {
                restrict: 'E',
                template: '',
                scope: {
                    title: '@'
                },
                require: '^swToolbar',
                link: function (scope, el, attrs, toolbarCtrl) {
                    toolbarCtrl.add(scope);
                }
            }
        });


})();