function displayPoem(event){
    event.preventDefault();

new Typewriter("#poem", {
  strings: " Alingebanjwa mntu",
  autoStart: true,
  cursor: " ",
  delay: 1,
});
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", displayPoem);