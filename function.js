
let button = document.querySelector("button")
let form = document.querySelector("form")

button.addEventListener("click", (e)=>{
    e.preventDefault()
    let inputs = document.querySelectorAll("input")
    inputs.forEach((input)=>{
        console.log(input.value);
    })

})