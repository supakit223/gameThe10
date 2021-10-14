function cal() {
    const numberArray = [1,2,3,4,5,6,7,8,9,10]
    const result = getPermutation(numberArray)        
    let number = ""
    let count = 0
    const sum = document.getElementById("sum").value        
    for (let i = 0 ; i < 3628800 ; i++) { 
        if(result[i][0]+result[i][1]+result[i][2] == sum && result[i][7]+result[i][8]+result[i][9] == sum 
        && result[i][0]+result[i][3]+result[i][5]+result[i][7] == sum && result[i][2]+result[i][4]+result[i][6]+result[i][9] == sum){
            count++
            number = number + 
            `
            <div class="d-flex justify-content-center align-content-center">
                <label class="groupResult">ชุดที่ ${count}</label>
            </div>
            <div class="mt-3 d-flex align-content-center justify-content-center">
                <input id="1" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][0]}>
                <input id="2" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][1]}>
                <input id="3" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][2]}>
            </div>           
            <div class="mt-3 d-flex align-content-center justify-content-center">
                <input id="4" class="p-1 mx-5 input" type="number" min="1" max="10" value=${result[i][3]}>
                <label for="">.</label>
                <input id="5" class="p-1 mx-5 input" type="number" min="1" max="10" value=${result[i][4]}>                    
            </div>           
            <div class="mt-3 d-flex align-content-center justify-content-center">
                <input id="6" class="p-1 mx-5 input" type="number" min="1" max="10" value=${result[i][5]}>
                <label for="">.</label>
                <input id="7" class="p-1 mx-5 input" type="number" min="1" max="10" value=${result[i][6]}>                    
            </div>           
            <div class="mt-3 d-flex align-content-center justify-content-center">
                <input id="8" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][7]}>
                <input id="9" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][8]}>
                <input id="10" class="p-1 mx-2 input" type="number" min="1" max="10" value=${result[i][9]}>
            </div><br>          
            `                       
        }           
    }
    const inpObj = document.getElementById("sum")
    if (!inpObj.checkValidity()) {
        document.getElementById("alert").classList.remove("invisible")
        document.getElementById("alert").classList.add("visible")
        
        document.getElementById("output1").classList.remove("visible")
        document.getElementById("output1").classList.add("invisible")
        document.getElementById("output2").classList.remove("visible")
        document.getElementById("output2").classList.add("invisible")

        document.getElementById("alert").innerHTML = inpObj.validationMessage        
    }else if(count == 0) {           
        document.getElementById("output1").classList.remove("invisible")
        document.getElementById("output1").classList.add("visible")
        document.getElementById("output2").classList.remove("visible")
        document.getElementById("output2").classList.add("invisible")
        document.getElementById("alert").classList.remove("visible")
        document.getElementById("alert").classList.add("invisible")

        document.getElementById("output1").innerHTML = `ไม่มีชุดคำตอบที่สอดคล้อง`       
    }else{
        document.getElementById("output1").classList.remove("invisible")
        document.getElementById("output1").classList.add("visible")
        document.getElementById("output2").classList.remove("invisible")
        document.getElementById("output2").classList.add("visible")
        document.getElementById("alert").classList.remove("visible")
        document.getElementById("alert").classList.add("invisible")

        document.getElementById("output1").innerHTML = `มี ${count} ชุดคำตอบ ดังนี้`
        document.getElementById("output2").innerHTML = number
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




