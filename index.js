
const arrayList = [];
const arrayListString = parseFloat(arrayList)
// ------------------<<<<<<<Common function For Selection button >>>>>>>>>>>----------------------------------
function getYourBest(input, element) {
    const selectMsBtn = document.getElementById(input);
    const selectedMsInnerText = selectMsBtn.innerText
        
         const disableBtn = document.getElementById(element)
         const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedMsInnerText
                if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                    container.appendChild(newElements)
                  }
                else{
                    alert ('You can chose only five')
                }
}

document.getElementById('selected1').addEventListener('click',function(){
    getYourBest('messi', 'selected1')
})
document.getElementById('selected2').addEventListener('click',function(){
    getYourBest('neymar', 'selected2')
})
document.getElementById('selected3').addEventListener('click',function(){
    getYourBest('mb', 'selected3')
})
document.getElementById('selected4').addEventListener('click',function(){
    getYourBest('victor', 'selected4')
})
document.getElementById('selected5').addEventListener('click',function(){
    getYourBest('ramos', 'selected5')
})
document.getElementById('selected6').addEventListener('click',function(){
    getYourBest('renato', 'selected6')
})
// ------------------<<<<<<<Common function For Selection button end>>>>>>>>>>>----------------------------------

// ----------------<<<<<<<<<calculation start >>>>>>>>>------------------------------------------------------

function getYourCalculation() {
    const calculateInput = document.getElementById('cal-input')
    const calculateInputValue = calculateInput.value
    const calculateInputValueString = parseFloat(calculateInputValue)
    console.log(calculateInputValueString)
    console.log(typeof(calculateInputValueString))
    const calculateInto = arrayList.length * calculateInputValueString
    const calculateIntoString = parseFloat(calculateInto)

   const expenses = document.getElementById('expenses')
   const expensesText = expenses.innerText
   expenses.innerText = calculateIntoString
   if (isNaN(calculateInputValueString)) {

    alert ('please enter a valid input')
    calculateInput.value = '';
    // expenses.innerText = 000;
}
if(isNaN(expenses.innerText)){
    return expenses.innerText = 000;
}
}

function getYourGrandTotal(){

    const manager = document.getElementById('manager-input')
    const managerValue = manager.value
    const managerValueString = parseFloat(managerValue)

    const coach = document.getElementById('coach-input');
    const coachValue = coach.value
    const coachValueString = parseFloat(coachValue)
    const totalCalculation = managerValueString + coachValueString 
    console.log(totalCalculation)
    if (isNaN(managerValueString) || isNaN(coachValueString)) {
        alert ('please enter a valid input and Full-fill the input')
        // manager.value = ''
        // coach.value = ''
    }
}
function getYourGrandCalculationTotal(){

    const expensesPlus = document.getElementById('expenses')
    const expensesPlusValue = expensesPlus.innerText
    const expensesPlusValueString = parseFloat(expensesPlusValue)

   const manager = document.getElementById('manager-input')
   const managerValue = manager.value
   const managerValueString = parseFloat(managerValue)

   const coach = document.getElementById('coach-input');
   const coachValue = coach.value
   const coachValueString = parseFloat(coachValue)

   const finalTotal = document.getElementById('grand-total')
   const finalTotalCalculate = expensesPlusValueString + managerValueString + coachValueString
   finalTotal.innerText = finalTotalCalculate
  
if (isNaN(finalTotal.innerText)) {
    return finalTotal.innerText = 000;
}
}
document .getElementById('calculate-btn').addEventListener('click',function(){
     getYourCalculation()
})
document.getElementById('total').addEventListener('click', function(){
     getYourGrandTotal()
     getYourGrandCalculationTotal()
})
// ----------------<<<<<<<<<calculation start >>>>>>>>>------------------------------------------------------


