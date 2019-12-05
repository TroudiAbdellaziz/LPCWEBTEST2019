'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO
    // initially change the background of the container to the loading image
    elem[0]['style'].backgroundImage='url("./app/img/loading.svg")';
    // add the gradient 
    elem[0].parentElement.classList.add('shadow');
    // watches for changes in lpcLazyBackground property
    scope.$watch('lpcLazyBackground', function(value) {
        //create an image and wait until the image is fully loaded 
        var image= new Image()
        image.onload = function () {
        // change the background 
        elem[0]['style'].backgroundImage='url("'+value+'")';
      }
        image.src=value;
    });
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
