import angular from 'angular';
import homecontroller from './controllers/home.controller'
import logincontroller from './controllers/login.controller'
import registercontroller from './controllers/register.controller'
import addtask from './controllers/addtask.controller'
import headercontroller from './controllers/header.controller'
import fetchdata from './services/fetchdata'

let app = angular.module('angular_demo', ['ui.router', 'ngStorage']);
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.when('/', 'home');

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider.state('home', {
        url: '/home',
        template: '<home></home>',
    })
        .state('login', {
            url: '/login',
            template: '<login></login>',
        })
        .state('register', {
            url: '/register',
            template: '<register> </register>'
        })
        .state('displaytodo', {
            url: 'displaytodo',
            template: '<display-todo></display-todo>'
        })
        .state('addtask', {
            url: 'addtask',
            template: '<add-task></add-task>'
        })

});

app.factory('fetchdata', fetchdata);

app.component('headerMain', {
    templateUrl: './components/Header.html',
    controller: headercontroller,
    controllerAs: 'header',
    bindings: {
        description: '@'
    },
})
    .component('footerCustom', {
        template: '<footer>' +
        '<ng-transclude class="d-flex justify-content-center"></ng-transclude>' +
        '</footer>',
        transclude: true
    })
    .component('home', {
        templateUrl: './components/Home.html',
        controller: homecontroller,
        controllerAs: 'home'
    })
    .component('login', {
        templateUrl: './components/login.html',
        controller: logincontroller,
        controllerAs: 'vm'
    })
    .component('register', {
        templateUrl: './components/Register.html',
        controller: registercontroller,
        controllerAs: 'vm'
    })
    .component('displayTodo', {
        templateUrl: './components/Display.html',
        controller: addtask,
        controllerAs: 'vm'
    })
    .component('addTask', {
        templateUrl: './components/AddTask.html',
        controller: addtask,
        controllerAs: 'vm'
    });

