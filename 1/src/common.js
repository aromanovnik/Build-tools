import {switcher} from './switcher.js';
import {handleCalcDates} from "./calc.js";
import {timer} from "./timer.js";

// Switcher
switcher.init();

document.getElementById("datecalc")?.addEventListener("submit", handleCalcDates);

// Timer
document.querySelector('#timerStart')?.addEventListener('click', (event) => {
    event.preventDefault();
    timer.start();
});
document.querySelector('#timerStop')?.addEventListener('click', (event) => {
    event.preventDefault();
    timer.stop()
});
