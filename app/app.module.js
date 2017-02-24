"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var message_filter_pipe_1 = require("./messages/message-filter.pipe");
var home_component_1 = require("./home/home.component");
var material_1 = require("@angular/material");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var content_module_1 = require("./content/content.module");
var server_module_1 = require("./servers/server.module");
var app_routing_module_1 = require("./app-routing.module");
var not_found_component_1 = require("./not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, content_module_1.ContentModule, server_module_1.ServerModule, ngx_datatable_1.NgxDatatableModule, forms_1.FormsModule, http_1.HttpModule, material_1.MaterialModule.forRoot(), app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, message_filter_pipe_1.MessageFilterPipe, home_component_1.HomeComponent, not_found_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map