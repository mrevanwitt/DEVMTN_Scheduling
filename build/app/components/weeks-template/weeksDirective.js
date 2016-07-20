angular.module('calendar')
  .directive('weeksDirective', function(){
    return {
      restrict: "A",
      templateUrl: "./app/components/weeks-template/weeksTmpl.html"
    }
  });
