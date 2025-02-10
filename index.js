'use strict';
/**
 * Add your functions here...
 */
function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button = document.querySelector('#button0');
    button.addEventListener('click', targetTextToConsole);
}


function lovelyParaAttacher() {
    const lovelyPara = document.querySelector('#thisisalovelyparagraph');
    lovelyPara.addEventListener('click', lovelyToggle);
}


function lovelyButtonAttacher() {
    const button = document.querySelector('#button1');
    button.addEventListener('click', lovelyToggle);
}


function concatAttacher() {
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');
    const out1 = document.querySelector('#out1');

    function theConcatenator() {
        out1.textContent = in1.value + in2.value;
    }

    in1.addEventListener('change', theConcatenator);
    in2.addEventListener('change', theConcatenator);
}


function snitchAttacher() {
    const mousewatcher = document.querySelector('#mousewatcher');

    mousewatcher.addEventListener('mouseover', snitchUpdater);
    mousewatcher.addEventListener('mouseout', snitchUpdater);
}


function reportUpdater(event) {
    const report = document.querySelector('#report');
    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function reportAttacher() {
    const mousereporter = document.querySelector('#mousereporter');
    mousereporter.addEventListener('mousemove', reportUpdater);
}


function idValidationAttacher() {
    const newid = document.querySelector('#newid');

    newid.addEventListener('input', function(userInput) {
        if (userInput.target.value.includes(' ')) {
            userInput.target.classList.add('invalid');
        }
        else {
            userInput.target.classList.remove('invalid')
        }
    })
}