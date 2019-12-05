'use strict';

angular.module('LpcWebTest2018')
    .run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO
        // set the url of the properties
        LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL);

    }]);
