const axios = require('axios')
const mapArrToString = require('../../sync/02-mapArrayToString/mapArrayToString')

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id);
        return mapArrToString(userIds);
    } catch (error) {}
}

module.exports = getData
