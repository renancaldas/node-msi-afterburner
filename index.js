const msiRemoteServer = require('./app/msiRemoteServer');
const utils = require('./app/utils');
const { inspect } = require('util');

msiRemoteServer.getXmlDataAsync()
    .then((xml) => {
        const response = utils.convertXmlToJson(xml);

        if (response.error) {
            console.log(response.error.message || response.error);
        } else {
            const data = {
                temps: utils.getTempsFromResponse(response),
                usage: utils.getUsageFromResponse(response)
            }

            console.log(inspect(response, false, null, true));
            console.log('Parsed data:', data);
        }
    })
    .catch(console.log);
