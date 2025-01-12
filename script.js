import { data } from "./datas.js";

const mainContainer = document.querySelector("main");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const title = "title-container";
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let startCarouselAt = 0;
let active = "HOME";

initialLoad();

function initialLoad() {
  loadLogo("header-logo", true);
  loadLinks();
  loadFooter();
  loadPage();
}

function loadPage() {
  switch (active) {
    case "HOME":
      loadTitleAndP(data.headerTitle.home, title);
      loadHome();
      break;
    case "PROJECTS":
      loadTitleAndP(data.headerTitle.projects, title);
      loadProjects();
      break;
    case "ABOUT":
      loadTitleAndP(data.headerTitle.about, title);
      loadAboutMe();
      break;
    case "CONTACT":
      loadTitleAndP(data.headerTitle.contact, title);
      loadContactMe();
      break;
    case "MESSAGES":
      loadTitleAndP(data.headerTitle.messages, title);
      loadMessages();
      break;

    default:
      loadTitleAndP(data.headerTitle.home, title);
      loadHome();
      break;
  }
}

function loadSkills(destination) {
  const skills = data.main.home.skills;
  const skillsContainer = document.createElement("div");

  skillsContainer.id = "skills-container";
  skills.forEach((skill) => {
    loadSkill(skill, skillsContainer);
  });
  destination.appendChild(skillsContainer);
}

function loadSkill(skill, skillsContainer) {
  const name = skill.name;
  const exp = skill.exp;
  const skillContainer = document.createElement("div");
  const skillImgContainer = document.createElement("div");
  const skillDescContainer = document.createElement("div");
  const skillImg = document.createElement("img");
  const skillName = document.createElement("p");
  const skillExp = document.createElement("p");
  const ballsContainer = document.createElement("div");

  ballsContainer.classList.add("balls-container");
  for (let i = 0; i < 5; i++) {
    const newBall = document.createElement("div");

    newBall.classList.add("ball");
    if (i < exp) newBall.classList.add("full-ball");
    ballsContainer.appendChild(newBall);
  }
  skillContainer.classList.add("skill-container");
  skillImgContainer.classList.add("skill-img-container");
  skillDescContainer.classList.add("skill-desc-container");
  skillImg.classList.add("center");
  skillName.classList.add("skill-name");
  skillExp.classList.add("skill-exp");
  skillName.textContent = name;
  skillExp.textContent = `${exp} years`;
  skillImg.src = `img/${name.toLowerCase()}.png`;
  skillImgContainer.appendChild(skillImg);
  skillDescContainer.append(skillName, ballsContainer, skillExp);
  skillContainer.append(skillImgContainer, skillDescContainer);
  skillsContainer.appendChild(skillContainer);
}

function clear() {
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  const titleContainer = document.getElementById(title);

  titleContainer.innerHTML = "";
  mainContainer.innerHTML = "";
}

function loadModal() {
  addBlur();
  loadModalForm();
}

function removeBlur() {
  const projectsDiv = document.getElementById("projects");
  const body = document.querySelector("body");

  body.classList.remove("no-scroll");
  projectsDiv.classList.remove("overlay");
  header.classList.remove("overlay");
  footer.classList.remove("overlay");
}

function addBlur() {
  const projectsDiv = document.getElementById("projects");
  const body = document.querySelector("body");

  body.classList.add("no-scroll");
  projectsDiv.classList.add("overlay");
  header.classList.add("overlay");
  footer.classList.add("overlay");
}

