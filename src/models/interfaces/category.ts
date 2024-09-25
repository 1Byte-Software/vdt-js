import { IdType } from '../types';

export interface IGetListCategoriesParams {
  parentCategoryCode?: string;
  group?: string;
}
export interface IContribute {
  S: string;
  W: string;
  R: string;
  L: string;
}
export interface ICategory {
  code: string;
  groupCategory: string;
  id: IdType;
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
