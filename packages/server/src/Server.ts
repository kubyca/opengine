import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import Security from './enums/security/policy';

export class OPEngineServer {
    public app: express.Application = express();

    public constructor() {
        this.setupBodyparser();
        this.setupCookieParser();
        this.setupCsrf();
    }

    private setupBodyparser() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private setupCsrf() {
        this.app.use(
            csurf({
                cookie: true
            })
        );
    }

    private setupCookieParser() {
        this.app.use( cookieParser() );
    }

    public setSecurityPolicy( policy ) {
        switch ( policy ) {
            case Security.POLICY_MINIMUM:
                this.app.use(
                    helmet({
                        frameguard: {
                            action: 'deny'
                        }
                    })
                );
                break;
            case Security.POLICY_DEFAULT:
            case Security.POLICY_STANDARD:
                    this.app.use(helmet());
                    this.app.use(helmet.frameguard({ action: 'deny' }));
                    break;
            case Security.POLICY_ALL:
                    this.app.use(helmet());
                    this.app.use(helmet.frameguard({ action: 'deny' }));
                    this.app.use(
                        helmet.expectCt({
                            maxAge: 123,
                            enforce: true
                        })
                    );
                    this.app.use(
                        helmet.permittedCrossDomainPolicies({
                            permittedPolicies: 'master-only'
                        })
                    );
                    break;
            case Security.POLICY_NONE:
            default:
                    console.warn(`[WARNING] You are running with no security policy, this is not recommended if running in production.`);
                    break;

        }
    }

    public setupControllers( controllers ) {
        controllers.forEach( controller => {
            this.app.use('/', controller.router);
        });
    }

    public listen( port: number = 5861 ) {
        this.app.listen( port, () => {
            console.log(`WebCMS Server: Online, listening on port ${port}`)
        });
    }
}

export default OPEngineServer;