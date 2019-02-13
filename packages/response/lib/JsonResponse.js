"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonResponse {
    constructor(detail = {}, headers = {}, signee = { 'by': 'default.profile' }) {
        this.detail = detail;
        this.headers = headers;
        this.signee = signee;
        this.blob = {
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
            data: {}
        };
        this.json = '';
        this.constructMeta();
        this.setDetails();
    }
    write() {
        this._write();
        return this.json;
    }
    _write() {
        this.blob.meta.updated = new Date();
        this.json = JSON.stringify(this.blob);
    }
    setDetails() {
        this.blob.data = this.detail;
    }
    constructMeta() {
        let header_keys = Object.keys(this.headers);
        if (header_keys.length > 0) {
            header_keys.forEach(key => {
                let key_value = this.headers[key];
                this.addHeader(key, key_value);
            });
        }
        let singee_keys = Object.keys(this.signee);
        if (singee_keys.length > 0) {
            singee_keys.forEach(key => {
                let key_value = this.signee[key];
                this.blob.meta.signed[key] = key_value;
            });
        }
        this.blob.meta.updated = new Date();
    }
    addHeader(key, key_value) {
        this.blob.meta.header[key] = key_value;
    }
}
JsonResponse.MetaVersion = 1;
exports.JsonResponse = JsonResponse;
exports.default = JsonResponse;
//# sourceMappingURL=JsonResponse.js.map