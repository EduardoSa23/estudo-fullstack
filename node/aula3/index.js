const fs = require('fs').promisses
const path = require('path')

fs.readdirSync('./')
.then(files => console.log(files))
.catch(e => console.log(e))