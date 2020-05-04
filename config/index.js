// Load .env file (required)
// MSI_SERVER_URL="localhost:82"
// MSI_SERVER_USER=MSIAfterburner
// MSI_SERVER_PASS= ... (right click on server icon -> security)
require('dotenv').config();

module.exports = {
    msiRemoteServer: {
        url: process.env.MSI_SERVER_URL,
        user: process.env.MSI_SERVER_USER,
        pass: process.env.MSI_SERVER_PASS
    }
}