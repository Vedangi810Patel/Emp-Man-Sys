const { application } = require("express");
const express =  require("express");
const cors = require('cors');
const app = express();

app.get('/', (req, res) => {
    res.send("This is a Home Page");
})

app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ['post', 'get', 'put', 'delete'],
    credentials : true
}))

app.use(express.json());

app.listen(5000, () => {
    console.log("Server : http://localhost:5000");
})
