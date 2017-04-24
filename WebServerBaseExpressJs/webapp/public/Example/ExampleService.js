angular.module('exampleApp.services')

.service('ExampleService', ['$http', function($http) {


		
		this.recuperaElementi = function (){
			return $http.get('services/elementi');
		}
		
		this.recuperaElementoSingolo = function (idElemento){
			return $http.get('services/elementi/elemento/'+idElemento);
		}


}]);
