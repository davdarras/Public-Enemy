import { Context, Questionnaire } from "../model";
import { QuestionnaireRepositoryPort } from "../port";

export type QuestionnaireUseCaseType = {
  getQuestionnaires: () => Promise<Questionnaire[]>;
  getQuestionnaire: (id: number) => Promise<Questionnaire>;
  getQuestionnaireFromPogues: (poguesId: string) => Promise<Questionnaire>;
  addQuestionnaire: (questionnaire: Questionnaire) => Promise<Questionnaire>;
  deleteQuestionnaire: (id: number) => Promise<void>;
  editQuestionnaire: (questionnaire: Questionnaire) => Promise<Questionnaire>;
  getContexts: () => Promise<Context[]>;
};

/**
 * Create the use case for questionnaire
 * @param questionnaireRepository
 * @returns questionnaire use case
 */
export function createQuestionnaireUseCase(
  questionnaireRepository: QuestionnaireRepositoryPort
): QuestionnaireUseCaseType {
  /**
   * Get all questionnaires
   * @returns promise of all questionnaires
   */
  const getQuestionnaires = (): Promise<Questionnaire[]> => {
    return questionnaireRepository.getQuestionnaires();
  };

  /**
   * Get questionnaire by id
   * @param id questionnaire id
   * @returns promise of one questionnaire
   */
  const getQuestionnaire = (id: number): Promise<Questionnaire> => {
    return questionnaireRepository.getQuestionnaire(id);
  };

  /**
   * Get questionnaire from pogues
   * @param poguesId
   * @returns promise of one questionnaire
   */
  const getQuestionnaireFromPogues = (
    poguesId: string
  ): Promise<Questionnaire> => {
    return questionnaireRepository.getQuestionnaireFromPogues(poguesId);
  };

  /**
   * Save a new questionnaire
   * @param questionnaire
   * @returns promise of added questionnaire
   */
  const addQuestionnaire = (
    questionnaire: Questionnaire
  ): Promise<Questionnaire> => {
    return questionnaireRepository.addQuestionnaire(questionnaire);
  };

  /**
   * Update a questionnaire
   * @param questionnaire questionnaire to update
   * @returns promise of updated questionnaire
   */
  const editQuestionnaire = (
    questionnaire: Questionnaire
  ): Promise<Questionnaire> => {
    return questionnaireRepository.editQuestionnaire(questionnaire);
  };

  /**
   * Delete questionnaire
   * @param id if od questionnaire to delete
   */
  const deleteQuestionnaire = (id: number): Promise<void> => {
    return questionnaireRepository.deleteQuestionnaire(id);
  };

  /**
   * Get all contexts
   * @returns all contexts
   */
  const getContexts = (): Promise<Context[]> => {
    return questionnaireRepository.getContexts();
  };

  return {
    getQuestionnaires,
    getQuestionnaire,
    getQuestionnaireFromPogues,
    addQuestionnaire,
    deleteQuestionnaire,
    editQuestionnaire,
    getContexts,
  };
}