function loadModalForm() {
  const modal = document.createElement("div");
  const modalForm = document.createElement("form");
  const titleDiv = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const technologiesDiv = document.createElement("div");
  const technologiesLabel = document.createElement("label");
  const technologiesInput = document.createElement("input");
  const addProjectBtn = document.createElement("button");
  const buttonImg = document.createElement("img");
  const buttonText = document.createElement("p");
  const closeModal = document.createElement("button");
  const closeModalImg = document.createElement("img");

  modal.className = "modal";
  titleLabel.textContent = "Project title";
  titleInput.id = "title";
  titleInput.name = "project title";
  titleInput.placeholder = "Project title";
  titleDiv.append(titleLabel, titleInput);
  technologiesLabel.textContent = "Technologies";
  technologiesInput.id = "techonologies";
  technologiesInput.name = "techonologies";
  technologiesInput.placeholder = "html, css, javascript";
  technologiesDiv.append(technologiesLabel, technologiesInput);
  addProjectBtn.classList = "buttons";
  addProjectBtn.type = "submit";
  buttonImg.src = "img/plus.png";
  buttonImg.classList = "center";
  buttonText.classList = "center";
  buttonText.textContent = "Add project";
  addProjectBtn.append(buttonImg, buttonText);
  closeModalImg.src = "img/close.png";
  closeModalImg.classList = "center";
  closeModal.appendChild(closeModalImg);
  closeModal.id = "close-modal";
  modalForm.append(titleDiv, technologiesDiv, addProjectBtn);
  modal.append(closeModal, modalForm);
  main.appendChild(modal);
  modalForm.addEventListener("submit", (event) => {
    const title = titleInput.value;
    const titleLength = titleInput.value.length;
    const technologies = technologiesInput.value;
    const technologiesLength = technologies.length;
    const technologiesList = technologies.split(",");

    event.preventDefault();
    titleInput.addEventListener("input", () => {
      checkForErrors(titleInput.id);
    });
    technologiesInput.addEventListener("input", () => {
      checkForErrors(technologiesInput.id);
    });

    if (titleLength < 3 || titleLength > 30 || technologiesLength < 1) {
      if (titleLength < 3 || titleLength > 30) {
        addError(titleInput.id);
      }
      if (technologiesLength < 1) {
        addError(technologiesInput.id);
      }
    } else {
      const newProject = {
        title: title,
        technologies: technologiesList,
      };
      data.main.projects.push(newProject);

      modal.remove();
      removeBlur();
      mainContainer.innerHTML = "";
      loadProjects();
    }
  });

  closeModal.addEventListener("click", () => {
    modal.remove();
    removeBlur();
  });
}

function loadProjects() {
  const projects = document.createElement("div");
  const projectsContainer = document.createElement("div");
  const addProjectBtn = document.createElement("button");
  const buttonImg = document.createElement("img");
  const buttonText = document.createElement("p");

  projects.id = "projects";
  projectsContainer.id = "projects-container";
  addProjectBtn.classList = "buttons";
  addProjectBtn.style.marginBottom = "84px";
  buttonImg.src = "img/plus.png";
  buttonImg.classList = "center";
  buttonText.classList = "center";
  buttonText.textContent = "Add project";
  addProjectBtn.append(buttonImg, buttonText);
  addProjectBtn.addEventListener("click", () => {
    loadModal();
  });
  if (data.main.projects.length > 0) {
    data.main.projects.forEach((project) => {
      loadProject(project, projectsContainer, true);
    });
  } else {
    const noProjects = document.createElement("h1");

    noProjects.textContent = "There are no projects to display";
    projectsContainer.appendChild(noProjects);
  }
  projects.append(addProjectBtn, projectsContainer);
  mainContainer.appendChild(projects);
}

function loadProject(project, container, button) {
  const div = document.createElement("div");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");

  div.classList.add("project-page");
  header.classList = "projects-header";
  header.textContent = project.title;
  ul.classList = "projects-ul";
  project.technologies.forEach((technology) => {
    const li = document.createElement("li");

    li.textContent = technology.toUpperCase();
    li.style.fontSize = "16px";
    ul.appendChild(li);
  });
  if (button) {
    const buttonImg = document.createElement("img");
    const deleteButton = document.createElement("button");

    buttonImg.src = "img/delete.png";
    buttonImg.alt = "delete";
    deleteButton.classList = "delete-button";
    deleteButton.appendChild(buttonImg);
    deleteButton.addEventListener("click", () => {
      data.main.projects = data.main.projects.filter(
        (element) => element != project
      );
      div.remove();
      mainContainer.innerHTML = "";
      loadProjects();
    });
    div.append(header, ul, deleteButton);
  } else div.append(header, ul);

  container.appendChild(div);
}

