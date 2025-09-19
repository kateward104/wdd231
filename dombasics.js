const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

/*Option 1 for adding a section with an h2 and a paragraph inside that section*/
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerHTML = "DOM Basics";
newSection.appendChild(newH2);
const newParagraph2 = document.createElement("p");
newParagraph2.innerHTML = "This was added through JavaScript";
newSection.appendChild(newParagraph2);

document.body.appendChild(newSection);

/* Option 2
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);

*/