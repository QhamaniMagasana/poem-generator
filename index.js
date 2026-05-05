function generatePoem(response) {
    console.log("poem generated");
     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       cursor: " ",
       delay: 1,
     });
}

function displayPoem(event) {
  event.preventDefault();

  let generatorElement = document.querySelector("#poem-generator");

  let apiKey = "49a8a63t5f3e45e0f637cbabo60c59fa";
  let prompt = `User instruction: Generate a Xhosa poem about ${generatorElement}.`;
  let context =
    "You're a romantic peom expert and writes short peoms. You generate a 4 lines poem. Only generate the 4 lines and nothing else. Using HTML separate each line using <br />. Please make sure to follow the usert instructions";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);

 console.log("Generating poem");
 console.log(`prompt: ${prompt}`);
 console.log(`context: ${context}`);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", displayPoem);