function checkForErrors(inputId) {
  const input = document.getElementById(inputId);
  const inputLength = input.value.length;
  const inputDiv = input.parentNode;
  const error = document.createElement("p");
  let isError = inputDiv.querySelector(".error");

  error.classList.add("error");
  input.style.borderColor = "#AF0808";

  switch (inputId) {
    case "name":
      if (inputLength < 3) {
        error.textContent = "The name must be at least 3 characters long.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else if (inputLength > 20) {
        error.textContent = "The name must not exceed 20 characters.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else {
        resetInputState(input, inputDiv);
      }
      break;
    case "email":
      if (!emailPattern.test(input.value)) {
        error.textContent = "Please enter a valid email address.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else {
        resetInputState(input, inputDiv);
      }
      break;
    case "message":
      if (inputLength < 1) {
        error.textContent = "The message cannot be empty.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else if (inputLength > 100) {
        error.textContent = "The message must not exceed 100 characters.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else {
        resetInputState(input, inputDiv);
      }
      break;
    case "title":
      if (inputLength < 3) {
        error.textContent = "The title must be at least 3 characters long.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else if (inputLength > 30) {
        error.textContent = "The title must not exceed 30 characters.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else {
        resetInputState(input, inputDiv);
      }
      break;
    case "techonologies":
      if (inputLength < 1) {
        error.textContent = "Please add some technologies.";
        if (!isError) {
          inputDiv.appendChild(error);
        }
      } else {
        resetInputState(input, inputDiv);
      }
      break;

    default:
      break;
  }
}

function addError(inputId) {
  const input = document.getElementById(inputId);
  const inputLength = input.value.length;
  const inputDiv = input.parentNode;
  const error = document.createElement("p");
  let isError = inputDiv.querySelector(".error");

  error.classList.add("error");
  input.style.borderColor = "#AF0808";

  switch (inputId) {
    case "name":
      if (inputLength < 3) {
        error.textContent = "The name must be at least 3 characters long.";
      } else if (inputLength > 20) {
        error.textContent = "The name must not exceed 20 characters.";
      }
      break;
    case "email":
      error.textContent = "Please enter a valid email address.";
      break;
    case "message":
      if (inputLength < 1) {
        error.textContent = "The message cannot be empty.";
      } else if (inputLength > 100) {
        error.textContent = "The message must not exceed 100 characters.";
      }
      break;
    case "title":
      if (inputLength < 3) {
        error.textContent = "The title must be at least 3 characters long.";
      } else if (inputLength > 30) {
        error.textContent = "The title must not exceed 30 characters.";
      }
      break;
    case "techonologies":
      if (inputLength < 1) {
        error.textContent = "Please add some technologies.";
      }
  }
  if (!isError) {
    inputDiv.appendChild(error);
  }
}

