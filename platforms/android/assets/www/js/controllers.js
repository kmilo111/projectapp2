angular.module('app.controllers', ['app.services', 'ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
      
.controller('ingresoYORegistroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('interaccionesConPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])
   
.controller('productosCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

    productService.item_list.query(function(data){
        	$scope.list = data;
        	//console.log($scope.list);
         });
}])

.controller('productDetailCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {
    
	console.log($stateParams.id);
	localStorage.setItem('idItem', $stateParams.id);
	$scope.data_product = {};
	 
	 productService.detail.get({id: $stateParams.id}, function(_data){
		 console.log(_data);
		 $scope.data_product = _data;
		 
	 });

	 $scope.getDeleteProduct = function () {
		 productService.item_delete.delete({id:localStorage.getItem('idItem')}, function(data){
		   console.log(data.$status);	
		 });
		 $cordovaDialogs.confirm('Confirma eliminar el producto: ' +  $scope.data_product.name,  'Eliminar producto', ['ok','cancel'])
		   .then(function (buttonIndex) {
			   localStorage.setItem('confirm','Opcion seleccionada' + buttonIndex);
		     })
	  }

}])
   

 