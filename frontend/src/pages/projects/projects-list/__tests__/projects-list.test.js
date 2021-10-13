import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectList from "../projects-list";
import { BrowserRouter } from "react-router-dom";
import { within } from "@testing-library/dom";

// Integration tests carried out as it avoids the need to pass down props again. It also simulates user experience more accurately.

it("should render 8 projects on the page when the page is first rendered", async () => {
    // 1. Arrange
    render(
        <BrowserRouter>
            <ProjectList />
        </BrowserRouter>
    );
    // 2. Act
    const projectsArr = await screen.findAllByTestId("project");
    // 3. Assert
    expect(projectsArr.length).toBe(8);
});

it("should render every _nology project on the page when the page is first rendered", async () => {
    // 1. Arrange
    render(
        <BrowserRouter>
            <ProjectList />
        </BrowserRouter>
    );
    // 2. Act
    const preCoursework = await screen.findByText("Pre-coursework");
    const portfolio = await screen.findByText("Portfolio");
    const calculator = await screen.findByText("Calculator");
    const jsGame = await screen.findByText("JS Game");
    const morseCode = await screen.findByText("Morse-Code");
    const brewdogApi = await screen.findByText("Brewdog-API");
    const clientProject = await screen.findByText("Client Project");
    const javaGame = await screen.findByText("Client Project");
    // 3. Assert
    expect(preCoursework).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
    expect(calculator).toBeInTheDocument();
    expect(jsGame).toBeInTheDocument();
    expect(morseCode).toBeInTheDocument();
    expect(brewdogApi).toBeInTheDocument();
    expect(clientProject).toBeInTheDocument();
    expect(javaGame).toBeInTheDocument();
});

it("should filter projects to only the HTML/CSS projects when pressing the HTML/CSS button after the page loads", async () => {
    // 1. Arrange
    render(
        <BrowserRouter>
            <ProjectList />
        </BrowserRouter>
    );
    // 2. Act
    const navigation = screen.getByRole("navigation");
    const htmlCssButton = within(navigation).getByText(/html\/css/i);
    userEvent.click(htmlCssButton);
    const htmlCssTextArr = await screen.findAllByText("HTML/CSS");
    // 3. Assert
    expect(htmlCssTextArr.length).toBe(3);
    // 2 projects with the text and 1 label, therefore should be 3.
});

it("should filter projects to only the Javascript projects when pressing the Javascript button after the page loads", async () => {
    // 1. Arrange
    render(
        <BrowserRouter>
            <ProjectList />
        </BrowserRouter>
    );
    // 2. Act
    const navigation = screen.getByRole("navigation");
    const javascriptButton = within(navigation).getByText(/javascript/i);
    userEvent.click(javascriptButton);
    const javascriptTextArr = await screen.findAllByText("Javascript");
    // 3. Assert
    expect(javascriptTextArr.length).toBe(4);
    // 3 projects with the text and 1 label, therefore should be 4.
});

it("should filter projects to only the React projects when pressing the React button after the page loads", async () => {
    // 1. Arrange
    render(
        <BrowserRouter>
            <ProjectList />
        </BrowserRouter>
    );
    // 2. Act
    const navigation = screen.getByRole("navigation");
    const reactButton = within(navigation).getByText(/react/i);
    userEvent.click(reactButton);
    const reactTextArr = await screen.findAllByText("React");
    // 3. Assert
    expect(reactTextArr.length).toBe(3);
    // 2 projects with the text and 1 label, therefore should be 3.
});

