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
  },
  {
    id: 1,
    title: "Portfolio",
    imgSrc: Portfolio,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: false,
    reviewed: false,
  },
  {
    id: 2,
    title: "Morse Code Translator",
    imgSrc: Morse,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: true,
    reviewed: false,
  },
  { 
    id: 3,
    title: "Punk API",
    imgSrc: PunkApi,
    languagesUsed: ["React"],
    reviewNeeded: true,
    reviewed: false,
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    imgSrc: JSgame,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    reviewNeeded: false,
    reviewed: true,
  },
  {
    id: 5,
    title: "Client Project",
    imgSrc: ClientProject,
    languagesUsed: ["React"],
    reviewNeeded: false,
    reviewed: false,
  },
];

export default projects;