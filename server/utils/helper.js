export const successResponse = (
    res,
    message = "Success",
    data = null,
    statusCode = 200
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

export const errorResponse = (
    res,
    message = "Something went wrong",
    statusCode = 500,
    errors = null
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};
export const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
