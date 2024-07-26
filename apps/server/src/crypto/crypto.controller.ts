import { Controller, Get, Sse } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { concatMap, timer } from 'rxjs';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Sse('assets')
  getAssets() {
    return timer(0, 10000).pipe(
      concatMap(() => this.cryptoService.getAssets()),
    );
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
