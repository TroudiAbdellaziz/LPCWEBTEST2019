angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var
            //TODO
            
            setPropertiesUrlImpl = function(url){
                //TODO
            //set the url of the service
            $rootScope.url=url;

            },
            loadPropertiesImpl = function(){
                //TODO
            //make an api call to get the properties
                return $http.get($rootScope.url)
                
            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
