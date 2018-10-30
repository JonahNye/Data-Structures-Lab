"use strict";


//Enjoy this Franeknstein's Monster of a block of code. I do not know why some of it is vanilla js and soe is jQuery. I stopped asking those kind of questions hours ago.



$(document).ready(() => {
//storage array
const array  = [
    {Bug: "Clear form not working", Description: "That is not my job to describe to you how and why the bug occured"},
    {Bug: "Clear form still not working", Description: "Seriously, that is not my job to describe the bug for you. You should be fired"}

];

//Add button
document.querySelector("#add-btn").addEventListener("click", () => {
    const inputs = document.querySelectorAll(".bug-input");
    array.push({ 
      Bug: inputs[0].value, 
      Description: inputs[1].value 
});

console.log(array); //To log the gathering of input values


$(".popup").append(`
    <section class="bug">
    Bug: ${array[0].Bug}
    Description: ${array[0].Description}
        
    <button class="resolved-btn" type="button">Resolved</button>
    </section>
`);
    
})

  

//Resolved Button

$(document).on("click", ".resolved-btn", (event) => {
    $(".bug").remove();
    array.shift();
    console.log(array);  //To log the rencetly trimmed array
    
}) 


})