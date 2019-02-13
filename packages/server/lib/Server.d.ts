import * as express from 'express';
export declare class OPEngineServer {
    app: express.Application;
    constructor();
    private setupBodyparser;
    private setupCsrf;
    private setupCookieParser;
    setSecurityPolicy(policy: any): void;
    setupControllers(controllers: any): void;
    listen(port?: number): void;
}
export default OPEngineServer;
