"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const policy_1 = require("./enums/security/policy");
class OPEngineServer {
    constructor() {
        this.app = express();
        this.setupBodyparser();
        this.setupCookieParser();
        this.setupCsrf();
    }
    setupBodyparser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
    setupCsrf() {
        this.app.use(csurf({
            cookie: true
        }));
    }
    setupCookieParser() {
        this.app.use(cookieParser());
    }
    setSecurityPolicy(policy) {
        switch (policy) {
            case policy_1.default.POLICY_MINIMUM:
                this.app.use(helmet({
                    frameguard: {
                        action: 'deny'
                    }
                }));
                break;
            case policy_1.default.POLICY_DEFAULT:
            case policy_1.default.POLICY_STANDARD:
                this.app.use(helmet());
                this.app.use(helmet.frameguard({ action: 'deny' }));
                break;
            case policy_1.default.POLICY_ALL:
                this.app.use(helmet());
                this.app.use(helmet.frameguard({ action: 'deny' }));
                this.app.use(helmet.expectCt({
                    maxAge: 123,
                    enforce: true
                }));
                this.app.use(helmet.permittedCrossDomainPolicies({
                    permittedPolicies: 'master-only'
                }));
                break;
            case policy_1.default.POLICY_NONE:
            default:
                console.warn(`[WARNING] You are running with no security policy, this is not recommended if running in production.`);
                break;
        }
    }
    setupControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    listen(port = 5861) {
        this.app.listen(port, () => {
            console.log(`WebCMS Server: Online, listening on port ${port}`);
        });
    }
}
exports.OPEngineServer = OPEngineServer;
exports.default = OPEngineServer;
//# sourceMappingURL=Server.js.map