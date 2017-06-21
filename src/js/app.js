import '../css/main.scss';
import '../css/styles.css';
import {isTrue, isFalse, RandomNumber} from './vars';
import '../dashboard.html';

window.addEventListener('load', loading);
function loading() {
	console.log('jquery selector', $('#main-container').children());
	console.log(isTrue);
	console.log(isFalse);
	console.log('Random Integer', RandomNumber.getRandInteger());
	console.log('Random Range from 1 to 10', RandomNumber.getRandInteger(1, 10));
}