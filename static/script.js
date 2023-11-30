first_value = Math.floor(Math.random()*10)
second_value = Math.floor(Math.random()*10)

document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelectorAll(".first_value").forEach(element => {
        element.textContent = first_value
    });
    document.querySelectorAll(".second_value").forEach(element =>{
        element.textContent = second_value
    } )
    document.querySelector(".add_value").textContent = first_value + second_value
    document.querySelector(".sub_value").textContent = first_value - second_value
    document.querySelector(".mult_value").textContent = first_value * second_value
    if (second_value != 0){
        document.querySelector(".div_value").textContent = Math.floor(first_value / second_value)
    }
    else
    {
        document.querySelector(".div_value").textContent  = "Division by zero is prohibited"
    }
    
})
