//angular.module('devMtIn');

angular.module('devMtIn').controller('homeCtrl', function($scope, profileService) {
    //$scope.myProfile = profileService.checkForProfile();

    $scope.checkForProfile = function() {
        var profileId = JSON.parse(localStorage.getItem('profileId'));

        if (profileId) {
            profileService.checkForProfile(profileId.profileId)
                .then(function(profile) {
                    $scope.myProfile = profile.data;
                })
                .catch(function(err) {
                    console.error(err);
                });
        }
    }

    $scope.checkForProfile();







    $scope.editing = false;

    profileService.serviceTest();

    $scope.sortOptions = [{
        display: 'Ascending',
        value: false
    }, {
        display: 'Descending',
        value: true
    }];


    $scope.saveProfile = function(profile) {
        profileService.saveProfile(profile);
        $scope.editing = false;
    }

    $scope.deleteProfile = function() {
        profileService.deleteProfile()
            .then(function(deletedProfile) {
                localStorage.removeItem('profileId');
                $scope.myProfile = {};
            })
            .catch(function(err) {
                console.error(err);
            });
    }








});