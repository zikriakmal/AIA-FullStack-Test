const axios = require('axios');
const { FLICKER_API_URL } = require('../config/config');

const getFeeds = async (req) =>
{
    const data = await axios.get(FLICKER_API_URL + `/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${req.tag}`);
    const fetchedData = data.data.items ?? [];
    const status = data.status !== 200 ? "fail" : "success"

    return { status: status, data: fetchedData };
}


module.exports = { getFeeds }