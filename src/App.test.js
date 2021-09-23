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