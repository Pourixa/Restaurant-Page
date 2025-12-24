import "./style.css";
import { Home } from "./home";
import { Menu } from "./menu";
import { About } from "./about";

function fillContent() {
  const HOMEbtn = document.querySelector(".home");
  const MENUbtn = document.querySelector(".menu");
  const ABOUTbtn = document.querySelector(".about");
  HOMEbtn.addEventListener("click", () => {
    const CONTENT = document.querySelector("#content");
    CONTENT.innerHTML = "";
    CONTENT.appendChild(Home());
  });

  MENUbtn.addEventListener("click", () => {
    const CONTENT = document.querySelector("#content");
    CONTENT.innerHTML = "";
    CONTENT.appendChild(Menu());
  });

  ABOUTbtn.addEventListener("click", () => {
    const CONTENT = document.querySelector("#content");
    CONTENT.innerHTML = "";
    CONTENT.appendChild(About());
  });

  const CONTENT = document.querySelector("#content");
  CONTENT.appendChild(Home());
}

fillContent();
