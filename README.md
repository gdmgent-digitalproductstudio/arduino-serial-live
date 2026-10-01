# serial app

1. download
https://rogerthat.be/client.zip

2. init npm project

npm init -y
- in package.json, zet "type": "module"

3. install dependencies
npm i serialport 
npm i express 
npm i @serialport/parser-readline 

4. maak /src map
5. Maak src/list-ports.js
6. script definieren "list": "node src/list-ports.js" in package.json

7. 