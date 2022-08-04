'use strict'
const selector=document.getElementById('select-quality')
const option=document.querySelectorAll('.option')
const billInput=document.querySelector('.bill-input')
const btnCalc=document.querySelector('.btn-calc')
const peopleInput=document.querySelector('.people-input')
const tipAmt=document.querySelector('.tip-amt')
const hidden=document.querySelector('.hidden')

function calcTp(bill,person,rate) {
        const calc=(bill/person)*(rate/100)
        return `$${calc.toFixed(2)}`
}


btnCalc.addEventListener('click', function () {
    // console.log(calcTp(billInput.value))
    tipAmt.textContent=calcTp(Number( billInput.value),Number(peopleInput.value),Number(selector.value))
    billInput.value=''
    peopleInput.value=''
    selector.value=''
    
    
}) 