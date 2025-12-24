import logoImage from "./icecream.png";
function Menu() {
  function makeItem(name, price) {
    const ITEM = document.createElement("div");
    ITEM.classList.add("item");
    ITEM.textContent = `${name} ...................... ${price}`;
    return ITEM;
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

  let items = [
    makeItem("Choco Avalanche", "$4.50 🍫"),
    makeItem("Strawberry Swirl Delight", "$4.00 🍓"),
    makeItem("Minty Mountain Crunch", "$4.75 🌿"),
    makeItem("Caramel Comet", "$5.00 🍮"),
    makeItem("Rainbow Sprinkle Dream", "$4.25 🌈"),
  ];
  function makeMenu(items) {
    const WRAPPER = document.createElement("div");
    WRAPPER.classList.add("wrapper");
    WRAPPER.appendChild(makeLogo());
    for (let i = 0; i < items.length; i++) {
      WRAPPER.appendChild(items[i]);
    }
    return WRAPPER;
  }

  return makeMenu(items);
}

export { Menu };
