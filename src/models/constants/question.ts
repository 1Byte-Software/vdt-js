export const QUESTION_SORT = {
  order: 'ZORDER',
  title: 'TITLE',
  createdDate: 'CREATED_DATE',
};

export const QUESTION_STATUS = {
  active: 'Active',
  inactive: 'Inactive',
};

export const QUESTION_TIME_TYPE = {
  week: 'THIS-WEEK',
  month: 'THIS-MONTH',
};

export const MARK_COLOR = {
  default: 'rgb(204, 204, 204)',
  haveStart: 'rgb(249, 217, 35)',
};

export const MARK_FILTER = {
  marked: 'MARKED',
  noMark: 'NO_MARK',
};

export enum QUESTION_TYPE {
  shortAnswer = 'SHORT-ANSWER',
  paragraph = 'PARAGRAPH',

  poll = 'POLL',
  multipleChoice = 'MULTIPLE-CHOICE',
  singleChoice = 'SINGLE-CHOICE',
  dropDown = 'DROPDOWN',

  fileUpload = 'FILE-UPLOAD',

  date = 'DATE',
  time = 'TIME',

  embedHighlightIncorrect = 'EMBED-HIGHLIGHT-INCORRECT',
  embedQuestionsDragDrop = 'EMBED-QUESTIONS-DRAGDROP',
  embedQuestionsDropbox = 'EMBED-QUESTIONS-DROPBOX',
  embedQuestionsEmptyBlank = 'EMBED-QUESTIONS-EMPTY-BLANK',

  linearScale = 'LINEAR-SCALE',
  singleChoiceGrid = 'SINGLE-CHOICE-GRID',
  multipleChoiceGrid = 'MULTIPLE-CHOICE-GRID',
  reOrderParagraph = 'REORDER-PARAGRAPH',
  hotSpot = 'HOT-SPOT',
  match = 'MATCH',
  labeling = 'LABELING',
  categorize = 'CATEGORIZE',
  graphing = 'GRAPHING',
  mathResponse = 'MATH-RESPONSE',
  draw = 'DRAW',
}

export const TYPE_CATEGORY = {
  menu: 'Menu',
};

export const PRIORITY_CODE = {
  mark: 'MARK',
  star: 'STAR',
};
