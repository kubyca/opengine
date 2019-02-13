import * as express from 'express';
import Controller from './Controller';
import JsonResponse from '../tools/response/JsonResponse';

export class DebugPage extends Controller {
    showInformationPage( request: express.Request, response: express.Response ) {
        let json_resp = new JsonResponse({
            status: 'OK',
            debug: true,
            message: 'This debug page is online, and it is loading successfully.'
        });

        response.send(json_resp.write());
    }

    showPostInformationPage( request: express.Request, response: express.Response ) {
        let json_resp = new JsonResponse({
            status: 'OK',
            debug: true,
            is_post: true,
            message: 'This debug page is online, and it is loading successfully.'
        });

        response.send(json_resp.write());
    }

    setupRoutes() {
        this.router.get('/debug', this.showInformationPage);
        this.router.post('/debug', this.showPostInformationPage);
    }
}