/**
 * --------------------------
 * - OPEngine: JsonResponse -
 * --------------------------
 */
export class JsonResponse {

    public static MetaVersion: number = 1;

    public blob = {
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

    public json: string = '';

    constructor( public detail = {}, public headers = {}, public signee = { 'by': 'default.profile' } ) {
        this.constructMeta();
        this.setDetails();
    }

    public write() {
        this._write();
        return this.json;
    }

    /**
     * ----------------------------------------------
     * - Write JSON string to local member variable -
     * ----------------------------------------------
     */
    private _write() {
        this.blob.meta.updated = new Date(); // keep flipping updated time
        this.json = JSON.stringify( this.blob );
    }

    /**
     * -----------------------------
     * - Construct the data object -
     * -----------------------------
     */
    private setDetails() {
        this.blob.data = this.detail;
    }

    /**
     * ----------------------------------------
     * - Constructing the metadata for header -
     * ----------------------------------------
     */
    private constructMeta() {
        // We "merge" the data to not destroy any possibly preset keys.
        let header_keys = Object.keys( this.headers );
        if( header_keys.length > 0 ) {
            header_keys.forEach( key => {
                let key_value = this.headers[key];
                this.addHeader( key, key_value );
            });
        }
        let singee_keys = Object.keys( this.signee );
        if( singee_keys.length > 0 ) {
            singee_keys.forEach( key => {
                let key_value = this.signee[ key ];
                this.blob.meta.signed[ key ] = key_value;
            });
        }
        this.blob.meta.updated = new Date();
    }

    /**
     * @param key string The key we want to use
     * @param key_value A mixture of values (string, array, objects)
     */
    private addHeader( key: string, key_value: any ) {
        this.blob.meta.header[key] = key_value;
    }
}

export default JsonResponse;