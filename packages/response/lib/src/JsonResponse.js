/**
 * --------------------------
 * - OPEngine: JsonResponse -
 * --------------------------
 */
var JsonResponse = (function () {
    function JsonResponse(detail, headers, signee) {
        if (detail === void 0) { detail = {}; }
        if (headers === void 0) { headers = {}; }
        if (signee === void 0) { signee = { 'by': 'default.profile' }; }
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
    JsonResponse.prototype.write = function () {
        this._write();
        return this.json;
    };
    /**
     * ----------------------------------------------
     * - Write JSON string to local member variable -
     * ----------------------------------------------
     */
    JsonResponse.prototype._write = function () {
        this.blob.meta.updated = new Date(); // keep flipping updated time
        this.json = JSON.stringify(this.blob);
    };
    /**
     * -----------------------------
     * - Construct the data object -
     * -----------------------------
     */
    JsonResponse.prototype.setDetails = function () {
        this.blob.data = this.detail;
    };
    /**
     * ----------------------------------------
     * - Constructing the metadata for header -
     * ----------------------------------------
     */
    JsonResponse.prototype.constructMeta = function () {
        var _this = this;
        // We "merge" the data to not destroy any possibly preset keys.
        var header_keys = Object.keys(this.headers);
        if (header_keys.length > 0) {
            header_keys.forEach(function (key) {
                var key_value = _this.headers[key];
                _this.addHeader(key, key_value);
            });
        }
        var singee_keys = Object.keys(this.signee);
        if (singee_keys.length > 0) {
            singee_keys.forEach(function (key) {
                var key_value = _this.signee[key];
                _this.blob.meta.signed[key] = key_value;
            });
        }
        this.blob.meta.updated = new Date();
    };
    /**
     * @param key string The key we want to use
     * @param key_value A mixture of values (string, array, objects)
     */
    JsonResponse.prototype.addHeader = function (key, key_value) {
        this.blob.meta.header[key] = key_value;
    };
    JsonResponse.MetaVersion = 1;
    return JsonResponse;
})();
exports.JsonResponse = JsonResponse;
exports["default"] = JsonResponse;
