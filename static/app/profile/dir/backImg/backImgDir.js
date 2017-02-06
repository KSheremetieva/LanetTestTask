import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import backImg_template from './template/backImg.html';

app.directive('backimgDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: backImg_template,
		link: function(scope, element, attributes){
			scope.backImg = 'backImg';
		}
	}
}) 