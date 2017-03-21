app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Pizza Builder',
						availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
						toppings: [] 
					};
		$scope.hideSuccess = function() {
			$scope.model.success = null;
		}
		$scope.addTopping = function (topping) {
			if($scope.model.toppings.includes(topping)) {
				alert("Already included " + topping);
			} else {
				$scope.model.toppings.push(topping);
				$scope.model.search = null;
				$scope.model.success = true;
			}
		}
    }
]);