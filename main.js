let passLength = document.getElementById("num")
let output = document.querySelector(".output p")
let upperLetter = document.getElementById("c1")
let lowerLetter = document.getElementById("c2")
let number = document.getElementById("c3")
let symbole = document.getElementById("c4")
let generate = document.getElementById("generate")
let clipboard = document.querySelector(".output i")
let inp = document.querySelectorAll("form div input[type='checkbox']")
console.log(inp)

// Create Array Of Alphabet

let lettersUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
let lettersLower = Array.from("abcdefghijklmnopqrstuvwxyz")
let numberArray = [0,1,2,3,4,5,6,7,8,9];
let symboleArray = ["&","(","-","_",")","@","|","#","{","]","}","["]
let type = [lettersUpper,lettersLower,numberArray,symboleArray]

//------------------------//
// Generate Password
generate.addEventListener("click",generatePassword);
//------------------------//
// Copy Value
clipboard.addEventListener("click",copyText)
//------------------------//


// Function For Generate Password
function generatePassword(){
    let pass = "";
    /* First Method For Getting Password
        console.time("function 1")
        let i=1
        while(i<=Number(passLength.value)){
                inp.forEach((inpt,index)=>{
                    if(inpt.checked){
                        pass += random(type[index])
                    }
                })
                i++;
        }
        console.timeEnd("function 1")
    */
    console.time("function 1")
    
    if(Number(passLength.value) < 4 || Number(passLength.value) > 20){
        alert("Must Be Password Length Min 4 And Max 20")
    }else{
        // Get Just Type We Need And put it in new array Named typeChecked
        let typeChecked = type.filter((ty,index)=>{
            return inp[index].checked ? ty : ""
        })

        for(let i=1;i<=Number(passLength.value);i++){
            typeChecked.forEach((typeCheck)=>{
                pass += random(typeCheck)
            })
        }
        console.timeEnd("function 1")
        output.innerHTML = pass.slice(0,passLength.value)
    }
}

//------------------------//

// Function Get Random Element from An Array

function random(array){
    return array[Math.floor(Math.random() * array.length)]
}

//------------------------//

// Function For Copy Value (Password Generated)

function copyText(){
    if(output.innerHTML !=""){
        clipboard.classList.add("clicked")
        setTimeout(()=>{
            clipboard.classList.remove("clicked")
        },1500)
        navigator.clipboard.writeText(output.innerHTML);
    }
}

//------------------------//