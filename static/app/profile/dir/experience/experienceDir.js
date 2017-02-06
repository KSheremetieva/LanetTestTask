import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import experiense_template from './template/experience.html';

app.directive('experienseDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: experiense_template,
		link: function(scope, element, attributes){
			scope.experiense = 'experiense';
		}
	}
})