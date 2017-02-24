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
var router_1 = require("@angular/router");
var log_component_1 = require("./../logs/log.component");
var delivery_component_1 = require("./../deliveries/delivery.component");
var queue_component_1 = require("./../queues/queue.component");
var ContentComponent = (function () {
    function ContentComponent(_route) {
        this._route = _route;
        this.componentData = null;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route
            .params
            .subscribe(function (params) {
            console.log(params);
            _this.serverName = params['serverName'];
            _this.content = params['content'];
            if (_this.content == 'Logs') {
                _this.componentData = {
                    component: log_component_1.default,
                    inputs: {
                        serverName: _this.serverName,
                    }
                };
            }
            if (_this.content == 'Deliveries') {
                _this.componentData = {
                    component: delivery_component_1.default,
                    inputs: {
                        serverName: _this.serverName,
                    }
                };
            }
            if (_this.content == 'Queues') {
                _this.componentData = {
                    component: queue_component_1.default,
                    inputs: {
                        serverName: _this.serverName,
                    }
                };
            }
        });
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sm-content',
        template: '<dynamic-component [componentData]="componentData"></dynamic-component>'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map