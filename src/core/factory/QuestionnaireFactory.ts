import { QuestionnaireRepositoryPort } from "core/application/port";
import {
  createQuestionnaireUseCase,
  QuestionnaireUseCaseType,
} from "core/application/usecase";
import { createQuestionnaireRepository } from "core/infrastructure";

/**
 * Repository factory
 * @returns questionnaire repository factory
 */
export const makeQuestionnaireRepository = (): QuestionnaireRepositoryPort =>
  createQuestionnaireRepository(process.env.REACT_APP_API_URL);

/**
 * Use case factory
 * @returns questionnaire usecase
 */
export const makeQuestionnaireUseCase = (): QuestionnaireUseCaseType =>
  createQuestionnaireUseCase(makeQuestionnaireRepository());
