import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { simpleQuestionnaire } from "test/mock/questionnaire";
import { surveyContexts } from "test/mock/surveyContext";
import { notifySpy, renderWithProviders } from "test/test-utils";
import { vi } from "vitest";
import { QuestionnaireAddPage } from "./QuestionnaireAddPage";

describe("QuestionnaireAddPage", () => {
  const addQuestionnaire = vi.fn(() => Promise.resolve(simpleQuestionnaire));
  const fetchSurveyContexts = vi.fn(() => Promise.resolve(surveyContexts));
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: (
          <QuestionnaireAddPage
            addQuestionnaire={addQuestionnaire}
            fetchSurveyContexts={fetchSurveyContexts}
          />
        ),
      },
    ],
    { initialEntries: ["/"], initialIndex: 0 }
  );

  test("should show error when no location state defined", () => {
    renderWithProviders(<RouterProvider router={router} />);
    expect(notifySpy).toHaveBeenCalledWith({
      message: "Questionnaire inexistant",
      type: "error",
    });
  });
});
