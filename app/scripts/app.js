'use strict';
angular.module('myBlog', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog/list.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog/show.html',
        controller: 'PostCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog/create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog/edit.html',
        controller: 'PostCtrl'
      })
      .otherwise({ redirectTo:'/'});
  });