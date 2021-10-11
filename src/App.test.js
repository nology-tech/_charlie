import App from './App';
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

it("Should render the navbar", () => {
    render(<App />);
    
    const pageRegexes = [/dashboard/i, /students/i, /projects/i, /enrollment/i, /settings/i];
    
    pageRegexes.forEach(regex => {
      const navLink = screen.getByRole("link", { name: regex });
      expect(navLink).toBeInTheDocument();
    });
    
    const logo = screen.getByAltText('logo');
    expect(logo.src).toContain("/Logo.png");
});

it("On clicking the links they go the respective pages", () => {
  render(<App />);
  const pageRegexes = [
    [/dashboard/i, "/" ], 
    [/students/i, "/students"], 
    [/projects/i, "/projects"], 
    [/enrollment/i, "/enrollment"], 
    [/settings/i, "/settings"]
  ];
  pageRegexes.forEach(regex => {
    const navLink = screen.getByRole("link", { name: regex[0] });
    userEvent.click(navLink)
    expect(global.window.location.pathname).toContain(regex[1]);
  })
})


