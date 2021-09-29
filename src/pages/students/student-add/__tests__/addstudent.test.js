import { render, screen } from '@testing-library/react';
import StudentForm from '../studentform/studentForm';
import userEvent from '@testing-library/user-event';

// Positive (valid) and negative tests (invalid)
/* 
it ('Should redirect to the student list when given valid inputs', () => {

})
 */
it ('should show error messages when a student name is not provided', () => {
        // act
        render(<StudentForm />);

        // arrange
        const nameInput = screen.getByRole("textbox", { name: /first name/i });
        userEvent.type(nameInput, "");

        const lastNameInput = screen.getByRole("textbox", { name: /last name/i });
        userEvent.type(lastNameInput, "smith");

/*         const enrolledOnInput = screen.getByRole("textbox", { name: /enrolled on/i });
        userEvent.type(enrolledOnInput, "ibiza");
 */
        const githubAccountInput = screen.getByRole("textbox", { name: /github account/i });
        userEvent.type(githubAccountInput, "github.com");

        const portfolioLinkInput = screen.getByRole("textbox", { name: /portfolio link/i });
        userEvent.type(portfolioLinkInput, "whatever.com");

                    // run a click on sign in button
        userEvent.click(screen.getByRole("button", { name: /save/i }));

        // assert
        const alert = screen.getByText("*Required");
        expect(alert).toBeTruthy();
})


