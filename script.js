const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

let unit = document.getElementById("number-conversion")
let convertBtn = document.getElementById("convert-btn")
let resultOfLengthConversion = document.getElementById("lengthConversionResult")
let resultOfVolumeConversion = document.getElementById("volumeConversionResult")
let resultOfMassConversion = document.getElementById("massConversionResult")

convertBtn.addEventListener("click", function(){
    let elValue = unit.value
    
    resultOfLengthConversion.textContent = ` ${elValue} meters = ${elValue * meterToFeet} feet | ${elValue} feet = ${Math.round(elValue / meterToFeet)} meters  `
    
    resultOfVolumeConversion.textContent = ` ${elValue} liters = ${Math.round(elValue * literToGallon)} gallons| ${elValue} gallons = ${ Math.round(elValue / literToGallon)} liters  `
    
    resultOfMassConversion.textContent = ` ${elValue} kilograms = ${elValue * kiloToPound} pounds | ${elValue} pounds = ${ Math.round(elValue / kiloToPound)} kilograms  `
    
})