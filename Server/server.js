const MongooseConenction = require('./db/mongoConnection');
const express = require('express');
const app = express();
const cors = require('cors');
const members = require('./routes/membersRoute');
// const coronaRecords = require('./routes/coronaRecordsRoute');
const port = 3000;

app.use(cors());

(async () => {
    await MongooseConenction();
})();

app.use(express.json());
app.use('/api/members', members);
// app.use('/api/coronaRecords', coronaRecords);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('An error in app, please try later.')
})

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})