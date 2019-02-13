export declare class JsonResponse {
    detail: {};
    headers: {};
    signee: {
        'by': string;
    };
    static MetaVersion: number;
    blob: {
        meta: {
            header: {
                version: number;
            };
            produced: Date;
            updated: Date;
            signed: {
                by: string;
                when: Date;
            };
        };
        data: {};
    };
    json: string;
    constructor(detail?: {}, headers?: {}, signee?: {
        'by': string;
    });
    write(): string;
    private _write;
    private setDetails;
    private constructMeta;
    private addHeader;
}
export default JsonResponse;
