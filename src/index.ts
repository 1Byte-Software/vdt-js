var rxjs = require('rxjs');
var axios = require('axios');

var AppService = /** @class */ (function () {
    function AppService() {
        this._appConfig$ = new rxjs.BehaviorSubject(null);
        this._token$ = new rxjs.BehaviorSubject('');
        this._userHeaders$ = new rxjs.BehaviorSubject(null);
    }
    Object.defineProperty(AppService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    AppService.prototype.getConfig$ = function () {
        return this._appConfig$;
    };
    AppService.prototype.setConfig = function (config) {
        this._appConfig$.next(config);
    };
    AppService.prototype.getToken$ = function () {
        return this._token$;
    };
    AppService.prototype.setToken = function (Token) {
        this._token$.next(Token);
    };
    AppService.prototype.getUserHeaders$ = function () {
        return this._userHeaders$;
    };
    AppService.prototype.setUserHeaders = function (headers) {
        this._userHeaders$.next(headers);
    };
    return AppService;
}());
var _AppService = AppService.Instance;

/**
 * @deprecated Sẽ xoá sau khi xử lý xong issues #VDT-115, #VDT-108
 */
exports.PRODUCT_TYPE = void 0;
(function (PRODUCT_TYPE) {
    PRODUCT_TYPE["pte"] = "PTE";
    PRODUCT_TYPE["ielts"] = "IELTS";
})(exports.PRODUCT_TYPE || (exports.PRODUCT_TYPE = {}));
exports.UI_TYPE = void 0;
(function (UI_TYPE) {
    UI_TYPE["practice"] = "/practice";
    UI_TYPE["admin"] = "/admin";
    UI_TYPE["mockTest"] = "/mock-test";
})(exports.UI_TYPE || (exports.UI_TYPE = {}));
exports.MODE_VALUES = void 0;
(function (MODE_VALUES) {
    MODE_VALUES["development"] = "development";
    MODE_VALUES["production"] = "production";
})(exports.MODE_VALUES || (exports.MODE_VALUES = {}));
exports.API_DOMAIN = void 0;
(function (API_DOMAIN) {
    API_DOMAIN["development"] = "https://dev-protocol.vardytests.com/api/";
    API_DOMAIN["production"] = "https://protocol.vardytests.com/api/";
    API_DOMAIN["ai_development"] = "https://dev-protocol.vardytests.com/ai";
    API_DOMAIN["ai_production"] = "https://protocol.vardytests.com/ai";
})(exports.API_DOMAIN || (exports.API_DOMAIN = {}));

var VdtClient = /** @class */ (function () {
    function VdtClient(config) {
        _AppService.setConfig(config);
    }
    VdtClient.prototype.setToken = function (authKey) {
        _AppService.setToken(authKey);
    };
    VdtClient.prototype.setHeaders = function (headers) {
        _AppService.setUserHeaders(headers);
    };
    VdtClient.prototype.getHeader = function () {
        return _AppService.getUserHeaders$().value;
    };
    return VdtClient;
}());

var PERMISSION = {
    lesson: {
        download: 'LESSON.DOWNLOAD',
        add: 'LESSON.CREATE',
        edit: 'LESSON.EDIT',
    },
    raiseHand: {
        viewAll: 'RAISE-HAND.VIEW-ALL',
        edit: 'RAISE-HAND.EDIT',
        delete: 'RAISE-HAND.DELETE',
    },
    course: {
        upload: 'COURSE.UPLOAD',
        download: 'COURSE.DOWNLOAD',
        add: 'COURSE.ADD',
        delete: 'COURSE.DELETE',
        update: 'COURSE.UPDATE',
        edit: 'COURSE.EDIT',
    },
    class: {
        view: 'CLASS.VIEW',
    },
    score: {
        view: 'SCORE.VIEW',
        edit: 'SCORE.EDIT',
        delete: 'SCORE.DELETE',
        create: 'SCORE.CREATE',
    },
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var axiosInstanceVdt;
var axiosInstanceAI;
var brandUrl = '';
var token = '';
var userHeaders = {};
// Get config, then set values to axiosInstanceJfw and brandUrl
var config$ = _AppService.getConfig$();
config$.subscribe(function (config) {
    if (config) {
        var baseUrl = config.mode === exports.MODE_VALUES.development
            ? exports.API_DOMAIN.development
            : exports.API_DOMAIN.production;
        var baseUrlAI = config.mode === exports.MODE_VALUES.development
            ? exports.API_DOMAIN.ai_development
            : exports.API_DOMAIN.ai_production;
        brandUrl = config.brandUrl;
        axiosInstanceVdt = axiosInstance(baseUrl || '');
        axiosInstanceAI = axiosInstance(baseUrlAI || '');
    }
});
// Get token, then set value to token
var token$ = _AppService.getToken$();
token$.subscribe(function (key) {
    token = key;
});
// Get userHeaders, then set value to userHeaders
var userHeaders$ = _AppService.getUserHeaders$();
userHeaders$.subscribe(function (headers) {
    userHeaders = headers;
});
// Create axios instance
var axiosInstance = function (baseUrl) {
    var axiosClient = axios.create({
        baseURL: baseUrl,
        headers: {
            'content-type': 'application/json',
        },
    });
    axiosClient.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var header;
        return __generator(this, function (_a) {
            config.headers['BrandUrl'] = brandUrl;
            if (token) {
                config.headers['Authorization'] = "Bearer ".concat(token);
            }
            for (header in userHeaders) {
                config.headers[header] = userHeaders[header];
            }
            return [2 /*return*/, config];
        });
    }); });
    axiosClient.interceptors.response.use(function (response) {
        if (response && response.data) {
            return response.data;
        }
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        return response;
    }, function (error) {
        // Handle errors
        throw error;
    });
    return axiosClient;
};

var REST$j = 'ai';
var AI_PATH = {
    WORDS: "".concat(REST$j, "/words"),
};

var scoreAIWordAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = AI_PATH.WORDS;
                return [4 /*yield*/, axiosInstanceAI.post(url, params, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var get = function (url, configArg, userHeaders) {
    if (configArg === void 0) { configArg = {}; }
    var config = __assign({}, configArg);
    if (userHeaders) {
        config.headers = userHeaders;
    }
    return axiosInstanceVdt.get(url, config);
};
var post = function (url, payload, configArg, userHeaders) {
    if (configArg === void 0) { configArg = {}; }
    var config = __assign({}, configArg);
    if (userHeaders) {
        config.headers = userHeaders;
    }
    return axiosInstanceVdt.post(url, payload, config);
};
var put = function (url, payload, configArg, userHeaders) {
    if (configArg === void 0) { configArg = {}; }
    var config = __assign({}, configArg);
    if (userHeaders) {
        config.headers = userHeaders;
    }
    return axiosInstanceVdt.put(url, payload, config);
};
var remove = function (url, userHeaders, configArg) {
    if (configArg === void 0) { configArg = {}; }
    var config = __assign(__assign({}, configArg), { headers: userHeaders });
    return axiosInstanceVdt.delete(url, config);
};

// Generate path
// Example: "Hello :friendName I'm :myName" with object {friendName: "Alice", myName: "Bob"} to "Hello Alice I'm Bob"
function generatePath(str, obj) {
    var _a;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str = str.replace(":".concat(key), (_a = obj[key]) === null || _a === void 0 ? void 0 : _a.toString());
        }
    }
    return str;
}

var REST$i = 'books';
var REST_BOOK_EXAM_RECORD = 'book-exam-record';
var REST_BOOK_EXAM_SUBMISSIONS = 'book-exam-submissions';
var REST_BOOK_EXAM_REPORT = 'book-exam-report';
var REST_CHAPTERS = 'chapters';
var BOOK_PATH = {
    QUERY: REST$i,
    CREATE: REST$i,
    GET_BY_ID: "".concat(REST$i, "/:id"),
    UPDATE_BY_ID: "".concat(REST$i, "/:id"),
    DELETE_BY_ID: "".concat(REST$i, "/:id"),
    BOOK_EXAM_RECORD: {
        GET_BY_USER_ID: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:userId"),
        CREATE: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:userId/:bookId"),
        DELETE_BY_ID: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:bookExamId"),
        FINISH: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:id/finish"),
        PROCESSING: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:id/processing"),
        CHECK_RESULT: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:bookExamId/:userId/check-result"),
        RESULT: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:bookExamId/:userId/result"),
        SCORE_DETAIL: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:bookExamRecordId/:userId/:categoryId/score-detail"),
        BOOK_EXAM_REPORT: {
            GET: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/:id/").concat(REST_BOOK_EXAM_REPORT),
        },
        BOOK_EXAM_SUBMISSION: {
            SUBMIT: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/").concat(REST_BOOK_EXAM_SUBMISSIONS, "/submit"),
            CONTINUE: "".concat(REST$i, "/").concat(REST_BOOK_EXAM_RECORD, "/").concat(REST_BOOK_EXAM_SUBMISSIONS, "/continue"),
        },
    },
    CHAPTERS: {
        GET: "".concat(REST$i, "/:id/").concat(REST_CHAPTERS),
        ADD: "".concat(REST$i, "/:id/").concat(REST_CHAPTERS),
        UPDATE: "".concat(REST$i, "/:id/").concat(REST_CHAPTERS)},
};

var queryBookAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = BOOK_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getBookByIdAPI = function (bookId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.GET_BY_ID, {
                    id: bookId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createBookAPI = function (book, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = BOOK_PATH.CREATE;
                return [4 /*yield*/, post(url, book, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateBookAPI = function (book, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.UPDATE_BY_ID, {
                    id: book.id,
                });
                return [4 /*yield*/, put(url, book, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var deleteBookAPI = function (bookId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.DELETE_BY_ID, {
                    id: bookId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getBookExamRecordByUserIdAPI = function (userId, params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.GET_BY_USER_ID, {
                    userId: userId,
                });
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
// #REFACTOR_VDT
var createBookExamRecordForBookAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, bookId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = params.userId, bookId = params.bookId;
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.CREATE, {
                    userId: userId,
                    bookId: bookId,
                });
                return [4 /*yield*/, post(url, null, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteBookExamRecordAPI = function (bookExamId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.DELETE_BY_ID, {
                    bookExamId: bookExamId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var submitBookExamRecordAPI = function (params, userHeaders) {
    var url = BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_SUBMISSION.SUBMIT;
    return post(url, params, null, userHeaders);
};
var continueBookExamSubmissionAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_SUBMISSION.CONTINUE;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var finishBookExamRecordAPI = function (bookExamId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.FINISH, {
                    id: bookExamId,
                });
                return [4 /*yield*/, put(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var processingBookExamRecordAPI = function (bookExamId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.PROCESSING, {
                    id: bookExamId,
                });
                return [4 /*yield*/, put(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var checkResultBookExamRecordAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var bookExamId, userId, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bookExamId = params.bookExamId, userId = params.userId;
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.CHECK_RESULT, {
                    bookExamId: bookExamId,
                    userId: userId,
                });
                return [4 /*yield*/, post(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
var getResultBookExamRecordAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var bookExamId, userId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bookExamId = path.bookExamId, userId = path.userId;
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.RESULT, {
                    bookExamId: bookExamId,
                    userId: userId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
var getBookExamReportAPI = function (bookExamId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_REPORT.GET, {
                    id: bookExamId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getScoreDetailBookExamRecordAPI = function (path, params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var bookExamRecordId, userId, categoryId, url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                bookExamRecordId = path.bookExamRecordId, userId = path.userId, categoryId = path.categoryId;
                url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.SCORE_DETAIL, {
                    bookExamRecordId: bookExamRecordId,
                    userId: userId,
                    categoryId: categoryId,
                });
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getChapterOfBookAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(BOOK_PATH.CHAPTERS.GET, {
                    id: id,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var addChapterIntoBookAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var bookId, chapterIds, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bookId = params.bookId, chapterIds = params.chapterIds;
                url = generatePath(BOOK_PATH.CHAPTERS.ADD, {
                    id: bookId,
                });
                return [4 /*yield*/, post(url, chapterIds, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateChapterInBookAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var bookId, chapterIds, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bookId = path.bookId, chapterIds = path.chapterIds;
                url = generatePath(BOOK_PATH.CHAPTERS.UPDATE, {
                    id: bookId,
                });
                return [4 /*yield*/, put(url, chapterIds, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };

exports.BOOK_STATUS = void 0;
(function (BOOK_STATUS) {
    BOOK_STATUS["active"] = "Active";
    BOOK_STATUS["inactive"] = "Inactive";
    BOOK_STATUS["draft"] = "Draft";
    BOOK_STATUS["pending"] = "Pending";
})(exports.BOOK_STATUS || (exports.BOOK_STATUS = {}));
exports.TYPE_OF_BOOK = void 0;
(function (TYPE_OF_BOOK) {
    TYPE_OF_BOOK["full"] = "FullTests";
    TYPE_OF_BOOK["section"] = "SectionTests";
    TYPE_OF_BOOK["question"] = "QuestionTests";
    TYPE_OF_BOOK["vocabBook"] = "VocabBooks";
})(exports.TYPE_OF_BOOK || (exports.TYPE_OF_BOOK = {}));

var BOOK_EXAM_STATUS = {
    active: 'Active',
    inactive: 'Inactive',
    finished: 'Finished',
    continue: 'Continue',
};

var REST$h = 'categories';
var CATEGORY_PATH = {
    QUERY: REST$h,
    GET_BY_MENU: "".concat(REST$h, "/menu/:codeCategory")
};

var queryCategoryAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = CATEGORY_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getCategoryByMenuAPI = function (codeCategory, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(CATEGORY_PATH.GET_BY_MENU, {
                    codeCategory: codeCategory,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

/**
 * @deprecated Sẽ xoá sau khi giải quyết #VDT-107, #VDT-116, #VDT-114
 */
var SKILLS = {
    speaking: 'SPEAKING',
    writing: 'WRITING',
    reading: 'READING',
    listening: 'LISTENING',
    all: 'ALL',
};
/**
 * @deprecated Sẽ xoá sau khi giải quyết #VDT-108, #VDT-114,
 */
var CATEGORY_PTE_CODE = {
    speaking: 'PTE-S',
    writing: 'PTE-W',
    reading: 'PTE-R',
    listening: 'PTE-L',
    ra: 'RA',
    rs: 'RS',
    wfd: 'WFD',
};
var CATEGORY_GROUP = {
    explanation: 'EXPLANATION',
    shadowing: 'SHADOWING',
    priority: 'PRIORITY',
    predict: 'PREDICT',
};
/**
 * @deprecated Sẽ xoá sau khi đã xử lý hardcode ở vdt-fe
 */
var CATEGORY_IELTS_CODE = {
    ieltsS1: 'S.PART1',
    ieltsS3: 'S.PART3',
};

var REST$g = 'chapters';
var REST_LESSON$1 = 'lessons';
var CHAPTER_PATH = {
    QUERY: "".concat(REST$g),
    CREATE: "".concat(REST$g),
    GET_BY_ID: "".concat(REST$g, "/:id"),
    UPDATE_BY_ID: "".concat(REST$g, "/:id"),
    LESSON: {
        GET_BY_CHAPTER_ID: "".concat(REST$g, "/:chapterId/").concat(REST_LESSON$1),
        ADD_INTO_CHAPTER: "".concat(REST$g, "/:chapterId/").concat(REST_LESSON$1),
        EDIT_IN_CHAPTER: "".concat(REST$g, "/:chapterId/").concat(REST_LESSON$1),
    },
};

var queryChapterAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = CHAPTER_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getChapterByIdAPI = function (chapterId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(CHAPTER_PATH.GET_BY_ID, {
                    id: chapterId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateChapterAPI = function (chapter, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(CHAPTER_PATH.UPDATE_BY_ID, {
                    id: chapter.id,
                });
                return [4 /*yield*/, put(url, chapter, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createChapterAPI = function (chapter, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = CHAPTER_PATH.CREATE;
                return [4 /*yield*/, post(url, chapter, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteChapterAPI = function (chapterId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(CHAPTER_PATH.GET_BY_ID, {
                    id: chapterId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getLessonsOfChapterAPI = function (chapterId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(CHAPTER_PATH.LESSON.GET_BY_CHAPTER_ID, {
                    chapterId: chapterId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var addLessonIntoChapterAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var chapterId, lessonIds, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chapterId = path.chapterId, lessonIds = path.lessonIds;
                url = generatePath(CHAPTER_PATH.LESSON.ADD_INTO_CHAPTER, {
                    chapterId: chapterId,
                });
                return [4 /*yield*/, post(url, lessonIds, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var editLessonInChapterAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var chapterId, lessonIds, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chapterId = path.chapterId, lessonIds = path.lessonIds;
                url = generatePath(CHAPTER_PATH.LESSON.EDIT_IN_CHAPTER, {
                    chapterId: chapterId,
                });
                return [4 /*yield*/, put(url, lessonIds, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };

var CHAPTER_STATUS = {
    active: 'Active',
    inactive: 'Inactive',
    draft: 'Draft',
    pending: 'Pending',
};

var REST$f = 'class-users';
var CLASS_USER_PATH = {
    QUERY: REST$f};

var REST$e = 'class-users';
var queryClassUserAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = CLASS_USER_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var crateClassUserAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$e);
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateClassUserAPI = function (id, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$e, "/").concat(id);
                return [4 /*yield*/, put(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var STATUS_CLASS_USER = {
    join: 'Join',
    accepted: 'Accepted',
    maybe: 'Maybe',
    reject: 'Reject',
    notParticipant: 'NotParticipant',
};

var REST$d = 'courses';
var REST_V1 = "v1/".concat(REST$d);
var REST_COURSE_USER = 'v1/course-users';
var REST_USERS = 'users';
var COURSE_PATH = {
    ALL: "".concat(REST_V1, "/all"),
    V1: {
        COURSE_USER: {
            CREATE: REST_COURSE_USER,
            UPDATE: REST_COURSE_USER,
            DELETE: "".concat(REST_V1, "/:courseCode/").concat(REST_USERS, "/:userId"),
        },
    },
};

var REST$c = 'v1/courses';
var REST_USER = 'v1/course-users';
var REST_CLASS = 'classes';
var SEARCH = 'search';
var COURSE = 'courses';
var LEARNER = 'learners';
var geCourseAllAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = COURSE_PATH.ALL;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createCourseUserAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = COURSE_PATH.V1.COURSE_USER.CREATE;
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateCourseUserAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = COURSE_PATH.V1.COURSE_USER.UPDATE;
                return [4 /*yield*/, put(url, null, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteCourseUserAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, courseCode, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = params.userId, courseCode = params.courseCode;
                url = generatePath(COURSE_PATH.V1.COURSE_USER.DELETE, {
                    courseCode: courseCode,
                    userId: userId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getListCoursesAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$c, "/").concat(SEARCH);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getCoursesOfUserAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST_USER, "/").concat(COURSE);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getCourseByCodeAPI = function (code, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$c, "/").concat(code);
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getListUsersOfCourseAPI = function (code, params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST_USER, "/").concat(code, "/").concat(LEARNER);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var editCourseRoleAPI = function (path, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var courseId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                courseId = path.courseId;
                url = "".concat(REST_USER, "/").concat(courseId);
                return [4 /*yield*/, put(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getTimetableAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST_CLASS);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var STATUS_COURSE_USER = {
    banned: 'Banned',
    leave: 'Leave',
    deny: 'Deny',
    waiting: 'Waiting',
    joined: 'Joined',
    unJoin: null,
};
var STATUS_COURSE = {
    active: 'Active',
    inActive: 'InActive',
    pending: 'Pending',
    canceled: 'Canceled',
};
var DAY_OF_WEEK = {
    monday: {
        name: 'MONDAY',
        value: 1,
    },
    tuesday: {
        name: 'TUESDAY',
        value: 2,
    },
    wednesday: {
        name: 'WEDNESDAY',
        value: 3,
    },
    thursday: {
        name: 'THURSDAY',
        value: 4,
    },
    friday: {
        name: 'FRIDAY',
        value: 5,
    },
    saturday: {
        name: 'SATURDAY',
        value: 6,
    },
    sunday: {
        name: 'SUNDAY',
        value: 7,
    },
};

var REST$b = 'lessons';
var REST_VOCAB = 'vocabs';
var REST_QUESTION_TYPE = 'question-type';
var REST_LESSON_SEE_ALSO = 'lesson-see-also';
var REST_PRIORITY = 'priorities';
var LESSON_PATH = {
    QUERY: REST$b,
    FILTER: "".concat(REST$b, "/filter"),
    GET_BY_ID: "".concat(REST$b, "/:id"),
    EXPORT: "".concat(REST$b, "/export"),
    CREATE: REST$b,
    UPDATE: "".concat(REST$b, "/:id"),
    DELETE: "".concat(REST$b, "/:id"),
    VOCAB: {
        QUERY_VOCAB: "".concat(REST$b, "/:id/").concat(REST_VOCAB),
        CREATE_VOCAB: "".concat(REST$b, "/:id/").concat(REST_VOCAB),
        DELETE_VOCAB: "".concat(REST$b, "/:id/").concat(REST_VOCAB),
    },
    QUESTION_TYPE: {
        UPDATE_QUESTION_TYPE: "".concat(REST$b, "/").concat(REST_QUESTION_TYPE, "/:questionTypeId/:lessonId"),
    },
    LESSON_SEE_ALSO: {
        CREATE_LESSON_SEE_ALSO: "".concat(REST$b, "/:id/").concat(REST_LESSON_SEE_ALSO),
        UPDATE_LESSON_SEE_ALSO: "".concat(REST$b, "/:id/").concat(REST_LESSON_SEE_ALSO),
    },
    PRIORITY: {
        CREATE: "".concat(REST$b, "/:id/").concat(REST_PRIORITY, "/:priorityId/:userId"),
        DELETE: "".concat(REST$b, "/:id/").concat(REST_PRIORITY, "/:priorityId/:userId"),
    },
};

/**
 * @note Need change queryLessonAPI to getLessonByZOrderAndQuestionTypeCode
 */
var queryLessonAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                url = LESSON_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 2:
                err_1 = _a.sent();
                if (err_1 instanceof axios.AxiosError) {
                    throw err_1.response.data;
                }
                throw err_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
var getLessonFilterAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = LESSON_PATH.FILTER;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getLessonByIdAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.GET_BY_ID, {
                    id: id,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createLessonAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = LESSON_PATH.CREATE;
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteLessonAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.DELETE, { id: id });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateLessonAPI = function (id, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.UPDATE, { id: id });
                return [4 /*yield*/, put(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
/**
 * @note This name of function violation of naming convention of Restful
 */
var getLessonExportAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = LESSON_PATH.EXPORT;
                return [4 /*yield*/, get(url, {
                        params: params,
                        responseType: 'blob',
                    }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
var createLessonSeeAlsoForLessonAPI = function (lessonId, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.LESSON_SEE_ALSO.CREATE_LESSON_SEE_ALSO, {
                    id: lessonId,
                });
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateLessonSeeAlsoForLessonAPI = function (lessonId, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.LESSON_SEE_ALSO.UPDATE_LESSON_SEE_ALSO, {
                    id: lessonId,
                });
                return [4 /*yield*/, put(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateLessonQuestionTypeAPI = function (lessonId, questionTypeId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_PATH.QUESTION_TYPE.UPDATE_QUESTION_TYPE, {
                    lessonId: lessonId,
                    questionTypeId: questionTypeId,
                });
                return [4 /*yield*/, put(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getLessonVocabAPI = function (lessonId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = generatePath(LESSON_PATH.VOCAB.QUERY_VOCAB, {
                    id: lessonId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var createLessonVocabAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var id, vocabIds, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = payload.id, vocabIds = payload.vocabIds;
                url = generatePath(LESSON_PATH.VOCAB.CREATE_VOCAB, {
                    id: id,
                });
                return [4 /*yield*/, post(url, null, {
                        params: { vocabIds: vocabIds },
                        paramsSerializer: {
                            indexes: null,
                        },
                    }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteLessonVocabAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var id, vocabIds, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = payload.id, vocabIds = payload.vocabIds;
                url = generatePath(LESSON_PATH.VOCAB.DELETE_VOCAB, {
                    id: id,
                });
                return [4 /*yield*/, remove(url, userHeaders, {
                        params: {
                            vocabIds: vocabIds,
                        },
                        paramsSerializer: {
                            indexes: null,
                        },
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createLessonPriorityAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryId, lessonId, userId, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryId = path.categoryId, lessonId = path.lessonId, userId = path.userId;
                url = generatePath(LESSON_PATH.PRIORITY.CREATE, {
                    id: lessonId,
                    priorityId: categoryId,
                    userId: userId,
                });
                return [4 /*yield*/, post(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var deleteLessonPriorityAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryId, lessonId, userId, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryId = path.categoryId, lessonId = path.lessonId, userId = path.userId;
                url = generatePath(LESSON_PATH.PRIORITY.DELETE, {
                    id: lessonId,
                    priorityId: categoryId,
                    userId: userId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };

exports.LESSON_STATUS = void 0;
(function (LESSON_STATUS) {
    LESSON_STATUS["DRAFT"] = "Draft";
    LESSON_STATUS["ACTIVE"] = "Active";
    LESSON_STATUS["INACTIVE"] = "Inactive";
})(exports.LESSON_STATUS || (exports.LESSON_STATUS = {}));
exports.LESSON_TIME_TYPE = void 0;
(function (LESSON_TIME_TYPE) {
    LESSON_TIME_TYPE["week"] = "THIS-WEEK";
    LESSON_TIME_TYPE["month"] = "THIS-MONTH";
})(exports.LESSON_TIME_TYPE || (exports.LESSON_TIME_TYPE = {}));
exports.LESSON_SORT = void 0;
(function (LESSON_SORT) {
    LESSON_SORT["order"] = "ZORDER";
    LESSON_SORT["title"] = "TITLE";
    LESSON_SORT["createdDate"] = "CREATED_DATE";
})(exports.LESSON_SORT || (exports.LESSON_SORT = {}));
// Đặt mã màu ở vdt-js liệu có đúng không ? Cân bàn luận thêm
exports.MARK_COLOR = void 0;
(function (MARK_COLOR) {
    MARK_COLOR["default"] = "rgb(204, 204, 204)";
    MARK_COLOR["haveStart"] = "rgb(249, 217, 35)";
})(exports.MARK_COLOR || (exports.MARK_COLOR = {}));
exports.MARK_FILTER = void 0;
(function (MARK_FILTER) {
    MARK_FILTER["marked"] = "MARKED";
    MARK_FILTER["noMark"] = "NO_MARK";
})(exports.MARK_FILTER || (exports.MARK_FILTER = {}));
exports.TYPE_CATEGORY = void 0;
(function (TYPE_CATEGORY) {
    TYPE_CATEGORY["menu"] = "Menu";
})(exports.TYPE_CATEGORY || (exports.TYPE_CATEGORY = {}));
exports.PRIORITY_CODE = void 0;
(function (PRIORITY_CODE) {
    PRIORITY_CODE["mark"] = "MARK";
    PRIORITY_CODE["star"] = "STAR";
})(exports.PRIORITY_CODE || (exports.PRIORITY_CODE = {}));
var MIME_TYPES = [
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

var REST$a = 'learner';
var REST_TESTED = 'tested';
var REST_LESSON = 'lesson';
var LESSON_SEEN_PATH = {
    TESTED: {
        CREATE: "".concat(REST$a, "/").concat(REST_TESTED),
        GET_BY_USER: "".concat(REST$a, "/").concat(REST_TESTED, "/:lessonId/:userId"),
        DELETE_BY_ID: "".concat(REST$a, "/").concat(REST_TESTED, "/:lessonId"),
        LESSON: {
            GET: "".concat(REST$a, "/").concat(REST_TESTED, "/").concat(REST_LESSON, "/:lessonId"),
        },
    },
};

var getLessonSeenByLessonAPI = function (lessonId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_SEEN_PATH.TESTED.LESSON.GET, {
                    lessonId: lessonId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getLessonSeenByUser = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var lessonId, userId, url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                lessonId = params.lessonId, userId = params.userId;
                url = generatePath(LESSON_SEEN_PATH.TESTED.GET_BY_USER, {
                    lessonId: lessonId,
                    userId: userId,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var createLessonSeenAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = LESSON_SEEN_PATH.TESTED.CREATE;
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var deleteLessonSeenAPI = function (lessonId, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(LESSON_SEEN_PATH.TESTED.DELETE_BY_ID, {
                    lessonId: lessonId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };

var REST$9 = 'medias';
var MEDIA_PATH = {
    SAVE_LIST: "".concat(REST$9, "/save-list"),
};

var mediaSaveListAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var medias, restParams, url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                medias = params.medias, restParams = __rest(params, ["medias"]);
                url = MEDIA_PATH.SAVE_LIST;
                return [4 /*yield*/, put(url, medias, {
                        params: restParams,
                    }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };

var REST$8 = 'pte';
var REST_SPEAKING = 'speaking';
var PTE_PATH = {
    SCORE: "".concat(REST$8, "/").concat(REST_SPEAKING, "/:questionTypeCode"),
};

var scorePTESpeakingAPI = function (payload, questionTypeCode, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(PTE_PATH.SCORE, {
                    questionTypeCode: questionTypeCode,
                });
                return [4 /*yield*/, post(url, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$7 = 'questions';
var REST_OPTIONS = 'options';
var REST_SOLUTIONS = 'solutions';
var QUESTION_PATH = {
    CREATE_BY_QUESTION_GROUP_ID: "".concat(REST$7, "/:questionGroupId"),
    UPDATE_BY_ID: "".concat(REST$7, "/:id"),
    DELETE_BY_ID: "".concat(REST$7, "/:id"),
    OPTION: {
        DELETE_BY_ID: "".concat(REST$7, "/:questionId/").concat(REST_OPTIONS, "/:questionOptionId"),
    },
    SOLUTION: {
        DELETE_BY_ID: "".concat(REST$7, "/:questionId/").concat(REST_SOLUTIONS, "/:questionSolutionId"),
    },
};

var createQuestionByQuestionGroupAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var questionGroupId, questions, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questionGroupId = params.questionGroupId, questions = params.questions;
                url = generatePath(QUESTION_PATH.CREATE_BY_QUESTION_GROUP_ID, {
                    questionGroupId: questionGroupId,
                });
                return [4 /*yield*/, post(url, questions, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateQuestionByIdAPI = function (id, question, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_PATH.UPDATE_BY_ID, {
                    id: id,
                });
                return [4 /*yield*/, put(url, question, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteQuestionByIdAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_PATH.DELETE_BY_ID, { id: id });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteSolutionByIdAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, questionSolutionId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questionId = params.questionId, questionSolutionId = params.questionSolutionId;
                url = generatePath(QUESTION_PATH.SOLUTION.DELETE_BY_ID, {
                    questionId: questionId,
                    questionSolutionId: questionSolutionId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteOptionByIdAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var questionOptionId, questionId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questionOptionId = params.questionOptionId, questionId = params.questionId;
                url = generatePath(QUESTION_PATH.OPTION.DELETE_BY_ID, {
                    questionId: questionId,
                    questionOptionId: questionOptionId,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

exports.GROUP_USER_RESPONSE_TYPE = void 0;
(function (GROUP_USER_RESPONSE_TYPE) {
    GROUP_USER_RESPONSE_TYPE["writing"] = "WRITING";
    GROUP_USER_RESPONSE_TYPE["choice"] = "CHOICE";
    GROUP_USER_RESPONSE_TYPE["select"] = "SELECT";
    GROUP_USER_RESPONSE_TYPE["upload"] = "UPLOAD";
    GROUP_USER_RESPONSE_TYPE["rate"] = "RATE";
    GROUP_USER_RESPONSE_TYPE["pickTime"] = "PICK-TIME";
    GROUP_USER_RESPONSE_TYPE["grid"] = "GRID";
    GROUP_USER_RESPONSE_TYPE["embed"] = "EMBED";
    GROUP_USER_RESPONSE_TYPE["dragDrop"] = "DRAG-DROP";
    GROUP_USER_RESPONSE_TYPE["math"] = "MATH";
    GROUP_USER_RESPONSE_TYPE["graphic"] = "GRAPHIC";
})(exports.GROUP_USER_RESPONSE_TYPE || (exports.GROUP_USER_RESPONSE_TYPE = {}));
exports.USER_RESPONSE_TYPE_QUESTION = void 0;
(function (USER_RESPONSE_TYPE_QUESTION) {
    USER_RESPONSE_TYPE_QUESTION["shortAnswer"] = "SHORT-ANSWER";
    USER_RESPONSE_TYPE_QUESTION["paragraph"] = "PARAGRAPH";
    USER_RESPONSE_TYPE_QUESTION["singleChoice"] = "SINGLE-CHOICE";
    USER_RESPONSE_TYPE_QUESTION["multipleChoice"] = "MULTIPLE-CHOICE";
    USER_RESPONSE_TYPE_QUESTION["dropDown"] = "DROP-DOWN";
    USER_RESPONSE_TYPE_QUESTION["fileUpload"] = "FILE-UPLOAD";
    USER_RESPONSE_TYPE_QUESTION["linearScale"] = "LINEAR-SCALE";
    USER_RESPONSE_TYPE_QUESTION["date"] = "DATE";
    USER_RESPONSE_TYPE_QUESTION["time"] = "TIME";
    USER_RESPONSE_TYPE_QUESTION["reOrder"] = "REORDER";
    USER_RESPONSE_TYPE_QUESTION["match"] = "MATCH";
    USER_RESPONSE_TYPE_QUESTION["mathResponse"] = "MATH-RESPONSE";
})(exports.USER_RESPONSE_TYPE_QUESTION || (exports.USER_RESPONSE_TYPE_QUESTION = {}));
exports.USER_RESPONSE_TYPE_GROUP = void 0;
(function (USER_RESPONSE_TYPE_GROUP) {
    USER_RESPONSE_TYPE_GROUP["singleChoiceGrid"] = "SINGLE-CHOICE-GRID";
    USER_RESPONSE_TYPE_GROUP["multipleChoiceGrid"] = "MULTIPLE-CHOICE-GRID";
    USER_RESPONSE_TYPE_GROUP["embedShortAnswer"] = "EMBED-SHORT-ANSWER";
    USER_RESPONSE_TYPE_GROUP["embedDragDrop"] = "EMBED-DRAG-DROP";
    // embedDragDrop2 = 'EMBED-DRAG-DROP', // 13
    USER_RESPONSE_TYPE_GROUP["embedDropDown"] = "EMBED-DROP-DOWN";
    USER_RESPONSE_TYPE_GROUP["embedHighlight"] = "EMBED-HIGHLIGHT";
    USER_RESPONSE_TYPE_GROUP["labeling"] = "LABELING";
    USER_RESPONSE_TYPE_GROUP["categorize"] = "CATEGORIZE";
    USER_RESPONSE_TYPE_GROUP["graphing"] = "GRAPHING";
    USER_RESPONSE_TYPE_GROUP["mathResponse"] = "MATH-RESPONSE";
    USER_RESPONSE_TYPE_GROUP["draw"] = "DRAW";
    USER_RESPONSE_TYPE_GROUP["hotSpot"] = "HOT-SPOT";
})(exports.USER_RESPONSE_TYPE_GROUP || (exports.USER_RESPONSE_TYPE_GROUP = {}));
var USER_RESPONSE_TYPE = __assign(__assign({}, exports.USER_RESPONSE_TYPE_QUESTION), exports.USER_RESPONSE_TYPE_GROUP);
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

exports.SCOPE_USER_RESPONSE_TYPE = void 0;
(function (SCOPE_USER_RESPONSE_TYPE) {
    SCOPE_USER_RESPONSE_TYPE["question"] = "question";
    SCOPE_USER_RESPONSE_TYPE["questionGroup"] = "questionGroup";
})(exports.SCOPE_USER_RESPONSE_TYPE || (exports.SCOPE_USER_RESPONSE_TYPE = {}));

var REST$6 = 'question-groups';
var QUESTION_GROUP_PATH = {
    CREATE: "".concat(REST$6, "/:lessonId"),
    UPDATE: "".concat(REST$6, "/:id"),
    DELETE: "".concat(REST$6, "/:id"),
};

var createQuestionGroupAPI = function (lessonId, questionGroupData, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_GROUP_PATH.CREATE, {
                    lessonId: lessonId,
                });
                return [4 /*yield*/, post(url, questionGroupData, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateQuestionGroupAPI = function (id, questionGroupData, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_GROUP_PATH.UPDATE, { id: id });
                return [4 /*yield*/, put(url, questionGroupData, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteQuestionGroupAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_GROUP_PATH.DELETE, { id: id });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$5 = 'v1/question-types';
var QUESTION_TYPE_PATH = {
    QUERY: REST$5,
    GET_BY_ID: "".concat(REST$5, "/:id"),
    CREATE: REST$5,
    UPDATE: "".concat(REST$5, "/:id"),
    DELETE: "".concat(REST$5, "/:id"),
};

var getQuestionTypesAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = QUESTION_TYPE_PATH.QUERY;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getQuestionTypeByIdAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_TYPE_PATH.GET_BY_ID, {
                    id: id,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createQuestionTypeAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = QUESTION_TYPE_PATH.CREATE;
                return [4 /*yield*/, post(url, params, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteQuestionTypeByIdAPI = function (id, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_TYPE_PATH.DELETE, { id: id });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateQuestionTypeAPI = function (id, params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(QUESTION_TYPE_PATH.UPDATE, { id: id });
                return [4 /*yield*/, put(url, params, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var RAISE_HAND = 'raise-hands';
var REST_DISCUSSION = 'discussions';
var REST$4 = "".concat(REST_DISCUSSION, "/").concat(RAISE_HAND);
var COUNT_RAISE_HAND = 'raise-hand/count';
var QUEUE = 'queue';
var DONE = 'done';
var SUPPORTING = 'supporting';
var REJECTED = 'rejected';
var countRaiseHandAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST_DISCUSSION, "/").concat(COUNT_RAISE_HAND);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createRaiseHandAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$4, "/").concat(QUEUE);
                return [4 /*yield*/, post(url, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createRaiseHandFeedbackAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$4, "/").concat(DONE);
                return [4 /*yield*/, post(url, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var assignTeacherAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var id, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = path.id;
                url = "".concat(REST$4, "/").concat(SUPPORTING, "/").concat(id);
                return [4 /*yield*/, put(url, null, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var rejectRaiseHandAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var id, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = path.id;
                url = "".concat(REST$4, "/").concat(REJECTED, "/").concat(id);
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getRaiseHandAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST_DISCUSSION, "/").concat(RAISE_HAND);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };

var COUNT_RAISE_HAND_KEYS = {
    success: 'RAISE-HAND.RATED.SUCCESS',
};
var RAISE_HAND_STATUS = {
    done: 'Done',
    queue: 'Queue',
    supporting: 'Supporting',
};

var REST$3 = 'token';
var TOKEN_PATH = {
    GET: "".concat(REST$3),
    REFRESH_TOKEN: "".concat(REST$3, "/refresh-token"),
};

var getTokenAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = TOKEN_PATH.GET;
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var refreshTokenAPI = function (userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = TOKEN_PATH.REFRESH_TOKEN;
                return [4 /*yield*/, post(url, null, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$2 = 'scores';
var USER_SCORE_PATH = {
    SCORE: "".concat(REST$2),
    COUNT_PRACTICE_AI_SCORE: "".concat(REST$2, "/count-practice-ai-score/:userId"),
    ANSWER: "".concat(REST$2, "/answers"),
    GET_BY_RESPONSE_GROUP_CODE: "".concat(REST$2, "/by-response-group-code/:responseGroupCode"),
    DELETE_BY_RESPONSE_GROUP_CODE: "".concat(REST$2, "/by-response-group-code/:responseGroupCode"),
    GET_LIST_SYSTEM_SCORE: "".concat(REST$2, "/list-system-score"),
    SCORE_AI: "".concat(REST$2, "/ai"),
    CREATE_SCORE_HUMAN: "".concat(REST$2, "/human/:responseGroupId"),
};

var scoreAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = USER_SCORE_PATH.SCORE;
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getCountPracticeAIScoreAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, restParams, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = params.userId, restParams = __rest(params, ["userId"]);
                url = generatePath(USER_SCORE_PATH.COUNT_PRACTICE_AI_SCORE, {
                    userId: userId,
                });
                return [4 /*yield*/, get(url, { params: restParams }, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getUserScoreAnswerAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = USER_SCORE_PATH.ANSWER;
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var getUserScoreByResponseGroupCodeAPI = function (responseGroupCode, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(USER_SCORE_PATH.GET_BY_RESPONSE_GROUP_CODE, {
                    responseGroupCode: responseGroupCode,
                });
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteUserScoreByResponseGroupCodeAPI = function (responseGroupCode, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = generatePath(USER_SCORE_PATH.DELETE_BY_RESPONSE_GROUP_CODE, {
                    responseGroupCode: responseGroupCode,
                });
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var scoreAIAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = USER_SCORE_PATH.SCORE_AI;
                return [4 /*yield*/, post(url, payload, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createScoreHumanAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var responseGroupId, restParams, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                responseGroupId = params.responseGroupId, restParams = __rest(params, ["responseGroupId"]);
                url = generatePath(USER_SCORE_PATH.CREATE_SCORE_HUMAN, {
                    responseGroupId: responseGroupId,
                });
                return [4 /*yield*/, post(url, restParams, null, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getListSystemScoreAPI = function (userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = USER_SCORE_PATH.GET_LIST_SYSTEM_SCORE;
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

exports.TYPE_QUERY = void 0;
(function (TYPE_QUERY) {
    TYPE_QUERY["board"] = "BOARD";
    TYPE_QUERY["me"] = "ME";
})(exports.TYPE_QUERY || (exports.TYPE_QUERY = {}));
exports.SCORE_COMPONENTS = void 0;
(function (SCORE_COMPONENTS) {
    SCORE_COMPONENTS["overall"] = "overall";
    SCORE_COMPONENTS["scoreOverall"] = "score_overall";
})(exports.SCORE_COMPONENTS || (exports.SCORE_COMPONENTS = {}));

var REST$1 = 'vocabs';
var REST_VOCAB_USER = 'vocab-users';
var BY_VOCAB = 'by-vocab';
var getVocabAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$1);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var createVocabAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST$1);
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var getVocabUserAPI = function (params, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, contents, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST_VOCAB_USER);
                return [4 /*yield*/, get(url, { params: params }, userHeaders)];
            case 1:
                response = _b.sent();
                _a = response.data, contents = _a.contents, rest = __rest(_a, ["contents"]);
                return [2 /*return*/, {
                        contents: contents,
                        pagination: rest,
                    }];
        }
    });
}); };
var createVocabUserAPI = function (payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST_VOCAB_USER);
                return [4 /*yield*/, post(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var updateVocabUserAPI = function (path, payload, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var vocabUserId, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                vocabUserId = path.vocabUserId;
                url = "".concat(REST_VOCAB_USER, "/").concat(vocabUserId);
                return [4 /*yield*/, put(url, payload, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteVocabUserAPI = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var vocabUserId, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                vocabUserId = path.vocabUserId;
                url = "".concat(REST_VOCAB_USER, "/").concat(vocabUserId);
                return [4 /*yield*/, remove(url, userHeaders)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getExactlyVocab = function (path, userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var vocab, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                vocab = path.vocab;
                url = "".concat(REST$1, "/").concat(BY_VOCAB, "/").concat(vocab);
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST = 'voice-configs';
var getAllVoiceConfigsAPI = function (userHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "".concat(REST);
                return [4 /*yield*/, get(url, null, userHeaders)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

exports.BOOK_EXAM_STATUS = BOOK_EXAM_STATUS;
exports.CATEGORY_GROUP = CATEGORY_GROUP;
exports.CATEGORY_IELTS_CODE = CATEGORY_IELTS_CODE;
exports.CATEGORY_PTE_CODE = CATEGORY_PTE_CODE;
exports.CHAPTER_STATUS = CHAPTER_STATUS;
exports.COUNT_RAISE_HAND_KEYS = COUNT_RAISE_HAND_KEYS;
exports.DAY_OF_WEEK = DAY_OF_WEEK;
exports.MIME_TYPES = MIME_TYPES;
exports.PERMISSION = PERMISSION;
exports.RAISE_HAND_STATUS = RAISE_HAND_STATUS;
exports.SKILLS = SKILLS;
exports.STATUS_CLASS_USER = STATUS_CLASS_USER;
exports.STATUS_COURSE = STATUS_COURSE;
exports.STATUS_COURSE_USER = STATUS_COURSE_USER;
exports.USER_RESPONSE_TYPE = USER_RESPONSE_TYPE;
exports.VdtClient = VdtClient;
exports._AppService = _AppService;
exports.addChapterIntoBookAPI = addChapterIntoBookAPI;
exports.addLessonIntoChapterAPI = addLessonIntoChapterAPI;
exports.assignTeacherAPI = assignTeacherAPI;
exports.checkResultBookExamRecordAPI = checkResultBookExamRecordAPI;
exports.continueBookExamSubmissionAPI = continueBookExamSubmissionAPI;
exports.countRaiseHandAPI = countRaiseHandAPI;
exports.crateClassUserAPI = crateClassUserAPI;
exports.createBookAPI = createBookAPI;
exports.createBookExamRecordForBookAPI = createBookExamRecordForBookAPI;
exports.createChapterAPI = createChapterAPI;
exports.createCourseUserAPI = createCourseUserAPI;
exports.createLessonAPI = createLessonAPI;
exports.createLessonPriorityAPI = createLessonPriorityAPI;
exports.createLessonSeeAlsoForLessonAPI = createLessonSeeAlsoForLessonAPI;
exports.createLessonSeenAPI = createLessonSeenAPI;
exports.createLessonVocabAPI = createLessonVocabAPI;
exports.createQuestionByQuestionGroupAPI = createQuestionByQuestionGroupAPI;
exports.createQuestionGroupAPI = createQuestionGroupAPI;
exports.createQuestionTypeAPI = createQuestionTypeAPI;
exports.createRaiseHandAPI = createRaiseHandAPI;
exports.createRaiseHandFeedbackAPI = createRaiseHandFeedbackAPI;
exports.createScoreHumanAPI = createScoreHumanAPI;
exports.createVocabAPI = createVocabAPI;
exports.createVocabUserAPI = createVocabUserAPI;
exports.deleteBookAPI = deleteBookAPI;
exports.deleteBookExamRecordAPI = deleteBookExamRecordAPI;
exports.deleteChapterAPI = deleteChapterAPI;
exports.deleteCourseUserAPI = deleteCourseUserAPI;
exports.deleteLessonAPI = deleteLessonAPI;
exports.deleteLessonPriorityAPI = deleteLessonPriorityAPI;
exports.deleteLessonSeenAPI = deleteLessonSeenAPI;
exports.deleteLessonVocabAPI = deleteLessonVocabAPI;
exports.deleteOptionByIdAPI = deleteOptionByIdAPI;
exports.deleteQuestionByIdAPI = deleteQuestionByIdAPI;
exports.deleteQuestionGroupAPI = deleteQuestionGroupAPI;
exports.deleteQuestionTypeByIdAPI = deleteQuestionTypeByIdAPI;
exports.deleteSolutionByIdAPI = deleteSolutionByIdAPI;
exports.deleteUserScoreByResponseGroupCodeAPI = deleteUserScoreByResponseGroupCodeAPI;
exports.deleteVocabUserAPI = deleteVocabUserAPI;
exports.editCourseRoleAPI = editCourseRoleAPI;
exports.editLessonInChapterAPI = editLessonInChapterAPI;
exports.finishBookExamRecordAPI = finishBookExamRecordAPI;
exports.geCourseAllAPI = geCourseAllAPI;
exports.getAllVoiceConfigsAPI = getAllVoiceConfigsAPI;
exports.getBookByIdAPI = getBookByIdAPI;
exports.getBookExamRecordByUserIdAPI = getBookExamRecordByUserIdAPI;
exports.getBookExamReportAPI = getBookExamReportAPI;
exports.getCategoryByMenuAPI = getCategoryByMenuAPI;
exports.getChapterByIdAPI = getChapterByIdAPI;
exports.getChapterOfBookAPI = getChapterOfBookAPI;
exports.getCountPracticeAIScoreAPI = getCountPracticeAIScoreAPI;
exports.getCourseByCodeAPI = getCourseByCodeAPI;
exports.getCoursesOfUserAPI = getCoursesOfUserAPI;
exports.getExactlyVocab = getExactlyVocab;
exports.getLessonByIdAPI = getLessonByIdAPI;
exports.getLessonExportAPI = getLessonExportAPI;
exports.getLessonFilterAPI = getLessonFilterAPI;
exports.getLessonSeenByLessonAPI = getLessonSeenByLessonAPI;
exports.getLessonSeenByUser = getLessonSeenByUser;
exports.getLessonVocabAPI = getLessonVocabAPI;
exports.getLessonsOfChapterAPI = getLessonsOfChapterAPI;
exports.getListCoursesAPI = getListCoursesAPI;
exports.getListSystemScoreAPI = getListSystemScoreAPI;
exports.getListUsersOfCourseAPI = getListUsersOfCourseAPI;
exports.getQuestionTypeByIdAPI = getQuestionTypeByIdAPI;
exports.getQuestionTypesAPI = getQuestionTypesAPI;
exports.getRaiseHandAPI = getRaiseHandAPI;
exports.getResultBookExamRecordAPI = getResultBookExamRecordAPI;
exports.getScoreDetailBookExamRecordAPI = getScoreDetailBookExamRecordAPI;
exports.getTimetableAPI = getTimetableAPI;
exports.getTokenAPI = getTokenAPI;
exports.getUserScoreAnswerAPI = getUserScoreAnswerAPI;
exports.getUserScoreByResponseGroupCodeAPI = getUserScoreByResponseGroupCodeAPI;
exports.getVocabAPI = getVocabAPI;
exports.getVocabUserAPI = getVocabUserAPI;
exports.mediaSaveListAPI = mediaSaveListAPI;
exports.processingBookExamRecordAPI = processingBookExamRecordAPI;
exports.queryBookAPI = queryBookAPI;
exports.queryCategoryAPI = queryCategoryAPI;
exports.queryChapterAPI = queryChapterAPI;
exports.queryClassUserAPI = queryClassUserAPI;
exports.queryLessonAPI = queryLessonAPI;
exports.refreshTokenAPI = refreshTokenAPI;
exports.rejectRaiseHandAPI = rejectRaiseHandAPI;
exports.scoreAIAPI = scoreAIAPI;
exports.scoreAIWordAPI = scoreAIWordAPI;
exports.scoreAPI = scoreAPI;
exports.scorePTESpeakingAPI = scorePTESpeakingAPI;
exports.submitBookExamRecordAPI = submitBookExamRecordAPI;
exports.updateBookAPI = updateBookAPI;
exports.updateChapterAPI = updateChapterAPI;
exports.updateChapterInBookAPI = updateChapterInBookAPI;
exports.updateClassUserAPI = updateClassUserAPI;
exports.updateCourseUserAPI = updateCourseUserAPI;
exports.updateLessonAPI = updateLessonAPI;
exports.updateLessonQuestionTypeAPI = updateLessonQuestionTypeAPI;
exports.updateLessonSeeAlsoForLessonAPI = updateLessonSeeAlsoForLessonAPI;
exports.updateQuestionByIdAPI = updateQuestionByIdAPI;
exports.updateQuestionGroupAPI = updateQuestionGroupAPI;
exports.updateQuestionTypeAPI = updateQuestionTypeAPI;
exports.updateVocabUserAPI = updateVocabUserAPI;
//# sourceMappingURL=index.ts.map
