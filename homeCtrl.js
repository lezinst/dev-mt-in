//angular.module('devMtIn');

angular.module('devMtIn').controller('homeCtrl', function($scope, profileService){
	$scope.myProfile = {
		
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]


	}

	$scope.editing = false;

   profileService.serviceTest();

	$scope.sortOptions = [{
    display: 'Ascending'
  , value: false
  },
  {
    display: 'Descending'
  , value: true
  }
];







});