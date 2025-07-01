function displayPoem(response){
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
      delay: 20,
    });
}

function generatePoem(event){
    event.preventDefault();

    let istrucInput = document.querySelector("#user-instruction");
    let apiKey = "3fbcbabc4aac00t31918odda5085df79";
    let prompt =`generate a beautiful poem about ${istrucInput.value}`;
    let context = `you are a romantic poem expert and love to write and read short poems. Your goal is to generate a 4 line short poem in basic HTML. Make sure you write only the poem and nothing else, do not include anything else like "html" but the poem. make sure to follow the user instructions`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

   
    
}

let peomElement = document.querySelector("#form-gen");
peomElement.addEventListener('submit', generatePoem)

