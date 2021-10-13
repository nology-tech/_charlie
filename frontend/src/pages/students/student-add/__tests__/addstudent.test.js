import { render, screen } from '@testing-library/react';
import StudentForm from '../studentform/studentForm';

it ('should render all form elements on the page', () => {
                render(<StudentForm />)
              
                const firstNameInput = screen.getByTestId('firstName')
                const lastNameInput = screen.getByTestId('lastName')
                const enrolledOn = screen.getByTestId('enrolledOn')
                const githubAccount = screen.getByTestId('githubAccount')
                const portfolioLink = screen.getByTestId('portfolioLink')
                const studentThumb = screen.getByTestId('studentThumb')
                const cvUpload = screen.getByTestId('cvUpload')
                
                const cancelBtn = screen.getByRole('button', { name: /cancel/i })
                const saveBtn = screen.getByRole('button', { name: /save/i })
              
                expect(firstNameInput).toBeInTheDocument()
                expect(lastNameInput).toBeInTheDocument()
                expect(enrolledOn).toBeInTheDocument()
                expect(githubAccount).toBeInTheDocument()
                expect(portfolioLink).toBeInTheDocument()
                expect(studentThumb).toBeInTheDocument()
                expect(cvUpload).toBeInTheDocument()
                
                expect(cancelBtn).toBeInTheDocument()
                expect(saveBtn).toBeInTheDocument()
})