import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import skills_template from './template/skills.html';

app.directive('skillsDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: skills_template,
		link: function(scope, element, attributes){
			// scope.npersInfo = 'persInfo';
		}
	}
})