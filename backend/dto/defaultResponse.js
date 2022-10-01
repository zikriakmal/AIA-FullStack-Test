

const successResponse = ({ data, message }) =>
{
    return {
        status: "success",
        message: message,
        data: data,
    }
}

const failResponse = ({ data, message }) =>
{
    return {
        status: "fail",
        message: message,
        data: data,
    }
}

module.exports = { successResponse, failResponse };