import * as express from 'express';
import ControllerInterface from './interfaces/ControllerInterface';
export declare class Controller implements ControllerInterface {
    router: express.Router;
    constructor();
    setupRoutes(): void;
}
export default Controller;
