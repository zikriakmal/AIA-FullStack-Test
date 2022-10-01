/**
 * author       : Zikri Akmal Santoso
 * description  : Config file set to get from .env
 * updated date : Oct 1, 2022
 * created date : Oct 1, 2022 
 * ==================================
 */
require('dotenv').config()
module.exports = {
    APP_PORT: process.env.APP_PORT || 8000,
    APP_URL: process.env.APP_URL || "http://127.0.0.1",
    APP_NAME: process.env.APP_NAME || "AIA Test",
    FLICKER_API_URL: process.env.FLICKER_API_URL || "https://www.flickr.com/services"
}