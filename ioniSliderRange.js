angular.module('ionicSliderRange', [])

.directive('ionicSliderRange', function($compile) {
      return {
        restrict: 'E',
        scope: {
          ngModelMin: '=',
          ngModelMax: '=',
          ngMin: '=',
          ngMax: '=',
          ngStep: '=',
          ngChangeMin: '&',
          ngChangeMax: '&'
        },
        link: function($scope, $element, $attrs) {
          var min, max, step, $inputMin = angular.element('<input type="range">'),
            $inputMax;
          $scope.ngChangeMin = $scope.ngChangeMin || angular.noop;
          $scope.ngChangeMax = $scope.ngChangeMax || angular.noop;

          if (typeof $scope.ngMin == 'undefined') {
            min = 0;
          } else {
            min = $scope.ngMin;
            $inputMin.attr('min', min);
          }
          if (typeof $scope.ngMax == 'undefined') {
            max = 0;
          } else {
            max = $scope.ngMax;
            $inputMin.attr('max', max);
          }
          if (typeof $scope.ngStep == 'undefined') {
            step = 0;
          } else {
            step = $scope.ngStep;
            $inputMin.attr('step', step);
          }
          $inputMax = $inputMin.clone();
          $inputMin.attr('ng-model', 'ngModelMin');
          $inputMax.attr('ng-model', 'ngModelMax');
          $compile($inputMin)($scope);
          $compile($inputMax)($scope);
          $element.append($inputMin).append($inputMax);
          $scope.ngModelMin = $scope.ngModelMin || min;
          $scope.ngModelMax = $scope.ngModelMax || max;

          $scope.$watch('ngModelMin', function(newVal, oldVal) {
            if (newVal > $scope.ngModelMax) {
              $scope.ngModelMin = oldVal;
            } else {
              $scope.ngChangeMin();
            }
          });

          $scope.$watch('ngModelMax', function(newVal, oldVal) {
            if (newVal < $scope.ngModelMin) {
              $scope.ngModelMax = oldVal;
            } else {
              $scope.ngChangeMax();
            }
          });
        }
      };
    });
