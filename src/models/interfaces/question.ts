import { IdType } from '../types';

export interface IDeleteOptionByIdParams {
  questionId: IdType;
  optionId: IdType;
}

export interface IDeleteSolutionByIdParams {
  questionId: IdType;
  solutionId: IdType;
}
