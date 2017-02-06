import {app} from '../../app.js';
import  '../../mainCtrl.js';
import '../profileCtrl.js';
import profile_template from './template/profile.html';

app.directive('profileDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'profileCtrl'),
		template: profile_template,
		link: function(scope, element, attributes){
			// scope.fe = 'feDir works';
		}
	}
})