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
var log_component_1 = require("./../logs/log.component");
var delivery_component_1 = require("./../deliveries/delivery.component");
var queue_component_1 = require("./../queues/queue.component");
var DynamicComponent = (function () {
    function DynamicComponent(resolver) {
        this.resolver = resolver;
    }
    Object.defineProperty(DynamicComponent.prototype, "componentData", {
        // component: Class for the component you want to create
        // inputs: An object with key/value pairs mapped to input name/input value
        set: function (data) {
            if (!data) {
                return;
            }
            // Inputs need to be in the following format to be resolved properly
            var inputProviders = Object.keys(data.inputs).map(function (inputName) { return { provide: inputName, useValue: data.inputs[inputName] }; });
            var resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
            // We create an injector out of the data we want to pass down and this components injector
            var injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            // We create a factory out of the component we want to create
            var factory = this.resolver.resolveComponentFactory(data.component);
            // We create the component using the factory and the injector
            var component = factory.create(injector);
            // We insert the component into the dom container
            this.dynamicComponentContainer.insert(component.hostView);
            // We can destroy the old component is we like by calling destroy
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicComponent;
}());
__decorate([
    core_1.ViewChild('dynamicComponentContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicComponent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DynamicComponent.prototype, "componentData", null);
DynamicComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dynamic-component',
        entryComponents: [log_component_1.default, delivery_component_1.default, queue_component_1.default],
        template: "\n    <div #dynamicComponentContainer></div>\n  ",
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], DynamicComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DynamicComponent;
//# sourceMappingURL=dynamic-component.js.map