import categorizeSVG from '../../assets/icons/categorize.svg';
import dateSVG from '../../assets/icons/date.svg';
import drawSVG from '../../assets/icons/draw.svg';
import dropDownSVG from '../../assets/icons/drop-down.svg';
import embedDragDropSVG from '../../assets/icons/embed-drag-drop.svg';
import embedDropDownSVG from '../../assets/icons/embed-drop-down.svg';
import embedHighlightSVG from '../../assets/icons/embed-highlight.svg';
import embedShortAnswerSVG from '../../assets/icons/embed-short-answer.svg';
import fileUploadSVG from '../../assets/icons/file-upload.svg';
import graphingSVG from '../../assets/icons/graphing.svg';
import hotSpotSVG from '../../assets/icons/hot-spot.svg';
import labelingSVG from '../../assets/icons/labeling.svg';
import linearScaleSVG from '../../assets/icons/linear-scale.svg';
import matchSVG from '../../assets/icons/match.svg';
import mathResponseSVG from '../../assets/icons/math-response.svg';
import multipleChoiceGridSVG from '../../assets/icons/multiple-choice-grid.svg';
import multipleChoiceSVG from '../../assets/icons/multiple-choice.svg';
import paragraphSVG from '../../assets/icons/paragraph.svg';
import reOrderSVG from '../../assets/icons/reorder.svg';
import shortAnswerSVG from '../../assets/icons/short-answer.svg';
import singleChoiceGridSVG from '../../assets/icons/single-choice-grid.svg';
import singleChoiceSVG from '../../assets/icons/single-choice.svg';
import timeSVG from '../../assets/icons/time.svg';
import {
  SCOPE_USER_RESPONSE_TYPE,
  UserResponseTypeItem,
  UserResponseTypeGroup,
} from './types';

export enum GROUP_USER_RESPONSE_TYPE {
  writing = 'WRITING',
  choice = 'CHOICE',
  select = 'SELECT',
  upload = 'UPLOAD',
  rate = 'RATE',
  pickTime = 'PICK-TIME',
  grid = 'GRID',
  embed = 'EMBED',
  dragDrop = 'DRAG-DROP',
  math = 'MATH',
  graphic = 'GRAPHIC',
}

export enum USER_RESPONSE_TYPE_QUESTION {
  shortAnswer = 'SHORT-ANSWER', // 1
  paragraph = 'PARAGRAPH', // 2

  singleChoice = 'SINGLE-CHOICE', // 3
  multipleChoice = 'MULTIPLE-CHOICE', // 4

  dropDown = 'DROP-DOWN', // 5

  fileUpload = 'FILE-UPLOAD', // 6

  linearScale = 'LINEAR-SCALE', // 7

  date = 'DATE', // 8
  time = 'TIME', // 9

  reOrder = 'REORDER', // 16
  match = 'MATCH', // 17

  mathResponse = 'MATH-RESPONSE', // 21
}

export enum USER_RESPONSE_TYPE_GROUP {
  singleChoiceGrid = 'SINGLE-CHOICE-GRID', // 10
  multipleChoiceGrid = 'MULTIPLE-CHOICE-GRID', // 11

  embedShortAnswer = 'EMBED-SHORT-ANSWER', // 12
  embedDragDrop = 'EMBED-DRAG-DROP', // 13 (temporary use until backend fix)
  // embedDragDrop2 = 'EMBED-DRAG-DROP', // 13
  embedDropDown = 'EMBED-DROP-DOWN', // 14
  embedHighlight = 'EMBED-HIGHLIGHT', // 15

  labeling = 'LABELING', // 18
  categorize = 'CATEGORIZE', // 19

  graphing = 'GRAPHING', // 20
  mathResponse = 'MATH-RESPONSE', // 21

  draw = 'DRAW', // 22
  hotSpot = 'HOT-SPOT', // 23
}

export const USER_RESPONSE_TYPE = {
  ...USER_RESPONSE_TYPE_QUESTION,
  ...USER_RESPONSE_TYPE_GROUP,
};

export type USER_RESPONSE_TYPE =
  | USER_RESPONSE_TYPE_QUESTION
  | USER_RESPONSE_TYPE_GROUP;

// export enum USER_RESPONSE_TYPE {
//   shortAnswer = 'SHORT-ANSWER', // 1
//   paragraph = 'PARAGRAPH', // 2

//   singleChoice = 'SINGLE-CHOICE', // 3
//   multipleChoice = 'MULTIPLE-CHOICE', // 4

//   dropDown = 'DROP-DOWN', // 5

//   fileUpload = 'FILE-UPLOAD', // 6

