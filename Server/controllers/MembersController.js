const Controller = require('./controllers');
const service = require('../services/membersService');

class MembersController extends Controller {
    constructor() {
        super(service)
    }
}

let controller = new MembersController();
module.exports = controller;