var JsonResponse_1 = require('../src/JsonResponse');
var expected = {
    meta: {
        header: {
            version: JsonResponse_1["default"].MetaVersion
        },
        produced: new Date(),
        updated: new Date(),
        signed: {
            by: 'default.profile',
            when: new Date()
        }
    },
    data: {
        is_test: true
    }
};
var trial = new JsonResponse_1["default"]();
