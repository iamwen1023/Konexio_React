const  express = require('express')
var cors = require('cors')
const dataCountry = require("./dataCountries");
console.log(dataCountry);
const app = express()
const port = 3003
app.use(cors())
// This is the secret magic:
// app.get('/'
// means for GET requests on the '/' route (so localhost:3003/)  
// call the following function
// req is the request object (with query params, maybe)
// res is the response object
// In the body of the function, calling res.json send a response to the
// client in json format
app.get('/France', (req, res) => {
    console.log(dataCountry.dataCountry[0]);
    res.json(dataCountry.dataCountry[0]);
})
app.get('/Brazil', (req, res) => {
    res.json(dataCountry.dataCountry[1]);
})
app.get('/Croatia', (req, res) => {
    res.json(dataCountry.dataCountry[2]);
})

// instruct the server to 'listen' to connections on port 3003
app.listen(port, () => {
  console.log(`http server listening on port ${port}`)
})
