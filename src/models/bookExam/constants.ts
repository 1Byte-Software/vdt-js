/**
 * @deprecated Use BookExamStatus instead.
 */
export const BOOK_EXAM_STATUS = {
    active: 'Active',
    inactive: 'Inactive',
    finished: 'Finished',
    continue: 'Continue',
};

export enum BookExamStatus {
    Draft = 'Draft',
    Inactive = 'Inactive',
    Finished = 'Finished',
    Pending = 'Pending',
    Done = 'Done',
}
