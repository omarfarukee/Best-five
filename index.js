// // document.getElementsByClassName('selection').addEventListener('click', function(){
// //     console.log('clicked')
// // })
// function getYourSelection(input) {
//     const selectMsBtn = document.getElementById('messi');
//     const selectedMsInnerText = selectMsBtn.innerText
//     console.log(selectedMsInnerText)
// }
// function getYourSelection(input) {
//        const selectNyBtn = document.getElementById('neymar');
//     const selectedNyInnerText = selectNyBtn.innerText
//     console.log(selectedNyInnerText)
// }
 

// //     const selectMbBtn = document.getElementById('mb');
// //     const selectedMbInnerText = selectMbBtn.innerText
// //     console.log(selectedMbInnerText)

// //     const selectViBtn = document.getElementById('victor');
// //     const selectedViInnerText = selectViBtn.innerText
// //     console.log(selectedViInnerText)

// //     const selectRamosBtn = document.getElementById('ramos');
// //     const selectedRamosInnerText = selectRamosBtn.innerText
// //     console.log(selectedRamosInnerText)

// //     const selectRenaBtn = document.getElementById('renato');
// //     const selectedRenaInnerText = selectRenaBtn.innerText
// //     console.log(selectedRenaInnerText)
// // }


document.getElementById('selected1').addEventListener('click', function(){

        const selectMsBtn = document.getElementById('messi');
         const selectedMsInnerText = selectMsBtn.innerText
        console.log(selectedMsInnerText)

        const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedMsInnerText
        
                 container.appendChild(newElements)
        
})
document.getElementById('selected2').addEventListener('click', function(){

        const selectNyBtn = document.getElementById('neymar');
         const selectedNyInnerText = selectNyBtn.innerText

                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedNyInnerText
        
                 container.appendChild(newElements)
                
})
document.getElementById('selected3').addEventListener('click', function(){

          const selectMbBtn = document.getElementById('mb');
            const selectedMbInnerText = selectMbBtn.innerText
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedMbInnerText
        
                 container.appendChild(newElements)
                
})
document.getElementById('selected4').addEventListener('click', function(){

    const selectViBtn = document.getElementById('victor');
     const selectedViInnerText = selectViBtn.innerText
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedViInnerText
        
                 container.appendChild(newElements)
                
})
document.getElementById('selected5').addEventListener('click', function(){

           const selectRamosBtn = document.getElementById('ramos');
            const selectedRamosInnerText = selectRamosBtn.innerText
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedRamosInnerText
        
                 container.appendChild(newElements)
                
})
document.getElementById('selected6').addEventListener('click', function(){

    const selectRenaBtn = document.getElementById('renato');
    const selectedRenaInnerText = selectRenaBtn.innerText
            
                const container=  document.getElementById("player-Container");
                 newElements = document.createElement('li')
                 newElements.innerHTML = selectedRenaInnerText
        
                 container.appendChild(newElements)
                
})