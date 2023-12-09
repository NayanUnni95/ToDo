document.addEventListener("DOMContentLoaded", function () {
  let icon = document.getElementById("icon");
  icon.onclick = function () {
    document.body.classList.toggle("dark-mode");
  };
});

let input = document.getElementById("input-box");
let para = document.getElementById("para");

function addTask() {
  // Function to add data
  if (input.value === "") {
    alert("Empty Input...");
  } else {
    let data = document.getElementById("mDiv"); // Main parent div

    const mainDiv = document.createElement("div"); // Data div that includes the whole division
    mainDiv.classList.add("data1");
    data.appendChild(mainDiv);

    const newDiv = document.createElement("div"); // User input div
    newDiv.classList.add("data-div");
    mainDiv.appendChild(newDiv);

    const paraElement = document.createElement("p"); // Para element
    paraElement.classList.add("des");
    newDiv.appendChild(paraElement);
    paraElement.innerText = input.value;

    const icon = document.createElement("div"); // Icon div
    icon.classList.add("icon");
    newDiv.appendChild(icon);

    const checked = document.createElement("div");
    checked.classList.add("checked");
    newDiv.appendChild(checked);

    // const eye = document.createElement("i"); // Eye icon
    // eye.classList.add("fa-solid");
    // eye.classList.add("fa-eye");
    // eye.classList.add("fa-lg");
    // eye.classList.add("eye");
    // checked.appendChild(eye);

    const check = document.createElement("i"); // Check icon
    check.classList.add("fa-solid");
    check.classList.add("fa-check-circle");
    check.classList.add("fa-lg");
    check.classList.add("check");
    checked.appendChild(check);

    const cmp = document.createElement("h4");
    cmp.innerText = "";
    checked.appendChild(cmp);

    const btn = document.createElement("div"); // Delete button div
    btn.classList.add("btn");
    mainDiv.appendChild(btn);
    const trash = document.createElement("i"); // Delete icon
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash");
    trash.classList.add("fa-lg");
    trash.classList.add("trash");
    btn.appendChild(trash);

    btn.addEventListener("click", function () {
      // Function to delete data
      newDiv.remove();
      paraElement.remove();
      icon.remove();
      check.remove();
      // eye.remove();
      btn.remove();
      trash.remove();
    });
    check.addEventListener("click", function () {
      // Function to completed data
      cmp.innerText = "Completed";
      cmp.style.color = "#27d914";
      check.style.color = "#27d914";
    });
  }
  input.value = "";
}
