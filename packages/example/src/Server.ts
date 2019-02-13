import server_init from '../../server/src/Server';
import Security from '../../server/src/enums/security/policy';
import DebugPage from './controllers/DebugPage';

const server = new server_init();

// ---- SETUP SECURITY POLICY ----
server.setSecurityPolicy( Security.POLICY_DEFAULT );

// ---- DEFINE USABLE CONTROLLERS ----

server.setupControllers([
    new DebugPage()
]);

server.listen();