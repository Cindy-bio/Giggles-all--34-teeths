function generatePoem(event) {
    event.preventDefault();

    let poemContainerElement = document.querySelector('#poemContainer');
    new Typewriter("#poemContainer", {
      strings: "This poem is inspired by your favorite romance novel and will be generated shortly...",
      autoStart: true,
      cursor: "",
      delay: 5,
    });
   
}

let poemFormElement = document.querySelector('#poemForm');
poemFormElement.addEventListener('submit', generatePoem);
