/*global angular */

/**
 * Directive that places focus on the element it is applied to when the
 * expression it binds to evaluates to true
 */
 (function() {
   'use strict';
  angular
    .module('BudgetApp')
  	.directive('posteFocus', postefocus);

    function postefocus($timeout) {
  		return function (scope, elem, attrs) {
  			scope.$watch(attrs.posteFocus, function (newVal) {
  				if (newVal) {
  					$timeout(function () {
  						elem[0].focus();
  					}, 20);
  				}
  			});
  		};
  	}
 }());
