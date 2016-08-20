angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.ingresoYORegistro', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingresoYORegistro.html',
        controller: 'ingresoYORegistroCtrl'
      }
    }
  })

  .state('menu.interaccionesConPerfil', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/interaccionesConPerfil.html',
        controller: 'interaccionesConPerfilCtrl'
      }
    }
  })

  .state('menu.productos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productos.html',
        controller: 'productosCtrl'
      }
    }
  })

  .state('menu.productDetail', {
    url: '/page5/:id',
      views: {
        'side-menu21':{
              templateUrl: 'templates/productDetail.html',
              controller: 'productDetailCtrl'
        }
      }
    
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});