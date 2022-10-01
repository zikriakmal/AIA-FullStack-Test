const express = require('express');
const { getFeeds } = require('../controllers/publicFeedController');
const { successResponse, failResponse } = require('../dto/defaultResponse');

const router = express.Router();

router.get("/", async (req, res, next) =>
{
    const result = await getFeeds(req);

    if (result.status === "success") {
        res.status(200).json(successResponse({
            message: "Success Get Feeds",
            data: result.data,
        }))
    } else {
        res.status(503).json(failResponse({
            message: "Failed to get feeds from external server",
            data: result.data
        }))
    }
})

module.exports = router;
