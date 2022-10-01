/**
 * author       : Zikri Akmal Santoso
 * updated date : Oct 1, 2022
 * created date : Oct 1, 2022 
 * ==================================
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const { APP_NAME, APP_PORT, APP_URL } = require('./config/config')
const publicFeedRoute = require('./routes/publicFeedRoutes')
const app = express();

app.use(cors({ origin: '*' }))
app.use(express.static("public"));
app.use("/api/v1/public-feeds", publicFeedRoute)


/**
 * for react frontend client
 */
app.get("/", (req, res, next) =>
{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(APP_PORT, () => console.log(`
============================
${APP_NAME} APP Started
Listening On Port  : ${APP_PORT}
URL                : ${APP_URL}:${APP_PORT}
============================
`))

module.exports = app