const _ = require('lodash');
const { Summon } = require('../models/Summons');
const express = require('express');
const moment = require('moment');
const router = express.Router();


// router.get('/', async (req, res) => {

//     const users = await User.find().sort();
//     res.send(users);
// });
// router.post('/findCase', async (req, res) => {
//     await CaseRecord.findOne({ caseNumber: req.body.caseNumber }, function (err, doc) {
//         if (err) console.log(err)
//         if (doc) {
//             res.send(doc)
//         } else {
//             res.sendStatus(404)
//         }
//     })
// })

router.post('/findSummon', async (req, res) => {
    await Summon.findOne({ caseNumber: req.body.caseNumber }, function (err, doc) {
        if (err) console.log(err)
        if (doc) {
            res.send(doc)
        } else {
            res.sendStatus(404)
        }
    })
})

router.post('/addSummon', async (req, res) => {


    SmnRcrd = new Summon({
        name: req.body.name,
        judge: req.body.judge,
        address: req.body.address,
        date: req.body.date,
        caseNumber: req.body.caseNumber,
        tehsil: req.body.tehsil,
        status: req.body.status,
        station: req.body.station,
    });


    await Summon.insertMany(SmnRcrd)

    res
        .sendStatus(200);
});

module.exports = router;
