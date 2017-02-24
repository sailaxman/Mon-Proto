"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var server_list_component_1 = require("./server-list.component");
var server_component_1 = require("./server.component");
var material_1 = require("@angular/material");
var server_routing_module_1 = require("./server-routing.module");
var ServerModule = (function () {
    function ServerModule() {
    }
    return ServerModule;
}());
ServerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            server_routing_module_1.ServerRoutingModule, material_1.MaterialModule.forRoot()
        ],
        declarations: [
            server_list_component_1.ServerListComponent,
            server_component_1.ServerComponent
        ]
    })
], ServerModule);
exports.ServerModule = ServerModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=server.module.js.map