//   linearScale = 'LINEAR-SCALE', // 7

//   date = 'DATE', // 8
//   time = 'TIME', // 9

//   singleChoiceGrid = 'SINGLE-CHOICE-GRID', // 10
//   multipleChoiceGrid = 'MULTIPLE-CHOICE-GRID', // 11

//   embedShortAnswer = 'EMBED-SHORT-ANSWER', // 12
//   embedDragDrop = 'EMBED-DRAG-DROP', // 13
//   embedDropDown = 'EMBED-DROP-DOWN', // 14
//   embedHighlight = 'EMBED-HIGHLIGHT', // 15

//   reOrder = 'REORDER', // 16
//   match = 'MATCH', // 17

//   labeling = 'LABELING', // 18
//   categorize = 'CATEGORIZE', // 19

//   graphing = 'GRAPHING', // 20
//   mathResponse = 'MATH-RESPONSE', // 21

//   draw = 'DRAW', // 22
//   hotSpot = 'HOT-SPOT', // 23
// }

export const writingGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.shortAnswer,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: shortAnswerSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.paragraph,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: paragraphSVG,
    disabled: false,
  },
];

const choiceGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.singleChoice,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: singleChoiceSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.multipleChoice,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: multipleChoiceSVG,
    disabled: false,
  },
];

const selectGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.dropDown,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: dropDownSVG,
    disabled: false,
  },
];

const uploadGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.fileUpload,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: fileUploadSVG,
    disabled: false,
  },
];

const rateGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.linearScale,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: linearScaleSVG,
    disabled: true,
  },
];

const pickTimeGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.date,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: dateSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.time,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: timeSVG,
    disabled: true,
  },
];

const gridGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.singleChoiceGrid,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: singleChoiceGridSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.multipleChoiceGrid,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: multipleChoiceGridSVG,
    disabled: true,
  },
];

const embedGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.embedShortAnswer,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: embedShortAnswerSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.embedDropDown,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: embedDropDownSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.embedDragDrop,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: embedDragDropSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.embedHighlight,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: embedHighlightSVG,
    disabled: false,
  },
];

const dragDropGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.reOrder,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: reOrderSVG,
    disabled: false,
  },
  {
    type: USER_RESPONSE_TYPE.match,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: matchSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.labeling,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: labelingSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.categorize,
    scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
    icon: categorizeSVG,
    disabled: true,
  },
];

const mathGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.graphing,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: graphingSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.mathResponse,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: mathResponseSVG,
    disabled: true,
  },
];

const graphicGroupUserResponseTypes: UserResponseTypeItem[] = [
  {
    type: USER_RESPONSE_TYPE.draw,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: drawSVG,
    disabled: true,
  },
  {
    type: USER_RESPONSE_TYPE.hotSpot,
    scope: SCOPE_USER_RESPONSE_TYPE.question,
    icon: hotSpotSVG,
    disabled: true,
  },
];

export const groupUserResponseTypes: UserResponseTypeGroup[] = [
  {
    key: GROUP_USER_RESPONSE_TYPE.writing,
    items: writingGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.choice,
    items: choiceGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.select,
    items: selectGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.upload,
    items: uploadGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.rate,
    items: rateGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.pickTime,
    items: pickTimeGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.grid,
    items: gridGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.embed,
    items: embedGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.dragDrop,
    items: dragDropGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.math,
    items: mathGroupUserResponseTypes,
  },
  // =============================================
  {
    key: GROUP_USER_RESPONSE_TYPE.graphic,
    items: graphicGroupUserResponseTypes,
  },
];

export const userResponseTypes = groupUserResponseTypes.flatMap(
  (value) => value.items,
);

export const questionScopeUserResponseType = userResponseTypes.map(
  (scopeType) => scopeType.scope === SCOPE_USER_RESPONSE_TYPE.question,
);

export const questionGroupScopeUserResponseType = userResponseTypes.map(
  (scopeType) => scopeType.scope === SCOPE_USER_RESPONSE_TYPE.questionGroup,
);

export const embedUserResponseTypes: string[] = [
  USER_RESPONSE_TYPE.embedShortAnswer,
  USER_RESPONSE_TYPE.embedDropDown,
  USER_RESPONSE_TYPE.embedDragDrop,
  USER_RESPONSE_TYPE.embedHighlight,
];

export const questionGroupUserResponseTypes: string[] = Object.values(
  USER_RESPONSE_TYPE_GROUP,
);

export const questionUserResponseTypes: string[] = Object.values(
  USER_RESPONSE_TYPE_QUESTION,
);
