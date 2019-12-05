'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO
        // get the data from the pots service and bind it to the scope 
        PotsService.get().then((res)=>{
            $scope.pots=res.data;
        })
        // the implementation of the function that changes languages
        $scope.changeLocale = function(str){
            localStorage.setItem('lang',str);
            $scope.locale=str;
        }
    }]);


/* to prvent the raw text (uncompiled) from showing right before applying the filters we can simply
 add the directive 'ng-cloak' to the 'h1' tag in the index.html file
 */