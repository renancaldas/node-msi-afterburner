const convert = require('xml-js');

const getDataFromHardwareMonitorEntries = (response, srcName) => {
    try {
        const hardwareEntries = response.HardwareMonitor.HardwareMonitorEntries.HardwareMonitorEntry;
        return hardwareEntries.filter(entry => entry.srcName._text === srcName)[0].data._text;
    } catch(ex) { 
        console.log(`Error on getting ${srcName} from HardwareMonitorEntries: ${ex}`);
        return null;
    }
}

const convertXmlToJson = (xml) => JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));

const getTempsFromResponse = (response) => {
    return {
        CPU: getDataFromHardwareMonitorEntries(response, 'CPU temperature'),
        GPU: getDataFromHardwareMonitorEntries(response, 'GPU temperature')
    }
}
const getUsageFromResponse = (response) => {
    return {
        CPU: getDataFromHardwareMonitorEntries(response, 'CPU usage'),
        GPU: getDataFromHardwareMonitorEntries(response, 'GPU usage')
    }
}

module.exports = {
    convertXmlToJson,
    getTempsFromResponse,
    getUsageFromResponse
}