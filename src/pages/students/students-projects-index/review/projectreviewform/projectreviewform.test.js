import ProjectReviewForm from "./projectreviewform";
import { render, screen } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";

// it("should show error message when summary is not provided", () => {
//   render(<ProjectReviewForm />)

//   const summary = screen.getByRole('textbox', {name: /summary/i})
//   userEvent.type(summary, "")

//   const alert = screen.getByText("*Required");
//   expect(alert).toBeTruthy();
// })
