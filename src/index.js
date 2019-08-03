'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourCommand from './modules/ourCommand';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import checkText from './modules/checkText';
import checkPhone from './modules/checkPhone';


//Timer
	countTimer('30 august 2019');
// Menu
	toggleMenu();
//popup
	togglePopUp();
//табы
	tabs();
//слайдер
	slider();
//наша команда
	ourCommand();
//калькулятор
	calc(100);
//send-ajax-form
	sendForm();
	checkText();	
	checkPhone();