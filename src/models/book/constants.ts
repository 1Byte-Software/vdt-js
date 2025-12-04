/**
 * @deprecated use BookStatus instead
 */
export enum BOOK_STATUS {
    active = 'Active',
    inactive = 'Inactive',
    draft = 'Draft',
    pending = 'Pending',
}

export enum BookStatus {
    All = 'All',
    Active = 'Active',
    Inactive = 'Inactive',
    Draft = 'Draft',
    Pending = 'Pending',
}

/**
 * @deprecated use BookType instead
 */
export enum TYPE_OF_BOOK {
    full = 'FullTests',
    section = 'SectionTests',
    question = 'QuestionTests',
    vocabBook = 'VocabBooks',
}

export enum BookType {
    FullTests = 'FullTests',
    SectionTests = 'SectionTests',
    QuestionTests = 'QuestionTests',
    VocabBooks = 'VocabBooks',
}
