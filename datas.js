const data = {
  links: ["HOME", "PROJECTS", "ABOUT", "CONTACT", "MESSAGES"],
  logo: {
    golden: "ITP",
    silver: "ortfolio",
    copyright: " © 2024",
  },
  headerTitle: {
    home: {
      title: "JAN KOWALSKI",
      p: "WEB-DESIGNER",
    },
    projects: {
      title: "My Projects",
      p: "MADE WITH LOVE",
    },
    about: {
      title: "About Me",
      p: "IT’S A-ME, JAN!",
    },
    contact: {
      title: "Contact Me",
      p: "SAY HELLO TO ME",
    },
    messages: {
      title: "Messages",
      p: "MESSAGE FROM THE INTERESTED PERSON",
    },
  },
  footer: {
    email: "jan_kowalski@gmail.com",
    phone: "+123 456 789",
  },
  main: {
    home: {
      link: "HOME",
      img: "img/male-desktop.png",
      title: "About me",
      p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    projects: {
      btnSign: "img/plus.png",
      btnText: "Add project",
    },
    about: {
      background: {
        title: "My background",
        p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`,
      },
      hobbies: {
        img: "img/male-desktop.png",
        title: "My hobbies and interests",
        p: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla`,
        btnSign: "img/arrow-contact-me.png",
        btnText: "Contact me",
      },
    },
    contact: {
      link: "CONTACT",
      title: "CONTACT ME",
      p: "SAY HELLO TO ME",
    },
    messages: {
      link: "MESSAGES",
      title: "MESSAGES",
      p: "MESSAGE FROM THE INTERESTED PERSON",
    },
  },
};

// const datas = [
//
//   {
//
//   },
//   {
//
//   },
//   {
//
//   },
//   {
//
//   },
// ];

const skills = [
  { name: "HTML", img: "img/html.png" },
  {
    name: "CSS",
    img: "img/css.png",
    exp: "3 years",
  },
  {
    name: "JavaScript",
    img: "img/js.png",
    exp: "3 years",
  },
  {
    name: "Git",
    img: "img/git.png",
    exp: "3 years",
  },
  {
    name: "Figma",
    img: "img/figma.png",
    exp: "3 years",
  },
  {
    name: "Chrome",
    img: "img/chrome/png",
    exp: "3 years",
  },
  {
    name: "VSCode",
    img: "img/vsc.png",
    exp: "3 years",
  },
  {
    name: "GitHub",
    img: "img/github.png",
    exp: "3 years",
  },
];

const background = [
  "My background",
  [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
  ],
];

const hobbies = [
  "My hobbies and interests",
  [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
    "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
  ],
];

export { data, skills, background, hobbies };
