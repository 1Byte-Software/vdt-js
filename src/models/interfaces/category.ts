import { IdType } from '../types';
import { IBaseObject } from './common';

/**
 * @deprecated use IGetCategoriesParams instead
 */
export type IGetListCategoriesParams = IGetCategoriesParams;

export interface IGetCategoriesParams {
  parentCategoryCode?: string;
  group?: string;
}

export interface IContribute {
  S: string;
  W: string;
  R: string;
  L: string;
}
export interface ICategory extends IBaseObject {
  code: string;
  groupCategory: string;
  name: string;
  contributeCategoryPoint?: IContribute;
  description?: string;
  links?: string;
  parentCode: string;
  tags?: string;
  type?: string;
}
export interface IGroupCategory {
  code: string;
  groupCategory: string;
  id: IdType;
  name: string;
  listChildCate: ICategory[];
}
export interface IGetTypesCategoryPath {
  id: IdType;
}
export interface IGetListCategoriesPath {
  menuCode: string;
}
