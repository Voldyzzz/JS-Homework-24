const textForm = document.querySelector(".text-form"),
  inputText = document.querySelector(".input-text");

const block = createDiv();
console.log(block);

inputText.onfocus = function () {
  block.style.cssText =
    "width: 250px; height: 250px; background-color: black; margin-top: 20px; visibility: visible";
};

inputText.onblur = function () {
  block.style.cssText =
    "width: 250px; height: 250px; background-color: black; margin-top: 20px; visibility: hidden";
};

function createDiv() {
  const block = document.createElement("div");
  block.style.cssText =
    "width: 250px; height: 250px; background-color: black; margin-top: 20px; visibility: hidden";
  textForm.append(block);
  return block;
}
