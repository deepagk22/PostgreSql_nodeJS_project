 var Redux_app = angular.module('Redux_app', []);

            Redux_app.factory('ReduxFactory', function($http) 
            {
                var factory = {};
                var people = [];
                factory.getRedux = function(callback) {
                // Where do we get access to $http?
                $http.get('/redux').success(function(output) {
              
                callback(output);
                }) 
                }
                // note the use of callbacks!
                factory.addRedux = function(info, callback) {
                $http.post('/create', info).success(function(output) {
               
                callback(output);
                }) 
                }
                factory.removeRedux=function(people,callback){
                     $http.post('/destroy', people).success(function(output) {
               
                callback(output);
                }) 
                }
                return factory;
                });
                // Now lets create a controller with some hardcoded data!
                Redux_app.controller('ReduxController', function($scope, ReduxFactory) 
                {

                    ReduxFactory.getRedux(function(data) 
                    {
                        $scope.people = data;
                    });

                    $scope.addRedux = function() 
                    {
                    // note the use of callbacks here
                        ReduxFactory.addRedux($scope.new_redux, function() 
                        {
                          ReduxFactory.getRedux(function(data) 
                          {
                            $scope.people = data;
                          });
                          $scope.new_redux = {};
                        });
                    }

                    $scope.removeRedux = function(person) 
                    {
                    // note the use of callbacks here
                        ReduxFactory.removeRedux(person, function() 
                        {
                          ReduxFactory.getRedux(function(data) 
                          {
                            $scope.people = data;
                          });
                        });
                    }
                })