import { Context, Questionnaire } from "core/application/model";
import { QuestionnaireRepositoryPort } from "core/application/port";
import { deleteRequest, getRequest } from "core/utils/http";
import { postRequestMultiPart } from "core/utils/http/fetcher";

/**
 * Get Questionnaire Repository
 * @param apiUrl questionnaire CRUD API URL
 * @returns questionnaire repository
 */
export function createQuestionnaireRepository(
  apiUrl: string
): QuestionnaireRepositoryPort {
  const getQuestionnaires = async (): Promise<Questionnaire[]> => {
    return getRequest<Questionnaire[]>(apiUrl + "/questionnaires");
  };

  const getQuestionnaire = async (id: number): Promise<Questionnaire> => {
    return getRequest<Questionnaire>(apiUrl + "/questionnaires/" + id);
  };

  const getQuestionnaireFromPogues = async (
    poguesId: string
  ): Promise<Questionnaire> => {
    return getRequest<Questionnaire>(
      apiUrl + "/questionnaires/pogues/" + poguesId
    );
  };

  const addQuestionnaire = async (
    questionnaire: Questionnaire
  ): Promise<Questionnaire> => {
    const formData = new FormData();
    const questionnaireRest = {
      poguesId: questionnaire.poguesId,
      context: questionnaire.context,
    };
    formData.append("questionnaire", JSON.stringify(questionnaireRest));

    if (questionnaire.surveyUnitData) {
      formData.append("surveyUnitData", questionnaire.surveyUnitData);
    }

    return postRequestMultiPart<Questionnaire>(
      apiUrl + "/questionnaires/add",
      formData
    );
  };

  const editQuestionnaire = async (
    questionnaire: Questionnaire
  ): Promise<Questionnaire> => {
    const formData = new FormData();
    formData.append("context", JSON.stringify(questionnaire.context));

    if (questionnaire.surveyUnitData) {
      formData.append("surveyUnitData", questionnaire.surveyUnitData);
    }

    return postRequestMultiPart<Questionnaire>(
      apiUrl + "/questionnaires/" + questionnaire.id,
      formData
    );
  };

  const deleteQuestionnaire = async (id: number): Promise<void> => {
    deleteRequest<void>(apiUrl + "/questionnaires/" + id + "/delete");
  };

  const getContexts = async (): Promise<Context[]> => {
    return getRequest<Context[]>(apiUrl + "/contexts");
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
