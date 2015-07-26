(function() {
  'use strict';

  angular
    .module('BudgetApp')
    .directive('lignedepense', lignedepense);

    function lignedepense() {
      var directive = {
        restrict: 'EA',
        replace: true,
        scope: {
          description: '=',
          prevue : '=',
          reel : '='
        },
        templateUrl: 'script/directiveTest/lignedepense.html',
        link:link,
      }

      return directive;

      function link() {
        // body...
      }
    }
}());
