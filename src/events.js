function displayPoem(response) {
    new Typewriter("#poemContainer", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
      delay: 5,
    });
}

function generatePoem(event) {
    event.preventDefault();
   
    let fieldInput = document.querySelector("#inputText");
    let apiKey = "59co603b2aafffbe78f0b45aa8t9fe03";
    let context = `You are an AI poet who writes romantic poems based on romance novels. You will be given a book title and author name, please generate a poem inspired by it. Use the information of the titled book as a theme for the poem and let it be separated with <br></br> and be bold <strong></strong>. The poem should be in English and should not exceed 100 words. Give the poem a title that reflects the theme of the book. Let the lines be separeated with <br>.`;
    let prompt = `Write a romantic poem inspired by the book titled ${fieldInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
   axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
