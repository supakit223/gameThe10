function cal() {
    const numberArray = [1,2,3,4,5,6,7,8,9]
    const result = getPermutation(numberArray)        
    let number = ""
    let count = 0
    const sum = document.getElementById("sum").value

    const inpObj = document.getElementById("sum")
    if (!inpObj.checkValidity()) {
        document.getElementById("alert").innerHTML = inpObj.validationMessage
        document.getElementById("output1").classList.add("invisible")
    }

    for (let i = 0 ; i < 362880 ; i++) { 
        if(result[i][0]+result[i][1]+result[i][2] == sum && result[i][3]+result[i][4]+result[i][5] == sum && result[i][6]+result[i][7]+result[i][8] == sum
        && result[i][0]+result[i][3]+result[i][6] == sum && result[i][1]+result[i][4]+result[i][7] == sum && result[i][2]+result[i][5]+result[i][8] == sum
        && result[i][0]+result[i][4]+result[i][8] == sum && result[i][2]+result[i][4]+result[i][6] == sum){                 
            // number = number + `<div class="mt-3 d-flex align-content-center justify-content-center">
            //     <input id="1" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="00">
            //     <input id="2" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="01">
            //     <input id="3" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="02">
            // </div>
            // <div class="mt-3 d-flex align-content-center justify-content-center">
            //     <input id="4" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="03">
            //     <input id="5" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="04">
            //     <input id="6" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="05">
            // </div>
            // <div class="mt-3 d-flex align-content-center justify-content-center">
            //     <input id="7" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="06">
            //     <input id="8" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="07">
            //     <input id="9" class="p-1 mx-2 input" type="number" min="1" max="9" placeholder="08">
            // </div>`
            for(let j = 0 ; j < 9 ; j++){
                count++
                number = number + result[i][j] +"     "
                if (count%3 == 0){
                    number = number + "<br>"
                }       
                if (count%9 == 0){
                    number = number + "<br>"
                }                        
            }
            document.getElementById("output1").innerHTML = `มี ${count/9} ชุดคำตอบ ดังนี้`
            document.getElementById("output2").innerHTML = number
        }     
    }
    
    
}

function resetPage() {
    // window.location.reload()
    setTimeout(function(){location.reload()}, 100)
}
function getPermutation(arr) {
    const output = []
    // swap array index A<-->B
    function swapInPlace(arrToSwap,indexA,indexB) {
        const temp = arrToSwap[indexA]
        arrToSwap[indexA] = arrToSwap[indexB]
        arrToSwap[indexB] = temp
    }
    // arrowFunction
    const generate = (n,heapArr) => {
        if (n == 1){
            return output.push(heapArr.slice())            
        }    
        generate(n-1,heapArr)
        for(let i=0 ; i<n-1 ; i++){
            if(n%2 == 0){
                swapInPlace(heapArr,i,n-1)
            }else{
                swapInPlace(heapArr,0,n-1)
            }
            generate(n-1,heapArr)            
        }
    }
    generate(arr.length,arr.slice())
    return output
}




