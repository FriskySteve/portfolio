import { data, skills, background, hobbies } from "./datas.js";

let active = "HOME";

loadList(data.links, "header-links");
loadLogo("header-logo", true);
loadTitleAndP(data.headerTitle.about, "title-container");
loadFooter();

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

function loadFooter() {
  loadList(data.links, "footer-links");

  const $email = document.createElement("p");
  const $phone = document.createElement("p");
  const $copyrights = document.getElementById("copyright");
  $email.textContent = data.footer.email;
  $phone.textContent = data.footer.phone;
  $copyrights.append($email, $phone);
  loadLogo("copyright", false);
}

// const loadLinkList = () => {
//   const $ulLinks = document.querySelectorAll(".links");
//   datas.forEach((data) => {
//     const link = document.createElement("li");
//     link.textContent = data.link;
//     $ulLinks.forEach(($ul) => {
//       $ul.appendChild(link.cloneNode(true));
//     });
//   });
// };

// function loadTitle() {
//   const titleContainer = document.getElementById("title-container");
//   const title = document.createElement("h1");
//   title.textContent = datas[0].title;
//   const desc = document.createElement("h2");
//   desc.textContent = datas[0].desc;
//   titleContainer.append(title, desc);
// }

// loadLinkList();
// loadTitle();

// switch (active) {
//   case "home":
//     home();
//     break;
//   case "projects":
//     projects();
//     break;
//   case "about":
//     about();
//     break;
//   case "contact":
//     contact();
//     break;
//   case "messages":
//     messages();
//     break;

//   default:
//     home();
//     break;
// }

// function home() {
//   articleCreator();
// }
// function projects() {}
// function about() {}
// function contact() {}
// function messages() {}
// function skillCreator() {
//   const title = document.createElement("h4");
//   const skillsHolder = document.createElement("div");
//   title.textContent = "My Skills";
//   skills.forEach((skill) => {
//     const skillHolder = document.createElement("div");
//     const img = document.createElement("img");
//     const skillName = document.createElement("h4");
//     const ul = document.createElement("ul");
//     const exp = document.createElement("p");
//     img.src = skill.img;
//     skillName.textContent = skill.name;
//     exp.textContent = skill.exp;
//     skillHolder.append(img, skillName, ul, exp);
//     skillsHolder.appendChild(skillHolder);
//   });
// }

// function articleCreator(title, text, destination) {
//   const title = document.createElement("h2");
//   title.textContent = title;
//   destination.append(title);
//   text.forEach((paragrah) => {
//     const param = document.createElement("p");
//     param.textContent = paragrah;
//     destination.append(param);
//   });
// }
