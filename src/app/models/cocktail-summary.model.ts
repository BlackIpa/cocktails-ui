import { PreparationMethod } from './enums/preparation-method.model';

export interface CocktailSummary {
  id: number;
  name: string;
  preparationMethod: PreparationMethod;
  glassIcon: string;
}