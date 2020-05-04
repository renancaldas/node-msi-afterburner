

# node-msi-afterburner
A NodeJS application to consume real-time data from MSI Afterburner Remote Server

![](https://raw.githubusercontent.com/renancaldas/node-msi-afterburner/master/img/terminal.png)

# How to use
1. Download MSI Afterburner
    [http://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip](http://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip)

2. Download MSI Afterburner Remote Server
    [http://download.msi.com/uti_exe/vga/MSIAfterburnerRemoteServer.zip](http://download.msi.com/uti_exe/vga/MSIAfterburnerRemoteServer.zip)

3. Run the **MSI Afterburner**, **Remote Server** and copy the user pass by right-clicking on **Remote Server tray icon -> Security**

4. Clone this repo and create an **.env** file (same level as the package.json) 
    ```
    MSI_SERVER_URL="localhost:82"
    MSI_SERVER_USER=MSIAfterburner
    MSI_SERVER_PASS=...
    ```
    
5. Run the app using `npm start` or `node index.js`

# Author

Renan Caldas de Oliveira

- Web: http://www.renancaldas.com
