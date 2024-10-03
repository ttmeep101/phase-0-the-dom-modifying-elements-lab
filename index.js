// Write your code here!
const main2 = document.querySelector("main");
main2.remove();

const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.textContent="Tristan is the champion";
document.body.append(newHeader);
