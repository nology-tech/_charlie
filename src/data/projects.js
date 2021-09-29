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
    hasStarted: false
  },
  {
    id: 1,
    title: "Portfolio",
    imgSrc: Portfolio,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    hasStarted:  false
  },
  {
    id: 2,
    title: "Morse Code Translator",
    imgSrc: Morse,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    hasStarted: false
  },
  { 
    id: 3,
    title: "Punk Api",
    imgSrc: PunkApi,
    languagesUsed: ["React"],
    hasStarted: false
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    imgSrc: JSgame,
    languagesUsed: ["HTML", "CSS", "JavaScript"],
    hasStarted: false
  }

]

export default projects