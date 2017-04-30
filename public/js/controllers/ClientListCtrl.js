angular.module('app').controller('ClientListCtrl', function($scope, $http, $location) {

    $scope.title = "List Clients";

    $http.get('/api/clients')
	.then(function(response) {
			
		 $scope.clients = response.data;
    })
	
    $scope.addclient = function() {

		console.log('DEBUG: ClientListCtrl: addclient()');
        $location.path('/clients/add');		
    };
	
    $scope.sortKey = "-_id";
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    $scope.view = function(id) {
        $location.path('/clients/view/' + id);
    };
});