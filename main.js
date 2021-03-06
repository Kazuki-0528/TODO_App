const addButton = document.querySelector(".addButton");
const input = document.querySelector(".input");
const container = document.querySelector(".container");

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let doneButton = document.createElement("button");
    doneButton.innerHTML = "DONE";
    doneButton.classList.add("doneButton");

    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(doneButton);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    doneButton.addEventListener("click", () => {
      input.classList.toggle("done");
    });

    editButton.addEventListener("click", () => this.edit(input));

    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new Item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
