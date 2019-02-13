import { server_init } from '../src/server/init';
import Security from '../src/core/enums/security/policy';
import { DebugPage } from '../src/core/controllers/DebugPage';

const server = new server_init();

// ---- SETUP SECURITY POLICY ----
server.setSecurityPolicy( Security.POLICY_DEFAULT );

// ---- DEFINE USABLE CONTROLLERS ----

server.setupControllers([
    new DebugPage()
]);

server.listen();