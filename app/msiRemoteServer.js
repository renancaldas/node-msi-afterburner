const http = require('http');
const { msiRemoteServer } = require('../config');

const getXmlDataAsync = () => new Promise((resolve, reject) => {
    http.get(`http://${msiRemoteServer.url}/mahm`, {
        method: 'GET',
        auth: `${msiRemoteServer.user}:${msiRemoteServer.pass}`
    }, (res) => {
        let xml = '';
        res.on('data', (chunk) => { xml += `${chunk}`; });
        res.on('end', () => resolve(xml));
    }).on('error', (error) => reject(error));
});

module.exports = {
    getXmlDataAsync
}