"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("request-promise/errors");
/**
 * Base class extending native errors
 *
 * @class ApiError
 * @extends {Error}
 */
class ApiError extends Error {
    /**
     * Creates an instance of ApiError.
     *
     * @param {Error} error
     */
    constructor(error) {
        // Super call to Error
        super(ApiError.getErrorResponse(error).error_description);
        this.error = "internal_error";
        // Generate error response object
        this.error = ApiError.getErrorResponse(error).error;
    }
    /**
     * Construct error response
     *
     * @param {string} code
     * @param {string} description
     * @returns {IError}
     */
    // tslint:disable-next-line:variable-name
    static constructErrorResponse(error, error_description) {
        return {
            error,
            error_description
        };
    }
    /**
     * Construct error response based on generic HTTP status code
     *
     * @param httpStatusCode
     * @returns {string}
     */
    static genericHttpResponse(httpStatusCode) {
        switch (httpStatusCode) {
            case 400: return ApiError.constructErrorResponse("bad_request", "Bad request");
            case 401: return ApiError.constructErrorResponse("unauthorized", "Unauthorized");
            case 403: return ApiError.constructErrorResponse("forbidden", "Forbidden");
            case 404: return ApiError.constructErrorResponse("not_found", "Not Found");
            default: return ApiError.constructErrorResponse("internal_error", "Internal error");
        }
    }
    /**
     * Construct error response object
     *
     * @param {Error} error
     * @returns {IError}
     */
    static getErrorResponse(error) {
        switch (error.constructor) {
            case errors_1.StatusCodeError:
                // The server responded with a status codes other than 2xx.
                try {
                    const errorResponse = JSON.parse(error.error);
                    return errorResponse.error && errorResponse.error_description
                        ? ApiError.constructErrorResponse(errorResponse.error, errorResponse.error_description)
                        : ApiError.constructErrorResponse(errorResponse, errorResponse);
                }
                catch (e) {
                    return ApiError.genericHttpResponse(error.statusCode);
                }
            case errors_1.RequestError:
                // The request failed due to technical reasons.
                const reqError = error.error;
                return ApiError.constructErrorResponse(reqError.code, "Error on `" + reqError.syscall + "`");
            default:
                if (error.message === "Invalid access token") {
                    return ApiError.constructErrorResponse("invalid_access_token", "Invalid access token.");
                }
                return ApiError.constructErrorResponse("internal_error", "Well, this is embarrassing!");
        }
    }
}
exports.ApiError = ApiError;
