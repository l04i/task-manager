const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectToDB = require('./db/connect');
require('dotenv').config();


const port = process.env.PORT || 3000;


connectToDB(process.env.MONGO_URI).then((result) => {
    app.listen(port, console.log('LISTENING ONN PORT 3000'));
}).catch((error) => {
    console.log(error);
});

app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1/tasks', tasks);

app.use((req, res) => {
    res.status(404).send("Route is not found");
})