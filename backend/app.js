/**
 * author       : Zikri Akmal Santoso
 * updated date : Oct 1, 2022
 * created date : Oct 1, 2022 
 * ==================================
 */


const { APP_NAME, APP_PORT, APP_URL } = require('./config/config')
const express = require('express');
const cors = require('cors');
const path = require('path');
const publicFeedRoute = require('./routes/publicFeedRoutes')


const app = express();

/**
 * 
 * for react frontend client
 */
app.use(express.static('public'))

app.get("/", (req, res, next) =>
{
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.use(cors({ origin: '*' }))
app.use("/api/v1/public-feeds", publicFeedRoute)
app.listen(APP_PORT, () => console.log(`
============================
${APP_NAME} APP Started
Listening On Port  : ${APP_PORT}
URL                : ${APP_URL}:${APP_PORT}
============================
`))

module.exports = app