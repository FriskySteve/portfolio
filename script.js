import { data } from "./datas.js";

let active = "HOME";
const mainContainer = document.querySelector("main");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const title = "title-container";
let startCarouselAt = 0;

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
  modal.className = "modal";
  const modalForm = document.createElement("form");

  const titleDiv = document.createElement("div");
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Project title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "project title";
  titleInput.placeholder = "Project title";
  titleDiv.append(titleLabel, titleInput);

  const technologiesDiv = document.createElement("div");
  const technologiesLabel = document.createElement("label");
  technologiesLabel.textContent = "Technologies";
  const technologiesInput = document.createElement("input");
  technologiesInput.type = "text";
  technologiesInput.name = "techonologies";
  technologiesInput.placeholder = "html, css, javascript";
  technologiesDiv.append(technologiesLabel, technologiesInput);

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList = "buttons";
  addProjectBtn.type = "submit";
  const buttonImg = document.createElement("img");
  buttonImg.src = "img/plus.png";
  buttonImg.classList = "center";
  const buttonText = document.createElement("p");
  buttonText.classList = "center";
  buttonText.textContent = "Add project";
  addProjectBtn.append(buttonImg, buttonText);

  const closeModal = document.createElement("button");
  const closeModalImg = document.createElement("img");
  closeModalImg.src = "img/close.png";
  closeModalImg.classList = "center";
  closeModal.appendChild(closeModalImg);
  closeModal.id = "close-modal";

  modalForm.append(titleDiv, technologiesDiv, addProjectBtn);
  modal.append(closeModal, modalForm);
  main.appendChild(modal);

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const titleLength = titleInput.value.length;
    const technologies = technologiesInput.value;
    const technologiesLength = technologies.length;
    const technologiesList = technologies.split(",");

    if (titleLength < 3 || titleLength > 30 || technologiesLength < 1) {
      if (titleLength < 3) {
        const titleError = document.createElement("p");
        titleError.classList.add("error");
        titleError.textContent =
          "The title must be at least 3 characters long.";
        titleInput.style.borderColor = "#AF0808";
        titleDiv.appendChild(titleError);
        titleInput.addEventListener("input", (event) => {
          if (event.target.value.length > 2) {
            resetInputState(titleInput, titleDiv);
          }
        });
      }
      if (titleLength > 30) {
        const titleError = document.createElement("p");
        titleError.classList.add("error");
        titleError.textContent = "The title must not exceed 30 characters.";
        titleInput.style.borderColor = "#AF0808";
        titleDiv.appendChild(titleError);
        titleInput.addEventListener("input", (event) => {
          if (event.target.value.length <= 30) {
            resetInputState(titleInput, titleDiv);
          }
        });
      }
      if (technologiesLength < 1) {
        const technologiesError = document.createElement("p");
        technologiesError.classList.add("error");
        technologiesError.textContent = "Please add some technologies.";
        technologiesInput.style.borderColor = "#AF0808";
        technologiesDiv.appendChild(technologiesError);
        technologiesInput.addEventListener("input", (event) => {
          if (event.target.value.length > 0) {
            resetInputState(technologiesInput, technologiesDiv);
          }
        });
      }
    } else {
      const newProject = {
        title: title,
        technologies: technologiesList,
      };

      data.main.projects.push(newProject);
      mainContainer.innerHTML = "";
      modal.remove();
      removeBlur();
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
  projects.id = "projects";
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList = "buttons";
  addProjectBtn.style.marginBottom = "84px";
  const buttonImg = document.createElement("img");
  buttonImg.src = "img/plus.png";
  buttonImg.classList = "center";
  const buttonText = document.createElement("p");
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
  div.style.backgroundImage = 'url("img/project-background.png")';
  div.style.height = "460px";
  div.style.width = "360px";
  div.style.borderRadius = "16px";
  div.style.position = "relative";
  const header = document.createElement("h2");
  header.classList = "projects-header";
  header.textContent = project.title;
  const ul = document.createElement("ul");
  ul.classList = "projects-ul";
  project.technologies.forEach((technology) => {
    const li = document.createElement("li");
    li.textContent = technology.toUpperCase();
    li.style.fontSize = "16px";
    ul.appendChild(li);
  });
  if (button) {
    const buttonImg = document.createElement("img");
    buttonImg.src = "img/delete.png";
    buttonImg.alt = "delete";
    const deleteButton = document.createElement("button");
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

function loadContactMe() {
  mainContainer.innerHTML = "";
  const formContainer = document.createElement("div");
  formContainer.id = "form-container";
  const formTitle = document.createElement("h1");
  formTitle.textContent = "Contact Me";
  const nameDiv = document.createElement("div");
  nameDiv.id = "name-div";
  const emailDiv = document.createElement("div");
  emailDiv.id = "email-div";
  const messageDiv = document.createElement("div");
  messageDiv.id = "message-div";
  const form = document.createElement("form");
  form.id = "contact-form";
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Your name";
  nameInput.required = true;
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "email@example.com";
  emailInput.required = true;
  const msgLabel = document.createElement("label");
  msgLabel.textContent = "Message";
  const msgInput = document.createElement("input");
  msgInput.type = "text";
  msgInput.id = "message";
  msgInput.name = "message";
  msgInput.placeholder = "Hello, my name is . . .";
  msgInput.required = true;
  const submitButton = document.createElement("button");
  submitButton.classList = "buttons";
  submitButton.type = "submit";
  const buttonText = document.createElement("p");
  buttonText.classList = "center";
  buttonText.textContent = "Send message";
  submitButton.appendChild(buttonText);
  const nameEmailDiv = document.createElement("div");
  nameEmailDiv.id = "name-email-div";
  nameDiv.append(nameLabel, nameInput);
  emailDiv.append(emailLabel, emailInput);
  nameEmailDiv.append(nameDiv, emailDiv);
  messageDiv.append(msgLabel, msgInput);
  form.append(formTitle, nameEmailDiv, messageDiv, submitButton);
  formContainer.appendChild(form);
  mainContainer.appendChild(formContainer);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const name = nameInput.value.length;
    const email = emailPattern.test(emailInput.value);
    const msg = msgInput.value.length;

    if (name < 3 || name > 20 || msg === 0 || msg > 200 || !email) {
      if (name < 3) {
        const nameError = document.createElement("p");
        nameError.classList.add("error");
        nameError.textContent = "The name must be at least 3 characters long.";
        nameInput.style.borderColor = "#AF0808";
        nameDiv.appendChild(nameError);
        nameInput.addEventListener("input", (event) => {
          if (event.target.value.length > 2) {
            resetInputState(nameInput, nameDiv);
          }
        });
      }
      if (name > 20) {
        const nameError = document.createElement("p");
        nameError.classList.add("error");
        nameError.textContent = "The name must not exceed 20 characters.";
        nameInput.style.borderColor = "#AF0808";
        nameDiv.appendChild(nameError);
        nameInput.addEventListener("input", (event) => {
          if (event.target.value.length <= 20) {
            resetInputState(nameInput, nameDiv);
          }
        });
      }
      if (msg === 0) {
        const msgError = document.createElement("p");
        msgError.classList.add("error");
        msgError.textContent = "The message cannot be empty.";
        msgInput.style.borderColor = "#AF0808";
        messageDiv.appendChild(msgError);
        emailInput.addEventListener("input", (event) => {
          if (event.target.value.length > 0) {
            resetInputState(emailInput, emailDiv);
          }
        });
      }
      if (msg > 200) {
        const msgError = document.createElement("p");
        msgError.classList.add("error");
        msgError.textContent = "The message must not exceed 100 characters.";
        msgInput.style.borderColor = "#AF0808";
        messageDiv.appendChild(msgError);
        emailInput.addEventListener("input", (event) => {
          if (event.target.value.length <= 200) {
            resetInputState(emailInput, emailDiv);
          }
        });
      }
      if (!email) {
        const emailError = document.createElement("p");
        emailError.classList.add("error");
        emailError.textContent = "Please enter a valid email address.";
        emailInput.style.borderColor = "#AF0808";
        emailDiv.appendChild(emailError);
        msgInput.addEventListener("input", (event) => {
          if (emailPattern.test(event.target.value)) {
            resetInputState(msgInput, messageDiv);
          }
        });
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
  inputElement.style.borderColor = "";
  const errorMessages = errorContainer.querySelectorAll(`.error`);
  errorMessages.forEach((error) => error.remove());
}

function loadAboutMe() {
  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.id = "about-me-container";
  const imgDiv = document.createElement("div");
  imgDiv.style.backgroundImage = 'url("img/male-desktop.png")';
  imgDiv.classList = "male-background";
  aboutMeContainer.appendChild(imgDiv);

  loadTitleAndPre(data.main.about.background, aboutMeContainer);
  loadTitleAndPre(data.main.about.hobbies, aboutMeContainer);

  const addContactMeBtn = document.createElement("button");
  addContactMeBtn.id = "contacte-me-button";
  addContactMeBtn.classList = "buttons";
  const buttonImg = document.createElement("img");
  buttonImg.src = "img/arrow-contact-me.png";
  buttonImg.classList = "center";
  const buttonText = document.createElement("p");
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
  messagesContener.id = "messages-contener";
  const messages = data.main.messages;
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
  homeContainer.id = "home-container";
  const imgDiv = document.createElement("div");
  imgDiv.style.backgroundImage = 'url("img/male-desktop.png")';
  imgDiv.classList = "male-background";
  const aboutMe = document.createElement("h1");
  aboutMe.textContent = data.main.home.title;
  const aboutMeP = document.createElement("p");
  aboutMeP.textContent = data.main.home.p;
  const mySkillsHeader = document.createElement("h1");
  mySkillsHeader.textContent = data.main.home.title2;
  const mySkills = document.createElement("div");
  const homeDescContainer = document.createElement("div");
  const carousel = loadCarousel();

  homeDescContainer.append(aboutMe, aboutMeP, mySkillsHeader);
  homeContainer.append(imgDiv, homeDescContainer, mySkills);
  mainContainer.appendChild(homeContainer);
  loadSkills(homeContainer);
  // if (data.main.projects.length > 0) {
  //   loadCarousel();
  // }
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
  // mainContainer.appendChild(carouselContainer);
  if (data.main.projects.length > 3) {
    const carouselButtonsContainer = document.createElement("div");
    carouselButtonsContainer.id = "carousel-buttons-container";
    const carouselButtonLeft = document.createElement("button");
    carouselButtonLeft.classList.add("carousel-buttons");
    const carouselButtonRight = document.createElement("button");
    carouselButtonRight.classList.add("carousel-buttons");
    const buttonLeftImg = document.createElement("img");
    buttonLeftImg.src = "img/carousel-left.png";
    buttonLeftImg.classList = "center";
    const buttonRightImg = document.createElement("img");
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
  $div.id = "footer-logo";
  const $copyrights = document.getElementById("copyright");
  $email.textContent = data.footer.email;
  $phone.textContent = data.footer.phone;
  $copyrights.append($email, $phone, $div);
  loadLogo("footer-logo", false);
}
