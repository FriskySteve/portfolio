import { data, skills, background, hobbies } from "./datas.js";

let active = "HOME";
const mainContainer = document.getElementById("main-container");

loadList(data.links, "header-links");
loadLogo("header-logo", true);
loadTitleAndP(data.headerTitle.home, "title-container");
loadFooter();
// loadHome();
// loadAboutMe();
// loadMessages();
// loadContactMe();
loadProjects();

function loadModal() {
  const modal = document.createElement("div");
  const modalForm = document.createElement("form");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Project title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "project title";
  titleInput.placeholder = "Project title";
  titleInput.required = true;

  const technologiesLabel = document.createElement("label");
  technologiesLabel.textContent = "Technologies";

  const technologiesInput = document.createElement("input");
  technologiesInput.type = "text";
  technologiesInput.name = "techonologies";
  technologiesInput.placeholder = "html, css, javascript";
  technologiesInput.required = true;

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

  modalForm.append(
    titleLabel,
    titleInput,
    technologiesLabel,
    technologiesInput,
    addProjectBtn
  );

  modal.appendChild(modalForm);
  mainContainer.appendChild(modal);
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const technologies = technologiesInput.value;
    const technologiesList = technologies.split(",");

    const newProject = {
      title: title,
      technologies: technologiesList,
    };

    data.main.projects.push(newProject);
    mainContainer.innerHTML = "";
    loadProjects();
  });
}

function loadProjects() {
  const projects = document.createElement("div");
  projects.id = "projects";
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList = "buttons";
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
      loadProject(project, projectsContainer);
    });
  } else projectsContainer.textContent = "There are no projects to display";
  projects.append(addProjectBtn, projectsContainer);
  mainContainer.appendChild(projects);
}

function loadProject(project, container) {
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
    li.textContent = technology;
    ul.appendChild(li);
  });
  const buttonImg = document.createElement("img");
  buttonImg.src = "img/delete.png";
  buttonImg.alt = "delete";
  const deleteButton = document.createElement("button");
  deleteButton.classList = "delete-button";
  deleteButton.appendChild(buttonImg);
  div.append(header, ul, deleteButton);
  container.appendChild(div);
  deleteButton.addEventListener("click", () => {
    data.main.projects = data.main.projects.filter(
      (element) => element != project
    );
    div.remove();
    mainContainer.innerHTML = "";
    loadProjects();
  });
}

function loadContactMe() {
  const form = document.createElement("form");
  form.id = "contactForm";

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
  submitButton.type = "submit";
  submitButton.textContent = "Send message";

  form.append(
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    msgLabel,
    msgInput,
    submitButton
  );
  mainContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = msgInput.value;

    const newMessage = {
      name: name,
      email: email,
      message: message,
    };

    data.main.messages.push(newMessage);

    // Możemy również zresetować formularz po wysłaniu
    form.reset();
    loadMessages();
  });
}

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
    li.addEventListener("click", (event) => {
      active = li.textContent;
    });
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
