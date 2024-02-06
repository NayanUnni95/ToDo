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
    alert("Empty Input Field...");
  } else {
    let data = document.getElementById("mDiv"); // Main parent div

    const dataSection = `<div id="mDiv" class="main-body">
    <div class="data1 flex flex-item flex-content">
      <div class="data-div flex flex-item">
        <p class="des">${input.value}</p>
        <div class="icon"></div>
        <div class="checked flex flex-item flex-content">
          <i class="fa-solid fa-check-circle fa-lg check"></i>
          <h4 class="h4"></h4>
        </div>
        </div>
        <div class="btn flex flex-item flex-content"><i class="fa-solid fa-trash fa-lg trash"></i></div>
      </div>
    </div>`
    data.insertAdjacentHTML("beforeend", dataSection);
    input.value = '';

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
    const check = document.querySelector(".checked");
    check.addEventListener("click", function () {
      // Function to completed data
      console.log(".");
      const cmp = document.querySelector(".h4");
      cmp.innerText = "Completed";
      cmp.style.color = "#27d914";
      check.style.color = "#27d914";
    });
  }
  input.value = "";
}

