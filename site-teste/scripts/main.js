const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kirito-de-costas.png") {
    myImage.setAttribute("src", "images/kirito-atacando.png");
  } else {
    myImage.setAttribute("src", "images/kirito-de-costas.png"); 
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Anime is cool ${myName}`;
  }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Anime is cool ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };