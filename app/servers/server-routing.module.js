"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var server_component_1 = require("./server.component");
var serverRoutes = [
    { path: 'server/:serverName', component: server_component_1.ServerComponent }
];
var ServerRoutingModule = (function () {
    function ServerRoutingModule() {
    }
    return ServerRoutingModule;
}());
ServerRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(serverRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ServerRoutingModule);
exports.ServerRoutingModule = ServerRoutingModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=server-routing.module.js.map