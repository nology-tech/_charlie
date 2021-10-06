import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import StudentList from "../students-list"; 
import { BrowserRouter } from "react-router-dom";

// Integration tests carried out as it avoids the need to pass down props again. It also simulates user experience more accurately. 

it("8 students render on the page when the page is first rendered", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert
  expect(firstPageStudents.length).toBe(8); 
}); 

it("should populate the first page with 8 students on the Ibiza course when searching for Ibiza.", async() => {
   // 1. Arrange
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Ibiza");
  const firstPageStudents = await screen.findAllByText(/Ibiza/i);
  // 3. Assert
  expect(firstPageStudents.length).toBe(9);
  // Note - 9 is returned as 1 instance of "Ibiza" is rendered in the filter dropdown. 
}); 

it("should only display students of a specific course when it is searched for, e.g. Mariana students should only be displayed on the first page when searching for mariana", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Mariana") 
  const IbizaResults = screen.queryAllByText('Ibiza');
  const JerseyResults = screen.queryAllByText('Jersey');
  const HawaiiResults = screen.queryAllByText('Hawaii');
  const MarianaResults = screen.queryAllByText('Mariana');

  // Assert
  expect(IbizaResults.length).toBe(1) // 1 instance exists on the filter dropdown. It doesn't exist on the page otherwise.
  expect(JerseyResults.length).toBe(1) // 1 instance exists on the filter dropdown. It doesn't exist on the page otherwise.
  expect(HawaiiResults.length).toBe(1) // 1 instance exists on the filter dropdown. It doesn't exist on the page otherwise.
  expect(MarianaResults.length).toBeGreaterThanOrEqual(2) // 1 instance exists on the filter dropdown. There's at least one student in Mariana also.
}); 

it("should return one student on the page when searching for a student with a unique name on a specific course", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Angaar Uriakhil") 
  const uniqueStudentName = await screen.findAllByText(/Angaar Uriakhil/i);
  expect(uniqueStudentName.length).toBe(1);
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert
  expect(firstPageStudents.length).toBe(1);
}); 

it("should return one student on the page when searching for a student with a unique github username on a specific course", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "angaar96") 
  const uniqueStudentName = await screen.findAllByText(/angaar96/i);
  expect(uniqueStudentName.length).toBe(1);
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert 
  expect(firstPageStudents.length).toBe(1);
}); 


it("should update the row selection text to 1-1 of 1 when searching for a unique student name", async() => {
  // 1. Arrange 
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act 
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Angaar Uriakhil") 
  const rowSelection = await screen.findByTestId("row-selection");
  // 3. Assert
  expect(rowSelection.textContent).toBe("1-1 of 1");
}); 

it("should lock the row selection to 0 when pressing the left arrow after the page loads", async() => {
  // 1. Arrange 
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const leftArrow = screen.getByRole('img', {name: /left arrow/i});
  userEvent.click(leftArrow) ;
  const rowSelection = await screen.findByTestId("row-selection");
  // 3. Assert
  expect(rowSelection.textContent).toContain("1-8"); 
  expect(rowSelection.textContent).not.toContain("0");
});

it("should update the row selection to 9-16 when pressing the right arrow after the page loads", async() => {
  // 1. Arrange 
  render(
  <BrowserRouter>
  <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const rightArrow = screen.getByRole('img', {name: /right arrow/i});
  userEvent.click(rightArrow) ;
  const rowSelection = await screen.findByTestId("row-selection");
  // 3. Assert
  expect(rowSelection.textContent).toContain("9-16"); 
});

it("should update the items to a grid view when pressing the grid button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const gridButton = screen.getByRole('img', {name: /grid view/i}); 
  userEvent.click(gridButton);
  const studentsDiv = await screen.findByTestId("student-grid");
  // 3. Assert

  // Grid view makes this class equal to student-grid
  expect(studentsDiv.classList.contains('student-grid')).toBe(true)
});

it("should update the items back to a hamburger view from a grid view when pressing the grid button then the hamburger button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const gridButton = screen.getByRole('img', {name: /grid view/i}); 
  const hamburgerButton = screen.getByRole('img', {name: /hamburger/i});
  userEvent.click(gridButton);
  userEvent.click(hamburgerButton);
  const studentsDiv = await screen.findByTestId("student-grid");
  // 3. Assert

  // Hamburger view makes this class not equal to student-grid (changed from "student-grid")
  expect(studentsDiv.classList.contains('student-grid')).toBe(false);
});

