import "./darkmodeswitch.scss";
import { FaSun, FaMoon } from 'react-icons/fa';
import Darkmode from 'darkmode-js';

const darkmode =  new Darkmode();
const toggleDarkMode = () => darkmode.toggle();

const DarkModeSwitch = () => {
    return (
      <div className="react-switch d-flex text-white justify-content-center align-items-center">
          <label class="react-switch__label" htmlFor="react-switch-new">
            Dark Mode: 
          </label>
          
          &nbsp;<FaSun />
          <input type="checkbox" className="react-switch-checkbox" 
          id="react-switch-new" onClick={() => toggleDarkMode()}  />

          <label className="react-switch-label" htmlFor={`react-switch-new`}>
              <span className={`react-switch-button`} />
          </label>
          
          &nbsp;<FaMoon />
      </div>
    );
}

export default DarkModeSwitch;