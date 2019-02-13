import * as express from 'express';

export interface ControllerInterface {
    router: express.Router;
    setupRoutes();
}

export default ControllerInterface;