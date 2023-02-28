import { render, screen } from "ui/components/test/test-utils";
import { describe, test } from "vitest";
import { SurveyUnitListPage } from ".";

describe("Survey Units tests", () => {
  /*afterEach(() => {
    vi.restoreAllMocks()
  })*/

  test("should show Error title all the time", () => {
    render(<SurveyUnitListPage></SurveyUnitListPage>);
    //expect(screen.getByText(/Actions/i)).toBeDefined();
    screen.debug();
  });
  /*
  test("should notify error", () => {
    render(<SurveyUnitListPage></SurveyUnitListPage>);
    vi.spyOn(SurveyUnitListPage., 'getSurveyUnitsData').mockImplementation(() => Promise.reject(...))

    expect(screen.getByText(/Actions/i)).toBeDefined();
  });*/
});
