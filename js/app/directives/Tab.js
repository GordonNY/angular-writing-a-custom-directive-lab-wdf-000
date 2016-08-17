function Tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    template: [
          '<div class="tabs__content" ng-if="tab.selected">',
                '<div ng-transclude></div>',
            '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
}

angular
  .module('app')
  .directive('tab', Tab);





// var Tab = {
//   transclude: true,
//   require: {
//     tabsCtrl: '^tabs'
//   },
//   bindings: {
//     label: '@'
//   },
//   controller: function() {
//     this.$onInit = function() {
//       this.tabsCtrl.addTab(this);
//       console.log(this);
//     };
//   },
//   template: [
//           '<div class="tabs__content" ng-show="$ctrl.selected">',
//                 '<div ng-transclude></div>',
//             '</div>'
//     ].join('')
// }

// angular
// 	.module('app')
// 	.component('tab', Tab);





