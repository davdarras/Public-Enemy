import { SurveyUnitRepositoryPort } from "core/application/port";
import {
  createSurveyUnitUseCase,
  SurveyUnitUseCaseType,
} from "core/application/usecase";
import { createSurveyUnitRepository } from "core/infrastructure";
import { getEnvVar } from "core/utils/env";

/**
 * Repository factory
 * @returns surveyUnit repository factory
 */
export const makeSurveyUnitRepository = (): SurveyUnitRepositoryPort =>
  createSurveyUnitRepository(getEnvVar("VITE_API_URL"));

/**
 * Use case factory
 * @returns surveyUnit usecase
 */
export const makeSurveyUnitUseCase = (): SurveyUnitUseCaseType =>
  createSurveyUnitUseCase(makeSurveyUnitRepository());
