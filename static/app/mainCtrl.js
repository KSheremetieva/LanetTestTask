import {app} from './app.js';
import './login/loginCtrl.js';
import './profile/profileCtrl.js';

app.controller('mainCtrl', function($scope, $localStorage, $sessionStorage, $filter, $http){
// GET JSON
	$scope.getData = () => {
		$http({
			method: 'GET',
			url: './users.json',
		}).then(
			function mySuccess(response){
				$localStorage.users = response.data.info;
				// console.log($localStorage.users)
			},
			function myError(response){
				// console.log(response.statusText)
			}
		)

	// LOCALsTORAGE USER DATA
 		$scope.reload = () => {
	 			$localStorage.openD = 'profile';
	 			$scope.openUs = $localStorage.openUser || false;
	 			// console.log('reopen', $scope.openUs)
 		}
	};

// CHANGE DIR
 	$scope.openDir = $localStorage.openD || 'login';
 	$scope.showDir = (arg, mail, pass) => {
 		// first login
 		if(($scope.openDir == 'login') && ((mail != undefined) && (pass != undefined))){
 			// console.log('1');
 			for(let i = 0; i<$localStorage.users.length; i++){
 				if(($localStorage.users[i].email == mail) && ($localStorage.users[i].pass == pass)){
 					$localStorage.openUser = $localStorage.users[i];
 					$scope.openDir = 'profile';
 					$localStorage.openD = 'profile';
 					$scope.openUs = $localStorage.openUser || false;

 				}else{
 					console.info('check mail or pass')
 				}
 			}
 		}
 	// logout
 		if(arg == 'logout'){
 			$scope.openDir = 'login';
 			$localStorage.openD = 'login';
 		}
 	};
 });
