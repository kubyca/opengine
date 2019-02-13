import * as express from 'express';
import ControllerInterface from '../../server/interfaces/ControllerInterface';

export class Controller implements ControllerInterface {

    public router: express.Router = express.Router();

    constructor() {
        this.setupRoutes();
    }

    setupRoutes() {
        // ---- Define your routes in this overwritten method ----
        // eg. this.router.get('/test', this.testRoute);
        //     this.router.post('/test', this.testPostRoute);
    }
}

export default Controller;