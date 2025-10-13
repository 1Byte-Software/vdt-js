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
