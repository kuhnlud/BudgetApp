(function() {
  'use strict';

  angular
    .module('BudgetApp')
    .controller('postectrl', posteCtrl)

    function posteCtrl() {
      var vm = this;

      vm.poste_name = 'impôt';
      vm.poste_data = [
        {description: 'Revenue', depense_prevu: 600, depense_reel: 600},
        {description: "taxe d'habitation", depense_prevu: 650, depense_reel: 680}
      ];


      vm.depense = function(description_poste) {
          var total;
          angular.forEach(vm.poste_data, function(value, key) {
            if(value.description === description_poste){
              total = value.depense_reel - value.depense_prevu;
            }
          });

          return total;
      };

      vm.total_depense_prevu = function() {
        var total_prevu = 0;
        angular.forEach(vm.poste_data, function(value, key){
          //console.log(value.depense_prevu);
          total_prevu +=  value.depense_prevu;
        });
        return total_prevu;
      };

      vm.total_depense_reel = function() {
        var total_prevu = 0;
        angular.forEach(vm.poste_data, function(value, key){
          total_prevu +=  value.depense_reel;
        });
        return total_prevu;
      };

      vm.total_difference = function() {
        return vm.total_depense_reel() - vm.total_depense_prevu();
      }
      
    }

}());
