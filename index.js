import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import copy from "copy-to-clipboard";

const copyButtons = document.getElementsByClassName("copy");
for (let button of copyButtons) {
  let timeout = null;
  button.addEventListener("click", () => {
    button.classList.remove("fa-copy");
    button.classList.add("fa-check");
    copy(button.getAttribute("data-copy"));

    if (timeout) return;
    timeout = setTimeout(() => {
      button.classList.add("fa-copy");
      button.classList.remove("fa-check");
      timeout = null;
    }, 1000);
  });
}
