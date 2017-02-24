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
var core_1 = require("@angular/core");
var delivery_service_1 = require("./delivery.service");
var DeliveryComponent = (function () {
    function DeliveryComponent(injector, _deliverymessageService) {
        this.injector = injector;
        this._deliverymessageService = _deliverymessageService;
        this.serverName = this.injector.get('serverName');
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._deliverymessageService.getMessages(this.serverName)
            .subscribe(function (deliverymessages) { return _this.deliverymessages = deliverymessages; }, function (error) { return _this.errorMessage = error; });
    };
    return DeliveryComponent;
}());
DeliveryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sm-deliveries',
        templateUrl: 'delivery-list.component.html',
        styleUrls: ['delivery-list.component.css'],
        providers: [delivery_service_1.DeliveryMessageService]
    }),
    __metadata("design:paramtypes", [core_1.Injector, delivery_service_1.DeliveryMessageService])
], DeliveryComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeliveryComponent;
//# sourceMappingURL=delivery.component.js.map