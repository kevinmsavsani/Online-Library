const express = require('express');
const cors = require('cors');
var indexRouter = require('./routes/index');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
