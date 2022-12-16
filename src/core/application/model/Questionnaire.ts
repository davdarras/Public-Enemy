export type Questionnaire = {
  id: number;
  poguesId: string;
  label: string;
  modes: string[];
  context: string;
  surveyUnitData: File | undefined;
};
