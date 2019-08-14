createElements(document);

function createElements(dom) {
  var containerElement = dom.querySelector("#app");
  var textElement = dom.createElement("input");
  var buttonElement = dom.createElement("button");

  buttonElement.textContent = "Buscar bio usuario Github";
  buttonElement.style.width = 170;
  buttonElement.style.height = 25;
  buttonElement.style.marginLeft = 20;
  buttonElement.onclick = searchUserGithub;

  containerElement.appendChild(textElement);
  containerElement.appendChild(buttonElement);
}

function searchUserGithub() {
  var containerElement = document.querySelector("#app");
  var ulElement = document.createElement("ul");
  var liElement = document.createElement("li");
  console.log(document.querySelector("input").value);
  axios
    .get(
      "https://api.github.com/users/" + document.querySelector("input").value
    )
    .then(function(response) {
      liElement.textContent = response.data.bio;
      ulElement.appendChild(liElement);
    });

  containerElement.appendChild(ulElement);
}
