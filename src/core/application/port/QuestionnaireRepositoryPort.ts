import { Context, Questionnaire } from "../model";

export type QuestionnaireRepositoryPort = {
  getQuestionnaires: () => Promise<Questionnaire[]>;
  getQuestionnaire: (id: number) => Promise<Questionnaire>;
  getQuestionnaireFromPogues: (poguesId: string) => Promise<Questionnaire>;
  addQuestionnaire: (questionnaire: Questionnaire) => Promise<Questionnaire>;
  deleteQuestionnaire: (id: number) => Promise<void>;
  editQuestionnaire: (questionnaire: Questionnaire) => Promise<Questionnaire>;
  getContexts: () => Promise<Context[]>;
};
