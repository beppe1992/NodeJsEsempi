angular.module('exampleApp.controllers')

.controller('ExampleController',
		[ '$scope','ExampleService', function($scope,ExampleService) {
			
			$scope.recuperaElementi = function(){
				
				
				 ExampleService.recuperaElementi().then(function(result){
					
					$scope.elementi = result.data;
				
				}) ;
				
				
			}
			
			$scope.recuperaElementoSingolo = function(){
				
				
				 ExampleService.recuperaElementoSingolo($scope.idElemento).then(function(result){
					
					$scope.elementiFiltered = result.data;
				
				}) ;
				
				
			}

} ]);
