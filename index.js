const convert = require('xml-js');
const msiRemoteServer = require('./msiRemoteServer');

msiRemoteServer.getXmlDataAsync()
    .then((xml) => {
        var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
        console.log(result1);
    })
    .catch(console.log);
