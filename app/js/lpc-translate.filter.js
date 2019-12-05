'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate', ['LpcTranslateService', '$rootScope', function (LpcTranslateService, $rootScope) {
        //TODO
        // get the properties from the service and add it to the rootScope
        LpcTranslateService.loadProperties().then((res) => {
            $rootScope.localeData = res.data;
        });
        // get the stored data in case the use has previously used the app or simply get fr as a default option
        $rootScope.locale = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'fr';
        var filter = function (key, locale) {
            //TODO
            // check if the language parameters are already initiated and return the corresponding translation
            if ($rootScope.localeData && locale) {
                return $rootScope.localeData[locale][key];
            }
            
            else return ' '

        }
        //TODO
        /* used to update the filter at any digest, or else the changes
        of the locale variable wouldn't be taken into consideration after the rendering of the view
        
        */
        filter.$stateful = true
        return filter;
    }]);
