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
var server_service_1 = require("./server.service");
var ServerListComponent = (function () {
    function ServerListComponent(_serverService) {
        this._serverService = _serverService;
    }
    ServerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._serverService.getServers()
            .subscribe(function (servers) { return _this.servers = servers; }, function (error) { return _this.errorMessage = error; });
    };
    return ServerListComponent;
}());
ServerListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'server-list.component.html',
        styleUrls: ['server-list.component.css'],
        providers: [server_service_1.ServerService]
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService])
], ServerListComponent);
exports.ServerListComponent = ServerListComponent;
//# sourceMappingURL=server-list.component.js.map