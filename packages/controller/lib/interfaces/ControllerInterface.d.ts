import * as express from 'express';
export interface ControllerInterface {
    router: express.Router;
    setupRoutes(): any;
}
export default ControllerInterface;
