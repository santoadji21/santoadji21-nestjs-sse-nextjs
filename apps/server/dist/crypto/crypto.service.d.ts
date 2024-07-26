import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class CryptoService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private readonly apiKey;
    getAssets(): Observable<any>;
}
