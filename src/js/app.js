import '../css/main.scss';
import '../css/styles.css';
import {isTrue, isFalse, RandomInteger} from './vars';

window.addEventListener('load', loading);
function loading() {
	console.log(isTrue);
	console.log(isFalse);
	console.log('Random Integer', RandomInteger.getRandInteger());
	console.log('Random Range from 1 to 10', RandomInteger.getRandInteger(1, 10));
}