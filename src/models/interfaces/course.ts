import { DateType, IdType as JfwIdType, IUser } from 'jfw-js';
import { DAY_OF_WEEK } from '../constants';
import { IdType } from '../types';

export interface ICourse {
  categoryCode: string;
  classDtoList: string[];
  code: string;
  createdBy: string;
  createdDate: string;
  description: string;
  endDate: string;
  endTime: string | null;
  id: number;
  image: string | null;
  invitationLink: string | null;
  isFree: boolean;
  isOffline: boolean;
  isPrivate: boolean;
  languageCode: string;
  modifiedBy: string;
  modifiedDate: string;
  name: string;
  scheduleType: string;
  scheduleValue: string;
  startDate: string;
  startTime: string | null;
  status: string;
  totalAttendingMember: number;
  userRegistrationStatus: string | null;
  teacher?: IUser;
  codeSkill?: string;
  language?: string;
  timezoneValue?: string;
}
export interface IGetDashboardCoursesParams {
  userId: JfwIdType;
  currentDate: string;
}
export interface IDashboardCourse {
  currentCourses: ICourse[];
  previousCourses: ICourse[];
  upcomingCourses: ICourse[];
}
export interface ICourseUserMutatePayload {
  userId: JfwIdType;
  courseId: number;
  approvedBy?: JfwIdType;
  status?: string;
}
export interface IGetListCoursesParams {
  brandId: JfwIdType;
  userId: JfwIdType;
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
  userId: JfwIdType;
  pageSize: number;
  pageNumber: number;
}
export interface ICourseUser extends IUser {
  status: string;
  dateOfJoin: DateType;
}
export interface IClassUser extends IUser {
  status: string;
  classId: number;
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
  userId?: JfwIdType;
  startDate: string;
  endDate: string;
  pageSize: number;
  pageNumber: number;
  classId?: IdType;
}
export interface IGetTimetableParams {
  userId: JfwIdType;
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
export interface IMutateJoinClassPayload {
  classId: number;
  userId: JfwIdType;
  status: string;
}
export interface IUpdateJoinClassPath {
  id: IdType;
}
export interface IUpdateJoinClassPayload {
  status: string;
  description: string;
}
