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
var log_service_1 = require("./log.service");
var LogComponent = (function () {
    function LogComponent(injector, _logmessageService) {
        this.injector = injector;
        this._logmessageService = _logmessageService;
        this.serverName = this.injector.get('serverName');
    }
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logmessageService.getMessages(this.serverName)
            .subscribe(function (logmessages) { return _this.logmessages = logmessages; }, function (error) { return _this.errorMessage = error; });
    };
    return LogComponent;
}());
LogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sm-logs',
        templateUrl: 'log-list.component.html',
        styleUrls: ['log-list.component.css'],
        providers: [log_service_1.LogMessageService]
    }),
    __metadata("design:paramtypes", [core_1.Injector, log_service_1.LogMessageService])
], LogComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LogComponent;
//# sourceMappingURL=log.component.js.map