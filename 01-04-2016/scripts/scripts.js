var myApp=angular.module("myModule",[]);

	
myApp.controller("myController",function($scope){

			$scope.message="angular training";
			$scope.item2="";
			$scope.result="";
			$scope.fn_Getsum=function()
			{
				$scope.result=DemoService.sum($scope.item1,$scope.item2);
				
			};
			$scope.fn_GetMultiply=function()
			{
				$scope.result=DemoService.multiply($scope.item1,$scope.item2);
			};

});	
	