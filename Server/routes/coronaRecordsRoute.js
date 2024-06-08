// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/CoronaRecordsController');

// router.get('/', async (req, res, next) => {
//     try {
//         const result = await controller.getAll();
//         res.json(result);
//     } catch (error) {
//         if (error.message == 'records not found') {
//             res.status(400).send('records not found');
//         }
//         next(error);
//     }
// })

// router.get('/:memberId', async (req, res, next) => {
//     try {
//         const result = await controller.get(req.params.memberId);
//         res.json(result);
//     }
//     catch (error) {
//         if (error.message == 'corona records not found') {
//             res.status(404).send(`record of member id ${req.params.memberId} not found`);
//         } else
//             next(error);
//     }
// })

// router.post('/', async (req, res, next) => {
//     try {
//         let result = await controller.insert(req.body);
//         res.status(201).send(result);
//     } catch (error) {
//         if (error.message == 'invalid new member id') {
//             res.status(400).send(`new record member with id ${req.body.member_id} invalid`)
//         }
//         else next(error);
//     }
// });

// router.put('/:memberId', async (req, res, next) => {
//     try {
//         let result = await controller.update(req.params.memberId, req.body);
//         res.status(200).send(result);
//     } catch (error) {
//         if (error.message == 'could not update record') {
//             res.status(404).send(`could not update record of member id ${req.params.memberId}, record not found`);
//         }
//         else next(error);
//     }
// });

// router.delete('/:memberId', async (req, res, next) => {
//     try {
//         let result = await controller.delete(req.params.memberId);
//         res.status(200).send(true);
//     } catch (error) {
//         if (error.message == 'could not delete record') {
//             res.status(404).send(`could not delete record of member id ${req.params.memberId}, record not found`);
//         }
//         else next(error);
//     }
// })

// module.exports = router;



// // const express = require('express');
// // const router = express.Router();
// // const controller = require('../controllers/coronaRecordsController');

// // router.get('/', async (req, res) => {
// //     const result = await controller.getAll(req.query);
// //     res.json(result);
// // })

// // module.exports = router;