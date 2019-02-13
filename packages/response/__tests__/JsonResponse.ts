import JsonResponse from '../src/JsonResponse';

let expected = {
    meta: {
        header: {
            version: JsonResponse.MetaVersion
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

let trial = new JsonResponse();