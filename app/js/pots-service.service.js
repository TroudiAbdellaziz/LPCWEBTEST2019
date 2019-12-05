'use strict';

angular.module('LpcWebTest2018')
    .service('PotsService',['$http','RESOURCES',function($http,RESOURCES){
        var getImpl = function(){
            //TODO
            //make an api call to get the pots
            return $http.get(RESOURCES.GET_POTS_URL)
        }
        
        return {
            get : getImpl
        }
    }]);
