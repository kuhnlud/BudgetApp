(function() {
  'use strict';

  angular
    .module('BudgetApp')
    .controller('postectrl', posteCtrl)

    function posteCtrl() {
      var vm = this;

      vm.poste_name = 'impôt';
      vm.poste_data = [
        {description: 'Revenue', depense_prevu: '600', depense_reel: '600'},
        {description: "taxe d'habitation", depense_prevu: '650', depense_reel: '730'}
      ];

      vm.total = function (prevue, reel) {
        return 'hi';
        //return depense_reel - depense_prevu;
      }


    }

}());
