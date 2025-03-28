const input = document.getElementById("input");
const button = document.getElementById("clear");
const display = document.getElementById("display");
const mode_button = document.getElementById("mode");

// Configure marked.js to use highlight.js for code blocks
marked.setOptions({
  highlight: function(code, lang) {
    return lang && hljs.getLanguage(lang)
      ? hljs.highlight(code, { language: lang }).value
      : hljs.highlightAuto(code).value;
  },
  breaks: true,
});

// Update preview on input event
input.addEventListener("input", () => {
  const htmlOutput = marked.parse(input.value);
  display.innerHTML = htmlOutput;
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
});

// Clear button resets the textarea and preview
button.addEventListener("click", () => {
  input.value = "";
  display.innerHTML = "";
});

// Dark Mode toggle
mode_button.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    mode_button.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    mode_button.textContent = "Dark Mode";
  }
});


const defaultMarkdown = `# Welcome to Markdown Previewer  
**Bold Text** *Italic Text*  
- List Item 1  
- List Item 2  
[Google](https://google.com)  
\`\`\`js  
console.log("Hello, World!");  
\`\`\``;
input.value = defaultMarkdown;
const htmlOutput = marked.parse(input.value);
display.innerHTML = htmlOutput;
document.querySelectorAll("pre code").forEach((block) => {
  hljs.highlightElement(block);
});
