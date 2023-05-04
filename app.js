// This is not a valid number!!!
const btn = document.querySelector(".button")
const input = document.querySelector("input")
const text1 = document.querySelector(".span1")
const text2 = document.querySelector(".span2")
const text3 = document.querySelector(".span3")

btn.addEventListener("click", () =>{
    let inText = input.value
    let year = 2023
    let res = year/2
    let age = year - inText 
    if(input.value >= year){
        text1.textContent = "This is not a valid number!!!"
    }else if(input.value >= res){
        text1.textContent = "Your"
        text2.textContent = "age"
        text3.textContent = age
    }if(input.value < res){
        text1.textContent = "Your"
        text2.textContent = "year"
        text3.textContent = age
        // console.log(232323);
    }
})