function loadContactMe() {
  const formContainer = document.createElement("div");
  const formTitle = document.createElement("h1");
  const nameDiv = document.createElement("div");
  const emailDiv = document.createElement("div");
  const messageDiv = document.createElement("div");
  const form = document.createElement("form");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const msgLabel = document.createElement("label");
  const msgInput = document.createElement("input");
  const submitButton = document.createElement("button");
  const buttonText = document.createElement("p");
  const nameEmailDiv = document.createElement("div");

  mainContainer.innerHTML = "";
  formContainer.id = "form-container";
  formTitle.textContent = "Contact Me";
  nameDiv.id = "name-div";
  emailDiv.id = "email-div";
  messageDiv.id = "message-div";
  form.id = "contact-form";
  nameLabel.textContent = "Name";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Your name";
  emailLabel.textContent = "Email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "email@example.com";
  msgLabel.textContent = "Message";
  msgInput.id = "message";
  msgInput.name = "message";
  msgInput.placeholder = "Hello, my name is . . .";
  submitButton.classList = "buttons";
  submitButton.type = "submit";
  buttonText.classList = "center";
  buttonText.textContent = "Send message";
  submitButton.appendChild(buttonText);
  nameEmailDiv.id = "name-email-div";
  nameDiv.append(nameLabel, nameInput);
  emailDiv.append(emailLabel, emailInput);
  nameEmailDiv.append(nameDiv, emailDiv);
  messageDiv.append(msgLabel, msgInput);
  form.append(formTitle, nameEmailDiv, messageDiv, submitButton);
  formContainer.appendChild(form);
  mainContainer.appendChild(formContainer);

  form.addEventListener("submit", (event) => {
    const name = nameInput.value.length;
    const msg = msgInput.value.length;

    event.preventDefault();
    nameInput.addEventListener("input", () => {
      checkForErrors(nameInput.id);
    });
    emailInput.addEventListener("input", () => {
      checkForErrors(emailInput.id);
    });
    msgInput.addEventListener("input", () => {
      checkForErrors(msgInput.id);
    });

    if (
      name < 3 ||
      name > 20 ||
      !emailPattern.test(emailInput.value) ||
      msg < 1 ||
      msg > 100
    ) {
      if (name < 3 || name > 20) {
        addError(nameInput.id);
      }
      if (!emailPattern.test(emailInput.value)) {
        addError(emailInput.id);
      }
      if (msg < 1 || msg > 100) {
        addError(msgInput.id);
      }
    } else {
      const name = nameInput.value;
      const email = emailInput.value;
      const message = msgInput.value;

      const newMessage = {
        name: name,
        email: email,
        message: message,
      };

      data.main.messages.push(newMessage);

      form.reset();
    }
  });
}
function resetInputState(inputElement, errorContainer) {
  const errorMessages = errorContainer.querySelectorAll(".error");

  inputElement.style.borderColor = "";
  errorMessages.forEach((error) => error.remove());
}

