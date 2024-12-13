import { data, skills, background, hobbies } from "./datas.js";

let active = "HOME";
const mainContainer = document.getElementById("main-container");

loadList(data.links, "header-links");
loadLogo("header-logo", true);
loadTitleAndP(data.headerTitle.home, "title-container");
loadHome();
loadFooter();
loadAboutMe();

function loadAboutMe() {
  loadTitleAndPre(data.main.about.background, mainContainer);
  loadTitleAndPre(data.main.about.hobbies, mainContainer);
}

function loadMessages() {
  const messages = data.main.messages;
  messages.forEach((message) => loadMessage(message, mainContainer));
}

function loadMessage(message, destination) {
  const $message = document.createElement("pre");
  $message.textContent = `Name: ${message.name}
Email: ${message.email}
Message: ${message.message}`;
  destination.append($message);
}

function loadHome() {
  loadImg(data.main.home.img, mainContainer, "home-img");
  loadTitleAndP(data.main.home, "main-container");
}

function loadImg(img, destination, cssClass) {
  const $img = document.createElement("div");
  $img.style.backgroundImage = `url("${img}")`;
  $img.classList.add(cssClass);
  destination.appendChild($img);
}

function loadList(source, destination) {
  source.forEach((element) => {
    const $ul = document.getElementById(destination);
    const li = document.createElement("li");
    li.textContent = element;
    $ul.appendChild(li);
  });
}

function loadLogo(destination, header) {
  const $destination = document.getElementById(destination);
  const goldenLogo = document.createElement("span");
  const silverLogo = document.createElement("span");
  const whiteLogo = document.createElement("span");
  goldenLogo.textContent = data.logo.golden;
  goldenLogo.classList.add("golden-logo");
  silverLogo.textContent = data.logo.silver;
  silverLogo.classList.add("silver-logo");
  whiteLogo.textContent = data.logo.copyright;
  whiteLogo.classList.add("white-logo");
  $destination.append(goldenLogo, silverLogo);
  if (header) {
    silverLogo.id = "logo-to-hide";
  } else {
    $destination.append(whiteLogo);
  }
}

function loadTitleAndP(source, destination) {
  const $title = document.createElement("h1");
  const $p = document.createElement("p");
  const $destination = document.getElementById(destination);
  $title.textContent = source.title;
  $p.textContent = source.p;
  $destination.append($title, $p);
}

function loadTitleAndPre(source, destination) {
  const $div = document.createElement("div");
  const $title = document.createElement("h1");
  const $p = document.createElement("pre");
  const $destination = document.getElementById(destination);
  $title.textContent = source.title;
  $p.textContent = source.p;
  $div.append($title, $p);
  destination.appendChild($div);
}

function loadFooter() {
  loadList(data.links, "footer-links");
  const $email = document.createElement("p");
  const $phone = document.createElement("p");
  const $div = document.createElement("div");
  $div.id = "footer-logo";
  const $copyrights = document.getElementById("copyright");
  $email.textContent = data.footer.email;
  $phone.textContent = data.footer.phone;
  $copyrights.append($email, $phone, $div);
  loadLogo("footer-logo", false);
}
