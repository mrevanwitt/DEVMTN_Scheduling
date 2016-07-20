angular.module('calendar')
  .directive('optionsDirective', function(){
    return {
      restrict: 'EA',
      templateUrl: './app/components/options-template/optionsTmpl.html'
    }
  });
