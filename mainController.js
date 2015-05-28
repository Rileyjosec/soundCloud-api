var app = angular.module('sounder')

app.controller('mainController', function($sce, $scope, soundService) {
	$scope.getUser = function () {
		soundService.getUser( $scope.searchText)
		.then(function (data) {
		$scope.userData = data.data;
		console.log($scope.searchText);
		})	
	};
	$scope.play = function (track_url) {
		console.log(track_url);
	 SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
	}
//	$scope.getUser();
})