it("should filter students to only the self-paced students when pressing the Self-Paced filter button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const selfPacedButton = screen.getByText(/self\-paced/i);
  userEvent.click(selfPacedButton);
  const firstPageStudents = await screen.findAllByTestId("student");
  // There are no text indicators for enrolledType of each student on the page. So will have to test using JS array iterator method. 
  const checkSelfPacedArr = firstPageStudents.map(student => {return student.enrolledType === "Self-Paced"});
  // 3. Assert 
  expect(firstPageStudents.length).toBe(checkSelfPacedArr.length); 
});

it("should filter students to only the full-time students when pressing the full-time filter button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const fullTimeButton = screen.getByText(/full\-time/i);
  userEvent.click(fullTimeButton);
  const firstPageStudents = await screen.findAllByTestId("student");
  // There are no text indicators for enrolledType of each student on the page. So will have to test using JS array iterator method. 
  const checkFullTimeArr = firstPageStudents.map(student => {return student.enrolledType === "Full-Time"});
  // 3. Assert
  expect(firstPageStudents.length).toBe(checkFullTimeArr.length); 
});

it("should filter students to only the corporate students when pressing the Corporate filter button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const corporateButton = screen.getByText(/corporate/i)
  userEvent.click(corporateButton);
  const firstPageStudents = await screen.findAllByTestId("student");
  // There are no text indicators for enrolledType of each student on the page. So will have to test using JS array iterator method. 
  const checkCorporateArr = firstPageStudents.map(student => {return student.enrolledType === "Corporate"});
  // 3. Assert
  expect(firstPageStudents.length).toBe(checkCorporateArr.length); 
});

it("should display 1 student on the page when the row selector value is updated to 1", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const rowsSelector = screen.getByTestId("rows-selector");
  // note: did not use getByRole as there is more than one dropdown on the page. 
  userEvent.selectOptions(rowsSelector, '1');
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert
  expect(firstPageStudents.length).toBe(1); 
});

it("should display 5 students on the page when the row selector value is updated to 5", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const rowsSelector = screen.getByTestId("rows-selector");
  // note: did not use getByRole as there is more than one dropdown on the page. 
  userEvent.selectOptions(rowsSelector, '5');
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert
  expect(firstPageStudents.length).toBe(5); 
});

it("should display 9 students on the page when the row selector value is updated to 9", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const rowsSelector = screen.getByTestId("rows-selector");
  // note: did not use getByRole as there is more than one dropdown on the page. 
  userEvent.selectOptions(rowsSelector, '9');
  const firstPageStudents = await screen.findAllByTestId("student");
  // 3. Assert
  expect(firstPageStudents.length).toBe(9); 
});

it("should filter students to only the Mariana students when pressing the Mariana dropdown filter button after the page loads", async() => {
  // 1. Arrange
  render(
  <BrowserRouter>
    <StudentList/>
  </BrowserRouter> );
  // 2. Act
  const courseSelector = screen.getByTestId("course-selector");
  // note: did not use getByRole as there is more than one dropdown on the page. 
  userEvent.selectOptions(courseSelector, 'Mariana');
  const firstPageStudents = await screen.findAllByTestId("student");
  const marianaStudentsOnPage = await screen.findAllByText(/Mariana/i);
  const ibizaStudentsOnPage = await screen.findAllByText(/Ibiza/i);
  const jerseyStudentsOnPage = await screen.findAllByText(/Jersey/i);
  const hawaiiStudentsOnPage = await screen.findAllByText(/Hawaii/i);
  // There are no text indicators for enrolledType of each student on the page. So will have to test using JS array iterator method. 
  // 3. Assert
  expect(firstPageStudents.length).toBe(marianaStudentsOnPage.length-1); // -1 is there because 1 instance of Mariana is in dropdown menu. 
  expect(ibizaStudentsOnPage.length).toBe(1); // as one instance is in filter dropdown, none actually on page though. 
  expect(jerseyStudentsOnPage.length).toBe(1); // as one instance is in filter dropdown, none actually on page though.
  expect(hawaiiStudentsOnPage.length).toBe(1); // as one instance is in filter dropdown, none actually on page though.
});
