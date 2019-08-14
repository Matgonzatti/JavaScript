var containerElement = document.querySelector("#app");
var textElement = document.createElement("input");
var buttonElement = document.createElement("button");

buttonElement.textContent = "Verificar maior idade";
buttonElement.style.width = 200;
buttonElement.style.height = 50;
buttonElement.style.marginLeft = 20;
buttonElement.onclick = verificaIdade;

containerElement.appendChild(textElement);
containerElement.appendChild(buttonElement);

var agePromise = function() {
  return new Promise(function(resolve, reject) {
    if (textElement.value <= 18) {
      setTimeout(() => resolve("Menor que 18 anos."), 2000);
    } else {
      setTimeout(() => reject("Maior que 18 anos."), 2000);
    }
  });
};

function verificaIdade() {
  agePromise()
    .then(function(response) {
      alert(response);
    })
    .catch(function(error) {
      alert(error);
    });
}
