import Calculator from "../assets/images/calculator.png";
import Portfolio from "../assets/images/portfolio.png";
import JSgame from "../assets/images/js-game.png";
import Morse from "../assets/images/morse-code-translator.png";
import ClientProject from "../assets/images/client-project.png";
import PunkApi from "../assets/images/punk-api.png";

const projects = [
  {
    id: 0,
    title: "Calculator",
    imgSrc: Calculator,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: true,
    reviewed: false,
    reviews:[]
  },
  {
    id: 1,
    title: "Portfolio",
    imgSrc: Portfolio,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: false,
    reviewed: false,
    reviews:[]
  },
  {
    id: 2,
    title: "Morse Code Translator",
    imgSrc: Morse,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: true,
    reviewed: false,
    reviews:[]
  },
  { 
    id: 3,
    title: "Punk API",
    imgSrc: PunkApi,
    languagesUsed: ["React"],
    reviewNeeded: true,
    reviewed: false,
    reviews:[]
  },
  {
    id: 4,
    title: "Javascript Game",
    imgSrc: JSgame,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: false,
    reviewed: true,
    reviews:[
      "Good work",
      "This can be challenging"
    ]
  },
  {
    id: 5,
    title: "Client Project",
    imgSrc: ClientProject,
    languagesUsed: ["React"],
    reviewNeeded: false,
    reviewed: false,
    reviews:[]
  },
  {
    id: 6,
    title: "Pre-Coursework",
    imgSrc: ClientProject,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: false,
    reviewed: false,
    reviews:[]
  },
  {
    id: 7,
    title: "OOP Text Game",
    imgSrc: ClientProject,
    languagesUsed: ["Java"],
    reviewNeeded: false,
    reviewed: false,
    reviews:[]
  },
  {
    id: 8,
    title: "Ticket Tracker",
    imgSrc: ClientProject,
    languagesUsed: ["React"],
    reviewNeeded: false,
    reviewed: false,
    reviews:[]
  }
];

export default projects;