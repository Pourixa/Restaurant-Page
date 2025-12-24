import logoImage from "./icecream.png";
function About() {
  function makeAbout() {
    const ABOUT = document.createElement("div");
    ABOUT.classList.add("aboutT");
    ABOUT.textContent =
      "Welcome to Frostland Creamery, where every scoop is made to turn ordinary moments into sweet memories.\n\nWe believe ice cream is more than just a dessert—it’s a feeling, a pause in a busy day, a reason to smile.\n\nOur ice creams are crafted with love, creativity, and a little bit of imagination. From classic flavors that feel like home to bold creations that surprise your taste buds, each scoop is designed to bring joy from the first bite to the last melt.\n\nWe care about quality, fun, and freshness. That’s why we use simple ingredients, playful recipes, and a passion for flavor that never stops growing.\n\nWhether you’re celebrating, relaxing, or just craving something sweet, there’s always a scoop waiting for you here.\n\nBecause life is better with ice cream.";
    return ABOUT;
  }
  function makeLogo() {
    const LOGO = document.createElement("div");
    LOGO.classList.add("logo");
    const img = document.createElement("img");
    img.src = logoImage;
    img.classList.add("logoimage");

    LOGO.appendChild(img);
    return LOGO;
  }

  function writeAbout() {
    const WRAPPER = document.createElement("div");
    WRAPPER.classList.add("wrapper");
    WRAPPER.appendChild(makeLogo());
    WRAPPER.appendChild(makeAbout());
    return WRAPPER;
  }

  return writeAbout();
}

export { About };
