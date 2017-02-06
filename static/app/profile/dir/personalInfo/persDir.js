import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import persInfo_template from './template/persInfo.html';

app.directive('persinfoDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: persInfo_template,
		link: function(scope, element, attributes){
			// scope.npersInfo = 'persInfo';
		}
	}
})