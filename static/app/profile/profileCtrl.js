// import angular from "angular";
import {app} from '../app.js';
import '../mainCtrl';
import './dir/navBar/navBarDir.js';

 app.controller('profileCtrl', function($scope, $localStorage, $sessionStorage, $filter, $http){
 	$scope.back = () => {
 		$scope.showDir('logout');
 		// console.log('back')
 	}
 	// SCROLL
 	$scope.scroll = (arg) => {
 		$.scrollTo(arg, 500);		
		return false;
 	}
 	// BACKGROUND IMAGES
 	$scope.backImg = [{
 		src: "http://www.urwallpapers.com/download/9171/Skyline/hd_wallpaper_atlanta_skyline_by_colton_rabon-1500x500.jpg/"
 	},
 	{
 		src: "http://2.bp.blogspot.com/--dkUn6lq8gQ/U1hNjA2TEjI/AAAAAAAAFWY/EDbHrOk689Q/s1600/2014-twitter-header-dimensions+(21).jpg"
 	},
 	{
 		src: "http://1.bp.blogspot.com/-gUn39u7j0Mg/U0bkri-L1dI/AAAAAAAAFSE/XWJaY7HN3Ss/s1600/2014-twitter-header-dimensions+(7).jpg"
 	}];
 	
 	$scope.backOpenImg = $localStorage.openUsBackImg || $scope.backImg[0].src;
 	$scope.openImg = (arg) => {
 		$scope.backOpenImg = $scope.backImg[arg].src;
 		$localStorage.openUsBackImg = $scope.backOpenImg;
 		// console.log($scope.backOpenImg)
 	}
 	$scope.story;
 	// SKILLS
 	$scope.addSkill = (arg) => {
 		$scope.skillFlag = true;
 		$localStorage.openUser.skills.push(arg);
 	}
 	$scope.removeSkill = (arg) => {
 		console.log(arg, $localStorage.openUser.skills.length);
 		$localStorage.openUser.skills.splice($localStorage.openUser.skills.indexOf(arg),1);
 	}

 	// EXPERIENCE
 	$scope.addExp = (arg) =>{
 		$scope.expFlag = true;
 		$localStorage.openUser.experience.push(arg);
 		console.log($localStorage.openUser.experience);
 	}
 	$scope.removeExp = (arg) => {
 		$localStorage.openUser.experience.splice($localStorage.openUser.experience.indexOf(arg),1);
 	}
 })