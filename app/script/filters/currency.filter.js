(function() {
  'use strict';

  angular
    .module('BudgetApp')
    .filter('eurocurrency', euroCurrency)

    function euroCurrency() {
      return function(input, symbol, place) {

        if(isNaN(input)){
          return input
        }else{

          var symbol = symbol || '$';
          var place = (place === undefined) ? true : place;
          if(place === true){
            return symbol + input;
          }else{
            return input+ ' ' + symbol;
          }
        }
      }
    }

}());
