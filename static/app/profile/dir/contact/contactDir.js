import {app} from '../../../app.js';
import mainCtrl from '../../../mainCtrl.js';
import profileCtrl from '../../profileCtrl.js';
import contact_template from './template/contact.html';

app.directive('contactDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: contact_template,
		link: function(scope, element, attributes){
		}
	}
})