var app =angular.module("fblogin",[]);
app.controller("logincont",function($scope)
{
	    
	$scope.childvalue = "Welcome to FaceClone";
     $scope.passw = function(value) 
	 {
		if(value.length < 8)
			return false
		else
			return true
	 
	 }
}
);

app.controller("child",function($scope)
{
	$scope.childvalue = "Welcome to FaceBook 18IT056";
});

app.filter('lower', function() {
	return function(uname) {
		
		return angular.lowercase(uname);
		
 }
});
