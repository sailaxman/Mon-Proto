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
var queue_service_1 = require("./queue.service");
var QueueComponent = (function () {
    function QueueComponent(injector, _queuemessageService) {
        this.injector = injector;
        this._queuemessageService = _queuemessageService;
        this.serverName = this.injector.get('serverName');
    }
    QueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._queuemessageService.getMessages(this.serverName)
            .subscribe(function (queuemessages) { return _this.queuemessages = queuemessages; }, function (error) { return _this.errorMessage = error; });
    };
    return QueueComponent;
}());
QueueComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sm-queues',
        templateUrl: 'queue-list.component.html',
        styleUrls: ['queue-list.component.css'],
        providers: [queue_service_1.QueueMessageService]
    }),
    __metadata("design:paramtypes", [core_1.Injector, queue_service_1.QueueMessageService])
], QueueComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueueComponent;
//# sourceMappingURL=queue.component.js.map