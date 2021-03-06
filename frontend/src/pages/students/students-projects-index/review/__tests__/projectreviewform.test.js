import ProjectReviewForm from "../projectreviewform/projectreviewform";
import { render, screen } from "@testing-library/react";

it("should render the basic fields", () => {
  render(<ProjectReviewForm />)

  const cancelBtn = screen.getByRole('button', { name: /cancel/i })
  const saveBtn = screen.getByRole('button', { name: /save/i })

  const moduleKnowledgeInput = screen.getByTestId('moduleKnowledge')
  const htmlCssKnowledgeInput = screen.getByTestId('HTML-CSSKnowledge')
  const jsKnowledgeInput = screen.getByTestId('jsKnowledge')
  const summaryTextarea = screen.getByTestId('summary')

  const moduleHeading = screen.getByRole('heading', { name: /knowledge of module/i })
  const htmlCssHeading = screen.getByRole('heading', { name: /quality of html\/css/i })
  const jsHeading = screen.getByRole('heading', { name: /quality of javascript/i })
  const summaryHeading = screen.getByRole('heading', { name: /summary/i })

  expect(cancelBtn).toBeInTheDocument()
  expect(saveBtn).toBeInTheDocument()
  expect(moduleKnowledgeInput).toBeInTheDocument()
  expect(htmlCssKnowledgeInput).toBeInTheDocument()
  expect(jsKnowledgeInput).toBeInTheDocument()
  expect(summaryTextarea).toBeInTheDocument()

  expect(moduleHeading).toBeInTheDocument()
  expect(htmlCssHeading).toBeInTheDocument()
  expect(jsHeading).toBeInTheDocument()
  expect(summaryHeading).toBeInTheDocument()

})