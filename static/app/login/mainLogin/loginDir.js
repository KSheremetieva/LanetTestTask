import {app} from '../../app.js';
import  '../../mainCtrl.js';
import '../loginCtrl.js';
import login_template from './template/login.html';

app.directive('loginDir', function(){
	return{
		restrict: 'E',
		replase: false,
		controller: ('mainCtrl', 'loginCtrl'),
		template: login_template,
		link: function(scope, element, attributes){
			// scope.adminDir = 'adminDir work';
		}
	}
});