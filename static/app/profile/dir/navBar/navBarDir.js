import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import navBar_template from './template/navBar.html';

app.directive('navbarDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: navBar_template,
		link: function(scope, element, attributes){
			scope.navBar = 'navBar';
		}
	}
})