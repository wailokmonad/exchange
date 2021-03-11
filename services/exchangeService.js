const axios = require('axios');
const {endpoint} = require("../config");

module.exports = async (base) => {
    return await axios.get(`${endpoint}/latest?base=${base}`)
}