 var urlBase = 'DemoPartials/';
        var samplesApp = angular.module('samples', []);

        samplesApp.controller('mainController', function ($scope, $templateCache, $http, $location) {
            $scope.template = '';
            $scope.html = '';
            $scope.pages = [
                { title: 'Data binding basics', url: urlBase + '1. Data binding basics.html' },
                { title: 'Looping with ng-repeat', url: urlBase + '2. Looping with ng-repeat.html' },
                { title: 'Adding a Simple Controller', url: urlBase + '3. Adding a Simple Controller.html' },
                { title: 'Using ng-model and ng-click Directives', url: urlBase + '4. Using ng-model and ng-click Directives.html' },
                { title: 'Filtering and Sorting Data', url: urlBase + '5. Filtering and Sorting Data.html' },
                { title: 'Adding a Module and Controller', url: urlBase + '6. Adding a Module and Controller.html' },
                { title: 'Adding Module Configuration and Routing', url: urlBase + '7. Adding Module Configuration and Routing.html' },
                { title: 'Module, Controller and Factory', url: urlBase + '8. Module-Controller-Factory.html' },
                
            ];
           
            $scope.loadPage = function (page) {
                if (page.href) {
                    document.location = page.href; //Load new page
                }
                $scope.template = page.url;
                $http({ method: 'GET', url: page.url, cache: $templateCache })
                  .success(function (html) {
                      $scope.html = html;
                      $('textarea').text(html); //Had to go with this due to IE
                  })
                  .error(function (html, status) {
                      $scope.html = 'Unable to load code: ' + status;
                  }); 
            }
             $scope.loadPage({ title: 'Data binding basics', url: urlBase + 'Initial page.html' });
        });
        