let  numberDiv = document.querySelector('.number')
// console.log(number)
const btn = document.getElementById("counter")
const Decrementbtn = document.getElementById("Decrement")

// console.log(btn)
const resetbtn = document.getElementById("reset")
let number = 0;
numberDiv.innerHTML = number

btn.addEventListener("click", () => {
    number++;
    numberDiv.innerHTML = number
})

Decrementbtn.addEventListener("click", () => {
    number--;
    if(number<0){
        numberDiv.innerHTML = "0";
        alert("Number is equall 0")
    }
    else{
        numberDiv.innerHTML = number
    }
})

resetbtn.addEventListener("click", () => {
    number=0;
    numberDiv.innerHTML = number
})
