(function() {
  'use strict';

  angular
    .module('BudgetApp')
    .directive('cancelEscape', cancelEdit)

  function cancelEdit() {
    return function(scope, elem, attr){
      var ESCAPE_KEYCODE = 27;
      elem.bind('keydown', function(event){
        if(event.keyCode === ESCAPE_KEYCODE){
          scope.$apply(attr.cancelEscape);
        }
      });

      scope.$on('$destroy', function() {
        elem.unbind('keydown');
      });
    }
  }

}());
