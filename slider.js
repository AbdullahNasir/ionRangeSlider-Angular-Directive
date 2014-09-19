/**
 * Created by Abdullah on 9/19/14.
 */

var app = angular.module('ionSlider',['ngRoute']);


app.directive('ionslider',function(){
    return{
        restrict:'E',
        scope:{min:'@',
            max:'@',
            type:'@',
            prefix:'@',
            maxPostfix:'@',
            prettify:'@',
            hasGrid:'@',
            gridMargin:'@',
            postfix:'@',
            step:'@',
            hideMinMax:'@',
            hideFromTo:'@',
            onChange:'='

        },
        template:'<div></div>',
        replace:true,
        controller:function($rootScope,$scope,$element){
            (function init(){
                $($element).ionRangeSlider({
                    min: $scope.min,
                    max: $scope.max,
                    type: $scope.type,
                    prefix: $scope.prefix,
                    maxPostfix: $scope.maxPostfix,
                    prettify: $scope.prettify,
                    hasGrid: $scope.hasGrid,
                    gridMargin: $scope.gridMargin,
                    postfix:$scope.postfix,
                    step:$scope.step,
                    hideMinMax:$scope.hideMinMax,
                    hideFromTo:$scope.hideFromTo,
                    onChange:$scope.onChange
                });
            })();
        }

    }
});