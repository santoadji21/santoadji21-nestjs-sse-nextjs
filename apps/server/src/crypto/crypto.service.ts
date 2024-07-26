import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}
  private readonly apiKey = '87fe4811-b40f-450d-bd7b-7c9405921956';

  getAssets(): Observable<any> {
    return this.httpService.get('https://api.coincap.io/v2/assets');
  }
}
