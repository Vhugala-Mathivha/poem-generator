function generatePoem(event){
    event.preventDefault();

   new Typewriter("#poem", {
      strings: "La vi na rose",
      autoStart: true,
      cursor: "",
      delay: 20,
    });
    
}

let peomElement = document.querySelector("#form-gen");
peomElement.addEventListener('submit', generatePoem)

