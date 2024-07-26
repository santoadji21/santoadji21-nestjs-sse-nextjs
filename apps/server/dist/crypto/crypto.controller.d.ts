import { CryptoService } from './crypto.service';
export declare class CryptoController {
    private readonly cryptoService;
    constructor(cryptoService: CryptoService);
    getAssets(): import("rxjs").Observable<any>;
    getHello(): string;
}
