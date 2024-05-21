const { application } = require("express");
const express =  require("express");
const cors = require('cors');
const app = express();
const adminRouter = require('./routes/adminRouter');
const sequelize = require("./configs/db_config");
const bodyParser = require("body-parser");

app.get('/', (req, res) => {
    res.send("This is a Home Page");
})

app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ['post', 'get', 'put', 'delete'],
    credentials : true
}))

// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//

app.use(express.json());


app.use(adminRouter.route)

sequelize;
app.listen(5000, () => {
    console.log("Server : http://localhost:5000");
})
