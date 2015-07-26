
(function() {
  'use strict';
    angular
      .module('BudgetApp')
      .directive('moduledepense', moduledepense);

      function moduledepense() {
        var directive = {
          restrict: 'EA',
          replace: true,
          transclude: true,
          templateUrl: '/script/directiveTest/moduledepense.html',
          scope : {
            title : '@',
            data: '='
          },
        //   controller: modulecontroller,
        //   controllerAs: 'vm',
        // bindToController: true,
          link:link
        };

        return directive;

        function link() {

        }
      }

      // modulecontroller.$inject = [ '$scope'];
      //
      // function modulecontroller($scope) {
      //   var  vm = this;
      //   vm.title = $scope.title;
      // }
}());
