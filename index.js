
const arrayList = [];
const arrayListString = parseFloat(arrayList)
 
console.log(arrayList)
document.getElementById('selected1').addEventListener('click', function(){

        const selectMsBtn = document.getElementById('messi');
         const selectedMsInnerText = selectMsBtn.innerText
        
        const disableBtn = document.getElementById('selected1')
        // disableBtn.disabled = true;
        // disableBtn.style.backgroundColor = "gray"
        const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedMsInnerText
        
                 container.appendChild(newElements)

                //  arrayList.push(container)
                if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                  
                }
                else{
                    alert ('You can chose only five')
                }
                
                 
})
document.getElementById('selected2').addEventListener('click', function(){

        const selectNyBtn = document.getElementById('neymar');
         const selectedNyInnerText = selectNyBtn.innerText

         const disableBtn = document.getElementById('selected2')
        //  disableBtn.disabled = true;
        //  disableBtn.style.backgroundColor = "gray"

                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedNyInnerText
        
                 

                //  arrayList.push(container)
                 if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                    container.appendChild(newElements)
                }
                else{
                    alert ('You can chose only five')
                }
                 
})
document.getElementById('selected3').addEventListener('click', function(){

            const selectMbBtn = document.getElementById('mb');
            const selectedMbInnerText = selectMbBtn.innerText
            const disableBtn = document.getElementById('selected3')
            // disableBtn.disabled = true;
            // disableBtn.style.backgroundColor = "gray"
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedMbInnerText
        
                 
                //  arrayList.push(container)
                 if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                    container.appendChild(newElements)
                }
                else{
                    alert ('You can chose only five')
                }
                 
})
document.getElementById('selected4').addEventListener('click', function(){

    const selectViBtn = document.getElementById('victor');
     const selectedViInnerText = selectViBtn.innerText
     const disableBtn = document.getElementById('selected4')
    //  disableBtn.disabled = true;
    //  disableBtn.style.backgroundColor = "gray"
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedViInnerText
        
                
                //  arrayList.push(container)
                 if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                    container.appendChild(newElements)
                }
                else{
                    alert ('You can chose only five')
                }
})
document.getElementById('selected5').addEventListener('click', function(){

           const selectRamosBtn = document.getElementById('ramos');
            const selectedRamosInnerText = selectRamosBtn.innerText
            const disableBtn = document.getElementById('selected5')
            // disableBtn.disabled = true;
            // disableBtn.style.backgroundColor = "gray"
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedRamosInnerText
        
                 
                //  arrayList.push(container)
                 if (arrayList.length < 5) {
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                    container.appendChild(newElements)
                }
                else{
                    alert ('You can chose only five')
                }
                 
                
})
document.getElementById('selected6').addEventListener('click', function(){

    const selectRenaBtn = document.getElementById('renato');
    const selectedRenaInnerText = selectRenaBtn.innerText
    const disableBtn = document.getElementById('selected6')
    
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerText = selectedRenaInnerText
        
                
                 
                 if (arrayList.length < 5) {
                    container.appendChild(newElements)
                    arrayList.push(container)
                    disableBtn.disabled = true;
                    disableBtn.style.backgroundColor = "gray"
                  
                }
                else{
                    alert ('You can chose only five')
                }
                 
                
})

function getYourCalculation() {
    const calculateInput = document.getElementById('cal-input')
    const calculateInputValue = calculateInput.value
    const calculateInputValueString = parseFloat(calculateInputValue)
    const calculateInto = arrayList.length * calculateInputValueString
    const calculateIntoString = parseFloat(calculateInto)
   console.log(calculateIntoString)

   const expenses = document.getElementById('expenses')
   const expensesText = expenses.innerText
   expenses.innerText = calculateIntoString
   

}


document .getElementById('calculate-btn').addEventListener('click',function(){

   
   getYourCalculation()

})



