const formElement = document.querySelector("form");
const inputsElements = document.querySelectorAll("input");
const textAreaElement = document.querySelector('textarea');

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let valores =[];

  inputsElements.forEach(function (input) {
    valores.push(input.value);
    // console.log(input.value);
});
    valores.push(textAreaElement.value);
    console.log(` Dados do Formulario: ${valores}`);
 
});
