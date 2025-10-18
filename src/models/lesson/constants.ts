export enum LESSON_STATUS {
  DRAFT = 'Draft',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export enum LESSON_TIME_TYPE {
  week = 'THIS-WEEK',
  month = 'THIS-MONTH',
}

export enum LessonSort {
  Order = 'zOrder',
  Title = 'title',
  CreatedDate = 'created_date',
}

// Đặt mã màu ở vdt-js liệu có đúng không ? Cân bàn luận thêm
export enum MARK_COLOR {
  default = 'rgb(204, 204, 204)',
  haveStart = 'rgb(249, 217, 35)',
}

export enum MARK_FILTER {
  marked = 'MARKED',
  noMark = 'NO_MARK',
}

export enum TYPE_CATEGORY {
  menu = 'Menu',
}

export enum PRIORITY_CODE {
  mark = 'MARK',
  star = 'STAR',
}

export const MIME_TYPES = [
  'audio/*',
  'audio/png',
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'audio/x-wav',
  'audio/wave',
  'audio/x-pn-wav',
  'audio/webm',
  'audio/ogg',
  'audio/x-m4a',
  'audio/mp4',
  'audio/x-aac',
  'audio/x-caf',
  'image/*',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/x-icon',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'video/*',
  'video/mpeg',
  'video/ogg',
  'video/mp4',
  'video/webm',
  'video/3gpp',
  'video/3gpp2',
  'video/x-ms-wmv',
  'video/x-flv',
];
