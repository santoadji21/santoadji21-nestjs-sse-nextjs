"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("./crypto.service");
const rxjs_1 = require("rxjs");
let CryptoController = class CryptoController {
    constructor(cryptoService) {
        this.cryptoService = cryptoService;
    }
    getAssets() {
        return (0, rxjs_1.timer)(0, 10000).pipe((0, rxjs_1.concatMap)(() => this.cryptoService.getAssets()));
    }
    getHello() {
        return 'Hello World!';
    }
};
exports.CryptoController = CryptoController;
__decorate([
    (0, common_1.Sse)('assets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getAssets", null);
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CryptoController.prototype, "getHello", null);
exports.CryptoController = CryptoController = __decorate([
    (0, common_1.Controller)('crypto'),
    __metadata("design:paramtypes", [crypto_service_1.CryptoService])
], CryptoController);
//# sourceMappingURL=crypto.controller.js.map