function loadAboutMe() {
  const aboutMeContainer = document.createElement("div");
  const imgDiv = document.createElement("div");
  const addContactMeBtn = document.createElement("button");
  const buttonImg = document.createElement("img");
  const buttonText = document.createElement("p");

  aboutMeContainer.id = "about-me-container";
  imgDiv.classList = "male-background";
  aboutMeContainer.appendChild(imgDiv);

  loadTitleAndPre(data.main.about.background, aboutMeContainer);
  loadTitleAndPre(data.main.about.hobbies, aboutMeContainer);

  addContactMeBtn.id = "contacte-me-button";
  addContactMeBtn.classList = "buttons";
  buttonImg.src = "img/arrow-contact-me.png";
  buttonImg.classList = "center";
  buttonText.classList = "center";
  buttonText.textContent = "Contact me";
  addContactMeBtn.append(buttonImg, buttonText);
  addContactMeBtn.addEventListener("click", () => {
    loadContactMe();
    const contactLinks = document.querySelectorAll(
      "#header-links li, #footer-links li"
    );
    contactLinks.forEach((li) => {
      if (li.textContent === "CONTACT") {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  });
  aboutMeContainer.appendChild(addContactMeBtn);

  mainContainer.appendChild(aboutMeContainer);
}

function loadMessages() {
  const messagesContener = document.createElement("div");
  const messages = data.main.messages;

  messagesContener.id = "messages-contener";
  messages.forEach((message) => loadMessage(message, messagesContener));
  mainContainer.appendChild(messagesContener);
}

function loadMessage(message, destination) {
  const $message = document.createElement("pre");
  $message.textContent = `Name: ${message.name}
Email: ${message.email}
Message: ${message.message}`;
  destination.append($message);
}

function loadHome() {
  const homeContainer = document.createElement("div");
  const imgDiv = document.createElement("div");
  const aboutMe = document.createElement("h1");
  const aboutMeP = document.createElement("p");
  const mySkillsHeader = document.createElement("h1");
  const mySkills = document.createElement("div");
  const homeDescContainer = document.createElement("div");
  const hamburgerMenu = document.getElementById("hamburger-container");
  const hamburgerLinks = document.getElementById("header-links");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  homeContainer.id = "home-container";
  imgDiv.classList = "male-background";
  aboutMe.textContent = data.main.home.title;
  aboutMeP.textContent = data.main.home.p;
  mySkillsHeader.textContent = data.main.home.title2;
  homeDescContainer.append(aboutMe, aboutMeP, mySkillsHeader);
  homeContainer.append(imgDiv, homeDescContainer, mySkills);
  mainContainer.appendChild(homeContainer);
  loadSkills(homeContainer);
  if (data.main.projects.length > 0) {
    loadCarousel();
  }
  hamburgerMenu.addEventListener("click", () => {
    if (hamburgerLinks.style.display != "flex") {
      hamburgerLinks.style.display = "flex";
      hamburgerIcon.src = "img/hamburger-gold.png";
    } else {
      hamburgerLinks.style.display = "none";
      hamburgerIcon.src = "img/hamburger-white.png";
    }
  });
}

function loadCarousel() {
  const carouselContainer = document.createElement("div");

  carouselContainer.id = "carousel-container";
  for (let i = startCarouselAt; i < startCarouselAt + 3; i++) {
    if (i === data.main.projects.length - 1) {
      startCarouselAt = -3;
    }
    if (i === -data.main.projects.length) {
      i = 0;
      startCarouselAt = 0;
    }
    loadProject(data.main.projects.at(i), carouselContainer, false);
  }
  mainContainer.appendChild(carouselContainer);
  if (data.main.projects.length > 3) {
    const carouselButtonsContainer = document.createElement("div");
    const carouselButtonLeft = document.createElement("button");
    const carouselButtonRight = document.createElement("button");
    const buttonLeftImg = document.createElement("img");
    const buttonRightImg = document.createElement("img");

    carouselButtonsContainer.id = "carousel-buttons-container";
    carouselButtonLeft.classList.add("carousel-buttons");
    carouselButtonRight.classList.add("carousel-buttons");
    buttonLeftImg.src = "img/carousel-left.png";
    buttonLeftImg.classList = "center";
    buttonRightImg.src = "img/carousel-right.png";
    buttonRightImg.classList = "center";
    carouselButtonLeft.appendChild(buttonLeftImg);
    carouselButtonRight.appendChild(buttonRightImg);
    carouselButtonsContainer.append(carouselButtonLeft, carouselButtonRight);
    mainContainer.appendChild(carouselButtonsContainer);
    carouselButtonLeft.addEventListener("click", () => {
      carouselContainer.remove();
      carouselButtonsContainer.remove();
      startCarouselAt--;
      loadCarousel();
    });
    carouselButtonRight.addEventListener("click", () => {
      carouselContainer.remove();
      carouselButtonsContainer.remove();
      startCarouselAt++;
      loadCarousel();
    });
  }
  return carouselContainer;
}

function loadLinks() {
  const headerUl = document.getElementById("header-links");
  const footerUl = document.getElementById("footer-links");
  const links = data.links;

  links.forEach((link) => {
    const headerLi = document.createElement("li");

    headerLi.textContent = link;
    headerLi.addEventListener("click", () => {
      clear();
      active = headerLi.textContent;
      headerLi.classList.add("active");
      footerLi.classList.add("active");
      loadPage();
    });
    const footerLi = document.createElement("li");

    footerLi.textContent = link;
    footerLi.addEventListener("click", () => {
      clear();
      active = footerLi.textContent;
      footerLi.classList.add("active");
      headerLi.classList.add("active");
      loadPage();
    });
    headerUl.appendChild(headerLi);
    footerUl.appendChild(footerLi);
  });
  headerUl.firstChild.classList.add("active");
  footerUl.firstChild.classList.add("active");
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

  $title.textContent = source.title.toUpperCase();
  $p.textContent = source.p;
  $destination.append($title, $p);
}

function loadTitleAndPre(source, destination) {
  const $div = document.createElement("div");
  const $title = document.createElement("h1");
  $title.classList = "h1-pre";
  const $p = document.createElement("pre");
  $p.classList = "pre";
  const $destination = document.getElementById(destination);
  $title.textContent = source.title;
  $p.textContent = source.p;
  $div.append($title, $p);
  destination.appendChild($div);
}

function loadFooter() {
  const $email = document.createElement("p");
  const $phone = document.createElement("p");
  const $div = document.createElement("div");
  const $copyrights = document.getElementById("copyright");

  $div.id = "footer-logo";
  $email.textContent = data.footer.email;
  $phone.textContent = data.footer.phone;
  $copyrights.append($email, $phone, $div);
  loadLogo("footer-logo", false);
}
