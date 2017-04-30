angular.module('app').controller('EmpListCtrl', function($scope, $http, $location) {

    $scope.title = "List Employees";

    $http.get('/api/emps')
	.then(function(response) {
		 
		 $scope.emps = response.data;
    })
	
    $scope.addemp = function() {

		console.log('DEBUG: EmpListCtrl: addemp()');
        $location.path('/emps/add');		
    };
	
    $scope.sortKey = "-_id";
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    $scope.view = function(id) {
        $location.path('/emps/view/' + id);
    };
});