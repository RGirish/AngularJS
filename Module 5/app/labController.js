app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
    	$scope.reset = reset;
    	$scope.submit = submit;
    	$scope.response = {};
    	reset();
    	function reset() {
    		$scope.model = {};
    	}
    	function submit(model) {
    		registration.submit(model).$promise.then(function(response) {
    			reset();
    			$scope.response.token = response.token;
    		}, function(error) {
    			alert('error');
    		});
    	}
    }
]);