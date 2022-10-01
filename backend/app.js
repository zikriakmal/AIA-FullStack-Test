/**
 * author       : Zikri Akmal Santoso
 * updated date : Oct 1, 2022
 * created date : Oct 1, 2022 
 * ==================================
 */

const express = require('express');
const { APP_NAME, APP_PORT, APP_URL } = require('./config/config')
const publicFeedRoute = require('./routes/publicFeedRoutes')
const app = express();

app.get("/", (req, res, next) =>
{
    res.status(200).send(`<h1>API ${APP_NAME}</h1>`)
})

app.use("/api/v1/public-feeds", publicFeedRoute)

app.listen(APP_PORT, () => console.log(`
============================
${APP_NAME} APP Started
Listening On Port  : ${APP_PORT}
URL                : ${APP_URL}:${APP_PORT}
============================
`))

module.exports = app