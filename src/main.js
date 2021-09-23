import {diffDates, diffToHtml} from "./datecalc.js"; // 1
import {formatError} from "./utils.js"; // 2

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    const {firstDate, secondDate} = event.target.elements;
    const firstDateValue = firstDate.value;
    const secondDateValue = secondDate.value;

    if (firstDateValue && secondDateValue) {
        const diff = diffDates(firstDateValue, secondDateValue); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}
