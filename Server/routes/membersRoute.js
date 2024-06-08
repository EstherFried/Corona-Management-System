const express = require('express');
const router = express.Router();
const controller = require('../controllers/membersController');

router.get('/', async (req, res, next) => {
    try {
        const result = await controller.getAll();
        res.json(result);
    } catch (error) {
        if (error.message == 'members not found') {
            res.status(400).send('members not found');
        }
        next(error);
    }
})

router.get('/:memberId', async (req, res, next) => {
    try {
        const result = await controller.get(req.params.memberId);
        res.json(result);
    }
    catch (error) {
        if (error.message == 'member not found') {
            res.status(404).send(`member with id ${req.params.memberId} not found`);
        } else
            next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        let result = await controller.insert(req.body);
        res.status(201).send(result);
    } catch (error) {
        if (error.message == 'invalid new member id') {
            res.status(400).send(`member with id ${req.body.id_number} invalid`)
        }
        else next(error);
    }
});

router.put('/:memberId', async (req, res, next) => {
    try {
        let result = await controller.update(req.params.memberId, req.body);
        res.status(200).send(result);
    } catch (error) {
        if (error.message == 'could not update member') {
            res.status(404).send(`could not update member id ${req.params.memberId}, member not found`);
        }
        else next(error);
    }
});

router.delete('/:memberId', async (req, res, next) => {
    try {
        let result = await controller.delete(req.params.memberId);
        res.status(200).send(result);
    } catch (error) {
        if (error.message == 'could not delete member') {
            res.status(404).send(`could not delete member id ${req.params.memberId}, member not found`);
        }
        else next(error);
    }
})

module.exports = router;