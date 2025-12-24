import logoImage from "./icecream.png";
function Home() {
  function makeLogo() {
    const LOGO = document.createElement("div");
    LOGO.classList.add("logo");
    const img = document.createElement("img");
    img.src = logoImage;
    img.classList.add("logoimage");

    LOGO.appendChild(img);
    return LOGO;
  }
  function makeQuote() {
    const QUOTE = document.createElement("div");
    QUOTE.classList.add("quote");
    QUOTE.textContent = "Life is like ice cream—enjoy it before it melts.";
    return QUOTE;
  }
  function makeHours() {
    const HOURS = document.createElement("div");
    HOURS.classList.add("hours");
    HOURS.innerHTML =
      "<span>Mondays: 8:00 -> 16:00</span><span>Tuesday: 8:00 -> 16:00</span><span>Wednesday: 8:00 -> 16:00</span><span>Thursday: 8:00 -> 14:00</span><span>Friday: 8:00 -> 22:00</span>";
    return HOURS;
  }
  function makeLocation() {
    const LOCATION = document.createElement("div");
    LOCATION.classList.add("location");
    LOCATION.textContent = "Sprinkle Street 7, Scoopville, Frostland 12345";
    return LOCATION;
  }

  function makeHome() {
    const WRAPPER = document.createElement("div");
    WRAPPER.appendChild(makeLogo());
    WRAPPER.appendChild(makeQuote());
    WRAPPER.appendChild(makeHours());
    WRAPPER.appendChild(makeLocation());
    WRAPPER.classList.add("wrapper");

    return WRAPPER;
  }
  return makeHome();
}
export { Home };
