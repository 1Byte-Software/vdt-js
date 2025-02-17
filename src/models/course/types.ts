import { DateType, IUser, IdType as JfwIdType } from 'jfw-js';
import { IBaseObject, IdType } from '../base';
import { DAY_OF_WEEK } from './constants';

export interface ICourse extends IBaseObject {
  teacher?: IUser;

  code: string;
  /**
   * @deprecated Use questionTypeCode instead
   */
  categoryCode: string;
  languageCode: string;

  name: string;
  classDtoList: string[];
  description: string;
  endDate: string;
  endTime: string | null;
  image: string | null;
  invitationLink: string | null;
  isFree: boolean;
  isOffline: boolean;
  isPrivate: boolean;
  scheduleType: string;
  scheduleValue: string;
  startDate: string;
  startTime: string | null;
  status: string;
  totalAttendingMember: number;
  userRegistrationStatus: string | null;
  codeSkill?: string;
  language?: string;
  timezoneValue?: string;
}

export interface IGetCoursesAllParams {
  currentDate: string;
}
export interface IDashboardCourse {
  currentCourses: ICourse[];
  previousCourses: ICourse[];
  upcomingCourses: ICourse[];
}
export interface ICreateCourseUserParams {
  userId: JfwIdType;
  courseCode: string;
  approvedBy?: JfwIdType;
  status?: string;
}
export type IUpdateCourseUserParams = ICreateCourseUserParams;
export interface IDeleteCourseUserParams {
  userId: JfwIdType;
  courseCode: string;
}
export interface IGetListCoursesParams {
  currentDate?: string;
  name?: string;
  categoryCode?: string | number;
  isPrivate?: number;
  isFree?: number;
  isOffline?: number;
  pageSize: number;
  pageNumber: number;
  languageCode?: string;
}
export interface IGetCoursesOfUser {
  pageSize: number;
  pageNumber: number;
}
export interface ICourseUser extends IUser {
  userStatus: string;
  dateOfJoin: DateType;
  user: IUser;
}
export interface IEditCourseRolePath {
  courseId: IdType;
}
export interface IEditCourseRolePayload {
  userId: JfwIdType;
  roleId?: JfwIdType;
  courseId: IdType;
}
export interface IClassroom {
  categoryCode: string;
  classId: IdType;
  className: string;
  courseCode: string;
  courseId: IdType;
  courseName: string;
  description: string | null;
  endDateCourse: string;
  endTimeActual: string;
  image: string | null;
  invitationLink: string;
  isFree: boolean;
  isOffline: boolean;
  isPrivate: boolean;
  languageCode: string;
  startDateActual: string;
  startDateCourse: string;
  startTimeActual: string;
  status: string;
  teacherId: JfwIdType | null;
}
export interface IGetUsersJoinClassParams {
  startDate: string;
  endDate: string;
  pageSize: number;
  pageNumber: number;
  classId?: IdType;
}
export interface IGetTimetableParams {
  startDate: string;
  endDate: string;
  courseId?: IdType;
}
export interface ITimetableTableRecord {
  categoryCode?: string;
  classId?: IdType;
  className?: string;
  courseCode?: string;
  courseId?: IdType;
  courseName?: string;
  description?: string | null;
  endDateCourse?: string;
  endTimeActual?: string;
  image?: string | null;
  invitationLink?: string;
  isFree?: boolean;
  isOffline?: boolean;
  isPrivate?: boolean;
  languageCode?: string;
  startDateActual?: string;
  startDateCourse?: string;
  startTimeActual?: string;
  status?: string;
  teacherId?: JfwIdType | null;
  id?: IdType;
  day?: string;
  time?: string;
  timezone?: string;
  link?: string;
  timeBetween?: number;
  isNull?: boolean;
  skill?: string;
  language?: string;
  isShowCountdown?: boolean;
  isShowJoinHandler?: boolean;
  isShowAttendance?: boolean;
  weekday?: keyof typeof DAY_OF_WEEK;
  startTimeConverted?: string;
  endTimeConverted?: string;
}
export interface ITimetable {
  [key: string]: ITimetableTableRecord;
}
