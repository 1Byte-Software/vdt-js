// import { SCOPE_USER_RESPONSE_TYPE, UserResponseType } from '../interfaces';
// import shortAnswerSVG from '../../assets/icons/short-answer.svg';
// import paragraphSVG from '../../assets/icons/paragraph.svg';
// import singleChoiceSVG from '../../assets/icons/single-choice.svg';
// import multipleChoiceSVG from '../../assets/icons/multiple-choice.svg';
// import dropDownSVG from '../../assets/icons/drop-down.svg';
// import fileUploadSVG from '../../assets/icons/file-upload.svg';
// import linearScaleSVG from '../../assets/icons/linear-scale.svg';
// import dateSVG from '../../assets/icons/date.svg';
// import timeSVG from '../../assets/icons/time.svg';
// import singleChoiceGridSVG from '../../assets/icons/single-choice-grid.svg';
// import multipleChoiceGridSVG from '../../assets/icons/multiple-choice-grid.svg';
// import embedShortAnswerSVG from '../../assets/icons/embed-short-answer.svg';
// import embedDragDropSVG from '../../assets/icons/embed-drag-drop.svg';
// import embedDropDownSVG from '../../assets/icons/embed-drop-down.svg';
// import embedHighlightSVG from '../../assets/icons/embed-highlight.svg';
// import reOrderSVG from '../../assets/icons/reorder.svg';
// import matchSVG from '../../assets/icons/match.svg';
// import labelingSVG from '../../assets/icons/labeling.svg';
// import categorizeSVG from '../../assets/icons/categorize.svg';
// import graphingSVG from '../../assets/icons/graphing.svg';
// import mathResponseSVG from '../../assets/icons/math-response.svg';
// import drawSVG from '../../assets/icons/draw.svg';
// import hotSpotSVG from '../../assets/icons/hot-spot.svg';

// export const QUESTION_SORT = {
//   order: 'ZORDER',
//   title: 'TITLE',
//   createdDate: 'CREATED_DATE',
// };

// export const QUESTION_STATUS = {
//   active: 'Active',
//   inactive: 'Inactive',
// };

// export const QUESTION_TIME_TYPE = {
//   week: 'THIS-WEEK',
//   month: 'THIS-MONTH',
// };

// export const MARK_COLOR = {
//   default: 'rgb(204, 204, 204)',
//   haveStart: 'rgb(249, 217, 35)',
// };

// export const MARK_FILTER = {
//   marked: 'MARKED',
//   noMark: 'NO_MARK',
// };

// export enum TYPE_CATEGORY {
//   menu = 'Menu',
// }

// export enum PRIORITY_CODE {
//   mark = 'MARK',
//   star = 'STAR',
// }

// export enum USER_RESPONSE_TYPE {
//   shortAnswer = 'SHORT-ANSWER',
//   paragraph = 'PARAGRAPH',

//   singleChoice = 'SINGLE-CHOICE',
//   multipleChoice = 'MULTIPLE-CHOICE',

//   dropDown = 'DROP-DOWN',

//   fileUpload = 'FILE-UPLOAD',

//   linearScale = 'LINEAR-SCALE',

//   date = 'DATE',
//   time = 'TIME',

//   singleChoiceGrid = 'SINGLE-CHOICE-GRID',
//   multipleChoiceGrid = 'MULTIPLE-CHOICE-GRID',

//   embedShortAnswer = 'EMBED-SHORT-ANSWER',
//   embedDragDrop = 'EMBED-DRAG-DROP',
//   embedDropDown = 'EMBED-DROP-DOWN',
//   embedHighlight = 'EMBED-HIGHLIGHT',

//   reOrder = 'REORDER',
//   match = 'MATCH',
//   labeling = 'LABELING',
//   categorize = 'CATEGORIZE',

//   graphing = 'GRAPHING',
//   mathResponse = 'MATH-RESPONSE',

//   draw = 'DRAW',
//   hotSpot = 'HOT-SPOT',
// }


// export const userResponseTypes: UserResponseType[] = [
//   {
//     type: USER_RESPONSE_TYPE.shortAnswer,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: shortAnswerSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.paragraph,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: paragraphSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.singleChoice,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: singleChoiceSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.multipleChoice,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: multipleChoiceSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.dropDown,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: dropDownSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.fileUpload,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: fileUploadSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.linearScale,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: linearScaleSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.date,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: dateSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.time,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: timeSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.singleChoiceGrid,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: singleChoiceGridSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.multipleChoiceGrid,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: multipleChoiceGridSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.embedShortAnswer,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: embedShortAnswerSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.embedDropDown,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: embedDropDownSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.embedDragDrop,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: embedDragDropSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.embedHighlight,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: embedHighlightSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.reOrder,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: reOrderSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.match,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: matchSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.labeling,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: labelingSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.categorize,
//     scope: SCOPE_USER_RESPONSE_TYPE.questionGroup,
//     icon: categorizeSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.graphing,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: graphingSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.mathResponse,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: mathResponseSVG,
//   },
//   // =============================================
//   {
//     type: USER_RESPONSE_TYPE.draw,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: drawSVG,
//   },
//   {
//     type: USER_RESPONSE_TYPE.hotSpot,
//     scope: SCOPE_USER_RESPONSE_TYPE.question,
//     icon: hotSpotSVG,
//   },
// ];

// export const questionScopeUserResponseType = userResponseTypes.map(
//   (scopeType) => scopeType.scope === SCOPE_USER_RESPONSE_TYPE.question,
// );

// export const questionGroupScopeUserResponseType = userResponseTypes.map(
//   (scopeType) => scopeType.scope === SCOPE_USER_RESPONSE_TYPE.questionGroup,
// );
