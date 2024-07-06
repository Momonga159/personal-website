document
  .getElementById("inputLine")
  .addEventListener("keydown", function (event) {
    const input = this.value.trim();
    const outputDiv = document.getElementById("output");

    if (event.key === "Enter") {
      event.preventDefault();

      if (input.toLowerCase() === "clear") {
        // Resets terminal to only show the welcome message
        outputDiv.innerHTML =
          '> Welcome to my portfolio. Type <span class="help">"help"</span> to see available commands.\n';
      } else {
        processCommand(input);
      }
      this.value = ""; // Clear input after processing
      window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom after command
    }
  });

function processCommand(input) {
  const outputDiv = document.getElementById("output");
  if (input.toLowerCase() === "help") {
    outputDiv.innerHTML += "> about | social | works | credit | clear\n";
  } else if (input.toLowerCase() === "about") {
    outputDiv.innerHTML +=`
  > Hello! I'm Momonga, a passionate and dedicated full stack web developer based in France. With a strong foundation in HTML, CSS, JavaScript, and Java, I strive to create seamless and efficient web applications.
  > When I'm not coding, I enjoy indulging in my hobbies of astrophotography and gaming. I am quite reserved and love spending time at home, either working on my projects or diving into MMORPGs.
  > My short-term goal is to undertake numerous side projects to expand my knowledge and skills. In the long term, I aim to complete Yggdrasil, my biggest and most ambitious project to date.
    `;
  } else if (input.toLowerCase() === "social") {
    const socialLinks = `
    > Github:          <a href="https://github.com/Momonga159">https://github.com/Momonga159</a>
    > Instagram:       <a href="https://www.instagram.com/momonga__159/" target="_blank">https://www.instagram.com/momonga__159/</a>
    > Discord:         _momonga_ 
        `;
    outputDiv.innerHTML += `${socialLinks}\n`;
  } else if (input.toLowerCase() === "works") {
    const works = `
      > Project One: My own website (the one you are right now): <a href="https://www.momonga-web.dev/">momonga-web</a>
      > Project Two: A calculator for the Seals of Endeavor Calculator in TESO game: <a href="https://momonga159.github.io/Endeavor-Calculator/">Seals of Endeavor Calculator</a>
      > Project Three: Yggdrasil a minecraft MMORPG (not link to this website yet): <a href="">Yggdrasil</a>

      <span class="incoming">Incoming project will be show here... </span>
    `;
    outputDiv.innerHTML += `${works}\n`;
  } else if (input.toLowerCase() === "credit") {
    outputDiv.innerHTML += `> Designed by <span class="credit">_Momonga_</span>\n`;
  } else {
    outputDiv.innerHTML += `<span class="error">Command not found: [${input}]</span>\n`;
  }
}

window.onload = () => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML +=
    '> Welcome to my portfolio. Type <span class="help">"help"</span> to see available commands.\n\n';
};
