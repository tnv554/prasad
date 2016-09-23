

var obj = angular.module('myApp',[]);

	 //math controller
obj.controller('mathController', function ($scope, DemoService) 
			{
				
			$scope.item1="";
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
  obj.controller('mathCtrl',function($scope){
	  
		
  });	